# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('email', models.EmailField(max_length=254)),
                ('stage', models.CharField(max_length=30, choices=[(b'applied', b'applied'), (b'quiz_started', b'quiz_started'), (b'quiz_completed', b'quiz_completed'), (b'onboarding_requested', b'onboarding_requested'), (b'onboarding_completed', b'onboarding_complated'), (b'hired', b'hired')])),
                ('applied_date', models.DateTimeField(auto_now_add=True)),
                ('quiz_started_date', models.DateTimeField()),
                ('quiz_completed_date', models.DateTimeField()),
                ('onboarding_requested_date', models.DateTimeField()),
                ('onboarding_completed_date', models.DateTimeField()),
                ('hired_date', models.DateTimeField()),
                ('latest_change', models.DateTimeField()),
            ],
        ),
    ]
