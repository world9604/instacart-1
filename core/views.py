from django.shortcuts import render, redirect
from django.contrib import auth
from models import User
from forms import QuizForm

from django.http import Http404

from django.core.exceptions import ValidationError
from django.http import JsonResponse

import datetime

import pytz


from copy import copy

def home(request):
  return render(request, 'core/home.html')


def login(request):
  if request.method == 'GET':
    return render(request, 'core/login.html')

  elif request.method == 'POST':
    email = request.POST['email']

    try:
      user = User.objects.get(email=email)
    except User.DoesNotExist as dn:
      user = User(email=email)
      try:
        user.full_clean()
        user.save()
      except ValidationError as e:
        error_msg = e.message_dict['email'][0]
        return render(request, 'core/login.html', {
            'error_msg': error_msg
        })

    request.session['uid'] = user.id
    return redirect('decider')
  else:
    raise Http404


def decider(request):
  if 'uid' not in request.session:
    return redirect('login')
  user = User.objects.get(id=request.session['uid'])

  if user.stage == 'applied':
    return redirect('apply')

  if user.stage == 'quiz_started':
    return redirect('quiz')

  if user.stage == 'quiz_completed':
    return redirect('quiz_completed')


def apply(request):
  if 'uid' not in request.session:
    return redirect('login')
  user = User.objects.get(id=request.session['uid'])

  if user.stage == 'applied':
    if request.method == "GET":
      return render(request, 'core/apply.html')
    elif request.method == "POST":
      user.stage = 'quiz_started'
      now = datetime.datetime.now()
      user.quiz_started_date = now
      user.latest_change = now
      user.full_clean()
      user.save()
  return redirect('decider')


def quiz(request):
  if 'uid' not in request.session:
    return redirect('login')
  user = User.objects.get(id=request.session['uid'])

  if user.stage == 'quiz_started':
    if request.method == "GET":
      quizForm = QuizForm()
      return render(request, 'core/quiz.html', {'quizForm': quizForm})

    elif request.method == "POST":
      quizForm = QuizForm(request.POST, request.FILES)
      if quizForm.is_valid():
        quiz = quizForm.save(commit=False)
        quiz.work_eligible = request.POST['work_eligible'] == 'Yes'
        quiz.save()
        user.quiz = quiz
        user.stage = 'quiz_completed'
        now = datetime.datetime.now()
        user.quiz_completed_date = now
        user.latest_change = now
        user.save()
      else:
        return render(request, 'core/quiz.html',
                      {'quizForm': quizForm,
                       'errors': quizForm.errors})

  return redirect('decider')

def quiz_completed(request):
  if 'uid' not in request.session:
    return redirect('login')
  user = User.objects.get(id=request.session['uid'])

  if user.stage == 'quiz_completed':
    return render(request, 'core/quiz_completed.html')

  return redirect('decider')


def find_slot(date, start_date, end_date):
  if date < start_date or date > end_date:
    return -1
  diff = date - start_date
  return diff.days / 7


def funnels(request, start_date, end_date):
  start_date = datetime.datetime.strptime(start_date, '%Y-%m-%d').date()
  end_date = datetime.datetime.strptime(end_date, '%Y-%m-%d').date()
  if start_date >= end_date:
    return JsonResponse({'error': 'start date must comes before end date'})
  if start_date.weekday() != 0 or end_date.weekday() != 6:
    return JsonResponse({'error': 'start date/end date must be Monday/Sunday'})
  diff = end_date - start_date
  num_entry = (diff.days + 1) / 7

  default_map = {
      'applied': 0,
      'quiz_started': 0,
      'quiz_completed': 0,
      'onboarding_requested': 0,
      'onboarding_completed': 0,
      'hired': 0,
      'rejected': 0
  }

  buckets = []
  for i in range(num_entry):
    buckets.append(copy(default_map))

  # Query all users
  all_users = User.objects.all()

  ordered_date_type = [
      'applied',
      'quiz_started',
      'quiz_completed',
      'onboarding_requested',
      'onboarding_completed',
      'hired'
  ]

  # For each user, find a bucket for each date
  for user in all_users:
    for date_type in ordered_date_type:
      user_date = getattr(user, date_type + '_date').date()
      slot = find_slot(user_date, start_date, end_date)
      if slot >= 0:
        buckets[slot][date_type] += 1
      if user.stage == date_type:
        break;

  print buckets

  results = {}
  begin_date = start_date
  for i in range(len(buckets)):
    start_date_string = start_date.strftime("%Y-%m-%d")
    end_date = start_date + datetime.timedelta(days=6)
    end_date_string = end_date.strftime("%Y-%m-%d")
    key = start_date_string + '-' + end_date_string
    start_date += datetime.timedelta(days=7)

    results[key] = buckets[i]

  return JsonResponse(results)
