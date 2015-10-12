# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20151012_0037'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='stage',
            field=models.CharField(default=b'applied', max_length=30, choices=[(b'applied', b'applied'), (b'quiz_started', b'quiz_started'), (b'quiz_completed', b'quiz_completed'), (b'onboarding_requested', b'onboarding_requested'), (b'onboarding_completed', b'onboarding_completed'), (b'hired', b'hired')]),
        ),
    ]
