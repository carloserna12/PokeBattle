# Generated by Django 3.2.9 on 2021-12-08 23:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('poke', '0025_alter_profile_equip'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='agua',
            field=models.ImageField(default='fresh_water.png', upload_to=''),
        ),
        migrations.AddField(
            model_name='profile',
            name='hiperPocion',
            field=models.ImageField(default='hyper_potion.png', upload_to=''),
        ),
        migrations.AddField(
            model_name='profile',
            name='maxPocion',
            field=models.ImageField(default='max_potion.png', upload_to=''),
        ),
        migrations.AddField(
            model_name='profile',
            name='pocion',
            field=models.ImageField(default='super_potion.png', upload_to=''),
        ),
    ]
