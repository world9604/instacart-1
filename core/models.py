from django.db import models
from django.core.validators import (
  MaxValueValidator,
  MinValueValidator
)

# Create your models here.

class Quiz(models.Model):
  firstname = models.CharField(max_length=100, blank=False)
  lastname = models.CharField(max_length=100, blank=False)
  reasons = models.CharField(max_length=500, blank=False)
  work_eligible = models.BooleanField(default=False)

  last_employer = models.CharField(max_length=100, blank=False)
  last_employer_from = models.DateTimeField(auto_now_add=False, blank=True, null=True)
  last_employer_to = models.DateTimeField(auto_now_add=False, blank=True, null=True)

  work_monday = models.BooleanField(default=False)
  work_tuesday = models.BooleanField(default=False)
  work_wednesday = models.BooleanField(default=False)
  work_thursday = models.BooleanField(default=False)
  work_friday = models.BooleanField(default=False)
  work_sat = models.BooleanField(default=False)
  work_sun = models.BooleanField(default=False)
  hours_per_week = models.PositiveIntegerField(default=10,
    validators=[MinValueValidator(1), MaxValueValidator(100)])

class User(models.Model):
  email = models.EmailField(blank=False, unique=True)

  STAGE_CHOICES = (
      ('applied', 'applied'),
      ('quiz_started', 'quiz_started'),
      ('quiz_completed', 'quiz_completed'),
      ('onboarding_requested', 'onboarding_requested'),
      ('onboarding_completed', 'onboarding_completed'),
      ('hired', 'hired'),

  )
  stage = models.CharField(max_length=30, choices=STAGE_CHOICES, default='applied')
  applied_date = models.DateTimeField(auto_now_add=True)
  quiz_started_date = models.DateTimeField(auto_now_add=False, blank=True, null=True)
  quiz_completed_date = models.DateTimeField(auto_now_add=False, blank=True, null=True)
  onboarding_requested_date = models.DateTimeField(auto_now_add=False, blank=True, null=True)
  onboarding_completed_date = models.DateTimeField(auto_now_add=False, blank=True, null=True)
  hired_date = models.DateTimeField(auto_now_add=False, blank=True, null=True)

  latest_change = models.DateTimeField(auto_now_add=True)

  quiz = models.OneToOneField(Quiz, null=True, blank=True)
