"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from core import views

from django.views.generic.base import RedirectView

urlpatterns = [
  url(r'^$', views.home, name="home"),
  url(r'^login/$', views.login, name="login"),
  url(r'^apply/$', views.apply, name="apply"),
  url(r'^quiz/$', views.quiz, name="quiz"),
  url(r'^decider/$', views.decider, name="decider"),
  url(r'^quiz_completed/$', views.quiz_completed, name="quiz_completed"),
  url(r'^funnels.json/(?P<start_date>[0-9-]+)/(?P<end_date>[0-9-]+)$', views.funnels, name="funnels")
]
