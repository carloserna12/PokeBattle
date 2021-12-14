# Generated by Django 3.2.9 on 2021-12-11 18:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('poke', '0029_profile_honor'),
    ]

    operations = [
        migrations.CreateModel(
            name='PokeTeam',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slot1', models.CharField(default='/media/defectimg.png', max_length=50)),
                ('pokeFk', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='poke.profile')),
            ],
        ),
    ]