# Generated by Django 2.2.3 on 2019-12-20 11:49

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20191220_1646'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(upload_to=api.models.photo_path),
        ),
    ]
