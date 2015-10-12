# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.core.validators


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_auto_20151012_0114'),
    ]

    operations = [
        migrations.CreateModel(
            name='Quiz',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('firstname', models.CharField(max_length=100)),
                ('lastname', models.CharField(max_length=100)),
                ('reasons', models.CharField(max_length=500)),
                ('work_eligible', models.BooleanField(default=False)),
                ('last_employer', models.CharField(max_length=100)),
                ('last_employer_from', models.DateTimeField(null=True, blank=True)),
                ('last_employer_to', models.DateTimeField(null=True, blank=True)),
                ('work_monday', models.BooleanField(default=False)),
                ('work_tuesday', models.BooleanField(default=False)),
                ('work_wednesday', models.BooleanField(default=False)),
                ('work_thursday', models.BooleanField(default=False)),
                ('work_friday', models.BooleanField(default=False)),
                ('work_sat', models.BooleanField(default=False)),
                ('work_sun', models.BooleanField(default=False)),
                ('hours_per_week', models.PositiveIntegerField(default=10, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(100)])),
            ],
        ),
        migrations.AddField(
            model_name='user',
            name='quiz',
            field=models.OneToOneField(null=True, to='core.Quiz'),
        ),
    ]
