from django.shortcuts import render
from django.contrib import auth
from models import User

from django.http import Http404

from django.core.exceptions import ValidationError

# Create your views here.

def home(request):
  return render(request, 'core/home.html')


def login(request):
  if request.method == 'GET':
    return render(request, 'core/login.html')

  elif request.method == 'POST':
    email = request.POST['email']
    new_user = User(email=email)
    try:
      new_user.full_clean()
    except ValidationError as e:
      error_msg = e.message_dict['email'][0]
      return render(request, 'core/login.html', {
        'error_msg': error_msg
      })

    return render(request, 'core/login.html')

  else:
    raise Http404
