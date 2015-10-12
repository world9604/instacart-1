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

  # elif user.stage == 'quiz_complated':
  #   return render(request, 'core/quiz_completed.html')

  # elif user.stage == 'onboarding_requested':
  #   return render(request, 'core/onboarding_requested.html')

  # elif user.stage == 'onboarding_complated':
  #   return render(request, 'core/onboarding_completed.html')

  # elif user.stage == 'hired':
  #   return render(request, 'core/hired.html')

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

  # For each user, find a bucket for each date
  for user in all_users:
    print 'user', user.email
    slot = find_slot(user.applied_date.date(), start_date, end_date)
    if slot >= 0:
      buckets[slot]['applied'] += 1
    if user.stage == 'applied':
      continue

    slot = find_slot(user.quiz_started_date.date(), start_date, end_date)
    if slot >= 0:
      buckets[slot]['quiz_started'] += 1
    if user.stage == 'quiz_started':
      continue

    slot = find_slot(user.quiz_completed_date.date(), start_date, end_date)
    if slot >= 0:
      buckets[slot]['quiz_completed'] += 1
    if user.stage == 'quiz_completed':
      continue

    slot = find_slot(user.onboarding_requested_date.date(), start_date, end_date)
    if slot >= 0:
      buckets[slot]['onboarding_requested'] += 1
    if user.stage == 'onboarding_requested':
      continue

    slot = find_slot(user.onboarding_completed_date.date(), start_date, end_date)
    if slot >= 0:
      buckets[slot]['onboarding_completed'] += 1
    if user.stage == 'onboarding_completed':
      continue

    slot = find_slot(user.hired_date, start_date.date(), end_date)
    if slot >= 0:
      buckets[slot]['hired'] += 1

  
  # all_users = Users.objects.all()
  print buckets
  # return JsonResponse({'foo': 'bar'})
  return JsonResponse({'foo': 'bar'})
