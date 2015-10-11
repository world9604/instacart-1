from django.shortcuts import render
from django.contrib import auth


# Create your views here.

def home(request):
  return render(request, 'core/home.html')


def login(request):
  return render(request, 'core/login.html')
