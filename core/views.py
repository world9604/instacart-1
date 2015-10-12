from django.shortcuts import render, redirect
from django.contrib import auth
from models import User

from django.http import Http404

from django.core.exceptions import ValidationError


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
    return redirect('apply')
  else:
    raise Http404


def apply(request):
  user = User.objects.get(id=request.sessions['uid'])

  if user.stage == 'applied':
    return render(request, 'core/apply.html')

  elif user.stage == 'quiz_started':
    return render(request, 'core/quiz.html')

  elif user.stage == 'quiz_complated':
    return render(request, 'core/quiz_completed.html')

  elif user.stage == 'onboarding_requested':
    return render(request, 'core/onboarding_requested.html')

  elif user.stage == 'onboarding_complated':
    return render(request, 'core/onboarding_completed.html')

  elif user.stage == 'hired':
    return render(request, 'core/hired.html')
