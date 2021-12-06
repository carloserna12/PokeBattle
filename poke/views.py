from django.shortcuts import get_object_or_404, render, redirect
from requests.api import post
from .models import *
from .forms import UserRegisterForm
from django.contrib import messages
import requests
import random
from .models import Post, Profile
#from django.contrib.auth import *
from .teamGenerate import EliminarCaracteres, extraer_de_api,extraer_de_db, generateMov, singlePokeCreate
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
    print(type(a))
    
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
    enemigosFacil =     Enemigo.objects.filter(dificultad__contains = 'Facil')
    enemigosMedio =     Enemigo.objects.filter(dificultad__contains = 'Medio')
    enemigosDificil =   Enemigo.objects.filter(dificultad__contains = 'Dificil')
    
    enemigoRandomFacil = str(random.randint(11, 19))
    enemigoRandomMedio = str(random.randint(1, 9))
    enemigoRandomDificil = str(random.randint(20, 25))

    enemigoSelecFacil = Enemigo.objects.get(pk=enemigoRandomFacil)
    enemigoSelecMedio = Enemigo.objects.get(pk=enemigoRandomMedio)
    enemigoSelecDificil = Enemigo.objects.get(pk=enemigoRandomDificil)

    equipoPokemonFacil = (enemigoSelecFacil.equipo).split(',')
    equipo_pokemonMedio = (enemigoSelecMedio.equipo).split(',')
    equipo_pokemonDificil = (enemigoSelecDificil.equipo).split(',')
    
    
    equipoPokemonFacil = armarDificultad(equipoPokemonFacil)
    equipo_pokemonMedio = armarDificultad(equipo_pokemonMedio)
    equipo_pokemonDificil = armarDificultad(equipo_pokemonDificil)


    perfilEnemy = Enemigo.objects.all()
    
    context = { 
        'perfilEnemys': perfilEnemy,
        'equipoPokemonFacil':equipoPokemonFacil,
        'equipo_pokemonMedio':equipo_pokemonMedio,
        'equipo_pokemonDificil':equipo_pokemonDificil,
        'enemigosFacil':enemigosFacil,
        'enemigosMedio':enemigosMedio,
        'enemigosDificil':enemigosDificil,
        'enemigoSelecFacil':enemigoSelecFacil,
        'enemigoSelecMedio':enemigoSelecMedio,
        'enemigoSelecDificil':enemigoSelecDificil
        }
    
    

    return render(request,'social/combates.html',context)
   # return render(request,'social/combates.html',{'listaPokemonEnemigo':listaPokemonEnemigo})



def armarDificultad(equipo_pokemon):
    listaPokemonEnemigo = []
    for i in equipo_pokemon:
        url = "https://pokeapi.co/api/v2/pokemon/" + str(i)
        response = requests.get(url)
        content = response.json()
        cod = 0
        pokemonEnemigo = singlePokeCreate(content, cod)


        """ pokemonEnemigo= {
            'name':content['name'],
            'id':content['id'],
            'sprites':content['sprites']['front_default'],
            'types':content['types'][0]['type']['name']
            } """
        listaPokemonEnemigo.append(pokemonEnemigo)


    return listaPokemonEnemigo



def batalla(request,pk):
    enemigo = Enemigo.objects.get(pk=pk)
    equipoEnemigo = (enemigo.equipo).split(',')
    equipoEnemigo = armarDificultad(equipoEnemigo)
    
    
    query = Profile.objects.get(user=request.user)
    miEquipoCompleto = extraer_de_db(  query)
    poke_data = miEquipoCompleto[0]
    poke_data2 = miEquipoCompleto[1]
    print(poke_data)
    
    
    context = {
        'equipoEnemigo':equipoEnemigo,
        'enemigo':enemigo,
        'poke_data':poke_data,
        'poke_data2':poke_data2
    }
    
    return render(request, 'social/batalla.html',context)

