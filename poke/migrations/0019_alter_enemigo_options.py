# Generated by Django 3.2.9 on 2021-12-03 16:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('poke', '0018_alter_enemigo_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='enemigo',
            options={'ordering': ['id']},
        ),
    ]
