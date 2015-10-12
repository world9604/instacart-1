from django.db import models

# Create your models here.

class User(models.Model):
  email = models.EmailField(blank=False, unique=True)

  STAGE_CHOICES = (
      ('applied', 'applied'),
      ('quiz_started', 'quiz_started'),
      ('quiz_completed', 'quiz_completed'),
      ('onboarding_requested', 'onboarding_requested'),
      ('onboarding_completed', 'onboarding_complated'),
      ('hired', 'hired'),

  )
  stage = models.CharField(max_length=30, choices=STAGE_CHOICES, default='applied')
  applied_date = models.DateTimeField(auto_now_add=True)
  quiz_started_date = models.DateTimeField(auto_now_add=False, blank=True)
  quiz_completed_date = models.DateTimeField(auto_now_add=False, blank=True)
  onboarding_requested_date = models.DateTimeField(auto_now_add=False, blank=True)
  onboarding_completed_date = models.DateTimeField(auto_now_add=False, blank=True)
  hired_date = models.DateTimeField(auto_now_add=False, blank=True)

  latest_change = models.DateTimeField(auto_now_add=True)
