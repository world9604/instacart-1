import models

from django import forms

class QuizForm(forms.ModelForm):

  class Meta:
    model = models.Quiz
    fields = [
      'firstname',
      'lastname',
      'reasons',
      'work_eligible',
      'last_employer',
      'last_employer_from',
      'last_employer_to',
      'work_monday',
      'work_tuesday',
      'work_wednesday',
      'work_thursday',
      'work_friday',
      'work_sat',
      'work_sun',
      'hours_per_week',
    ]
