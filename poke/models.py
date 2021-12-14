from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    image = models.ImageField(default='defectimg.png')
    equip = models.CharField(max_length=5000,default=0)
    skills = models.CharField(max_length=1500,default=0)
    pokemon1 = models.CharField(max_length=50,default='/media/defectimg.png')
    pokemon2 = models.CharField(max_length=50,default='/media/defectimg.png')
    pokemon3 = models.CharField(max_length=50,default='/media/defectimg.png')
    pokemon4 = models.CharField(max_length=50,default='/media/defectimg.png')
    pokemon5 = models.CharField(max_length=50,default='/media/defectimg.png')
    pokemon6 = models.CharField(max_length=50,default='/media/defectimg.png')

    image_pokemon1 = models.CharField(max_length=1500,default='/media/defectimg.png')
    image_pokemon2 = models.CharField(max_length=1500,default='/media/defectimg.png')
    image_pokemon3 = models.CharField(max_length=1500,default='/media/defectimg.png')
    image_pokemon4 = models.CharField(max_length=1500,default='/media/defectimg.png')
    image_pokemon5 = models.CharField(max_length=1500,default='/media/defectimg.png')
    image_pokemon6 = models.CharField(max_length=1500,default='/media/defectimg.png')

    honor = models.IntegerField(default=0)
    victorias = models.IntegerField(default=0)
    saldo = models.IntegerField(default=0)

    agua = models.IntegerField(default=0)
    pocion = models.IntegerField(default=0)
    hiperPocion = models.IntegerField(default=0)
    maxPocion = models.IntegerField(default=0)

 
    

    def __str__(self) -> str:
        return f'Perfil de {self.user.username}'



   







class Post(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE,related_name='posts')
    timestamp = models.DateTimeField(default=timezone.now)
    content = models.TextField()

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return f'{self.user.username}:{self.content}'



class Enemigo(models.Model):
    name = models.CharField(max_length=50,default="Vacio")
    imag = models.ImageField(default='defectimg.png')
    equipo = models.CharField(max_length=1500,default=0)
    dificultad = models.CharField(max_length=50,default=0)

    class Meta:
        ordering = ['dificultad']

    def __str__(self):
        return f'{self.dificultad}:{self.name}'


    