# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_auto_20151012_0501'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='quiz',
            name='last_employer_from',
        ),
        migrations.RemoveField(
            model_name='quiz',
            name='last_employer_to',
        ),
        migrations.AddField(
            model_name='quiz',
            name='last_employer_dates',
            field=models.CharField(max_length=100, blank=True),
        ),
    ]
