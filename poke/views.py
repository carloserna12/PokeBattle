from django.shortcuts import get_object_or_404, render, redirect
from .models import *
from .forms import UserRegisterForm
from django.contrib import messages
import requests
import random
from .models import Post, Profile
from django.contrib.auth import *
from .teamGenerate import extraer_de_api,extraer_de_db


def feed(request):
    post = Profile.objects.all()
    
    context = {'posts': post}
    return render(request, 'social/feed.html',context)



def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            messages.success(request, f'Usuario {username} creado')
            return redirect('feed')
    else:
        form = UserRegisterForm()

    context = {'form':form}
    return render(request, 'social/register.html', context)

def profile(request):
    return render(request, 'social/profile.html')


def index(request):

    return render(request, 'social/index.html')


def team(request):
    query = Profile.objects.get(user=request.user)
    a = query.equip
    
    
    if a == "0":
        equipoCompleto = extraer_de_api(query)
        poke_data = equipoCompleto[0]
        poke_data2 = equipoCompleto[1]
    else:
        equipoCompleto = extraer_de_db(query)
        poke_data = equipoCompleto[0]
        poke_data2 = equipoCompleto[1]
    
    return render(request,'social/generarTeam.html',{'poke_data':poke_data,'poke_data2':poke_data2})

