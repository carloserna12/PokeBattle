from django.shortcuts import get_object_or_404, render, redirect
from requests.api import post
from .models import *
from .forms import UserRegisterForm
from django.contrib import messages
import requests
import random
from .models import Post, Profile
#from django.contrib.auth import *
from .teamGenerate import extraer_de_api,extraer_de_db
from django.contrib.auth.models import User



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

def profile(request, username=None):
    current_user = request.user
    query = Profile.objects.get(user=request.user)
    a = query.equip
    if a == "0":
        if username and username != current_user.username:
            user = User.objects.get(username=username)
            id_master = user.id
            a = Profile.objects.get(user_id=id_master)

            posts = user.posts.all()
            equipoCompleto = extraer_de_db(a)
            poke_data = equipoCompleto[0]
            poke_data2 = equipoCompleto[1]

            return render(request, 'social/profile.html',{'user':user,'posts':posts,'poke_data':poke_data,'poke_data2':poke_data2})

        else: 
            posts = current_user.posts.all()
            user = current_user
            context = {'user':user,'posts':posts,'poke_data':None,'poke_data2':None}
            return render(request, 'social/profile.html',context)
    else:   
        if username and username != current_user.username:
            user = User.objects.get(username=username)
            id_master = user.id
            a = Profile.objects.get(user_id=id_master)

            posts = user.posts.all()
            equipoCompleto = extraer_de_db(a)
            poke_data = equipoCompleto[0]
            poke_data2 = equipoCompleto[1]


        else:
            
            posts = current_user.posts.all()
            user = current_user
            equipoCompleto = extraer_de_db(query)
            poke_data = equipoCompleto[0]
            poke_data2 = equipoCompleto[1]

        
        return render(request, 'social/profile.html',{'user':user,'posts':posts,'poke_data':poke_data,'poke_data2':poke_data2})


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

def selectCombat(request):
    enemigo_random = str(random.randint(1, 2))
    enemigo_selec = Enemigo.objects.get(pk=enemigo_random)
    equipo_pokemon = enemigo_selec.equipo
    equipo_pokemon = equipo_pokemon.split(',')
    listaPokemonEnemigo = []
    for i in equipo_pokemon:
        url = "https://pokeapi.co/api/v2/pokemon/" + str(i)
        response = requests.get(url)
        content = response.json()

        pokemonEnemigo= {
            'name':content['name'],
            'id':content['id'],
            'sprites':content['sprites']['front_default'],
            'types':content['types'][0]['type']['name']
            }
        listaPokemonEnemigo.append(pokemonEnemigo)



    perfilEnemy = Enemigo.objects.all()
    
    context = {'perfilEnemys': perfilEnemy,'listaPokemonEnemigo':listaPokemonEnemigo}

    return render(request,'social/combates.html',context)
   # return render(request,'social/combates.html',{'listaPokemonEnemigo':listaPokemonEnemigo})