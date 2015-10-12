from django.shortcuts import render, redirect
from django.contrib import auth
from models import User
from forms import QuizForm

from django.http import Http404

from django.core.exceptions import ValidationError
from django.http import JsonResponse

import datetime


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
      user.quiz_started_date = datetime.datetime.now()
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
        user.quiz_completed_date = datetime.datetime.now()
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


def funnels(request, start_date, end_date):
  start_date = datetime.datetime.strptime(start_date, '%Y-%m-%d')
  end_date = datetime.datetime.strptime(end_date, '%Y-%m-%d')
  print 'start', start_date
  print 'end', end_date
  return JsonResponse({'foo': 'bar'})
