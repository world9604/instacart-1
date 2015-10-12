# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20151012_0034'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='hired_date',
            field=models.DateTimeField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='onboarding_completed_date',
            field=models.DateTimeField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='onboarding_requested_date',
            field=models.DateTimeField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='quiz_completed_date',
            field=models.DateTimeField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='quiz_started_date',
            field=models.DateTimeField(null=True, blank=True),
        ),
    ]
