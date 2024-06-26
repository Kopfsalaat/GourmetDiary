# Generated by Django 4.2.11 on 2024-04-08 01:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurante', '0002_alter_post_options_post_visited'),
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurante',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('ubication', models.CharField(max_length=255)),
                ('category', models.CharField(max_length=255)),
                ('rate', models.IntegerField()),
                ('visited', models.BooleanField(default=False)),
            ],
        ),
        migrations.DeleteModel(
            name='Post',
        ),
    ]
