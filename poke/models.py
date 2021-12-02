from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='batman.png')
    equip = models.CharField(max_length=1500,default=0)
    pokemon1 = models.CharField(max_length=1500,default=0)
    pokemon2 = models.CharField(max_length=1500,default=0)
    pokemon3 = models.CharField(max_length=1500,default=0)
    pokemon4 = models.CharField(max_length=1500,default=0)
    pokemon5 = models.CharField(max_length=1500,default=0)
    pokemon6 = models.CharField(max_length=1500,default=0)
    

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





