# Generated by Django 5.1.3 on 2024-11-15 01:11

import users.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_profile_profile_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='profile_picture',
            field=models.ImageField(null=True, upload_to='profile_pics/', validators=[users.models.Profile.validate_image]),
        ),
    ]
