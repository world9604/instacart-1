# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(unique=True, max_length=254),
        ),
        migrations.AlterField(
            model_name='user',
            name='hired_date',
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='latest_change',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='onboarding_completed_date',
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='onboarding_requested_date',
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='quiz_completed_date',
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='quiz_started_date',
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='stage',
            field=models.CharField(default=b'applied', max_length=30, choices=[(b'applied', b'applied'), (b'quiz_started', b'quiz_started'), (b'quiz_completed', b'quiz_completed'), (b'onboarding_requested', b'onboarding_requested'), (b'onboarding_completed', b'onboarding_complated'), (b'hired', b'hired')]),
        ),
    ]
