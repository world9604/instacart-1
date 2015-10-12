# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_auto_20151012_0314'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='quiz',
            field=models.OneToOneField(null=True, blank=True, to='core.Quiz'),
        ),
    ]
