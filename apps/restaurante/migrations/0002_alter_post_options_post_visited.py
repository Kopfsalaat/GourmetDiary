# Generated by Django 4.2.11 on 2024-04-08 00:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurante', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={},
        ),
        migrations.AddField(
            model_name='post',
            name='visited',
            field=models.BooleanField(default=False),
        ),
    ]