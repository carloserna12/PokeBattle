# Generated by Django 3.2.9 on 2021-12-13 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('poke', '0032_auto_20211213_1216'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='slot1',
            field=models.ImageField(default='defectimg.png', upload_to='pokemones'),
        ),
    ]
