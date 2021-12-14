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
            return redirect('login')
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
            victCurrent = a.victorias
            honor = a.honor
            saldo = a.saldo
            posts = user.posts.all()
            equipoCompleto = extraer_de_db(a)
            poke_data = equipoCompleto[0]
            poke_data2 = equipoCompleto[1]

            return render(request, 'social/profile.html',{'user':user,'posts':posts,'poke_data':poke_data,'poke_data2':poke_data2,'victCurrent':str(victCurrent),'saldo':str(saldo),'honor':str(honor)})

        else: 
            posts = current_user.posts.all()
            user = current_user

            context = {'user':user,'posts':posts,'poke_data':None,'poke_data2':None,'victCurrent':"0",'saldo':"Privado"}
            return render(request, 'social/profile.html',context)
    else:   
        if username and username != current_user.username:
            user = User.objects.get(username=username)
            id_master = user.id
            a = Profile.objects.get(user_id=id_master)
            victCurrent = a.victorias
            honor = a.honor
            saldo = a.saldo
            print("entro aqui")
            print(victCurrent)
            posts = user.posts.all()
            equipoCompleto = extraer_de_db(a)
      
            poke_data = equipoCompleto[0]
            poke_data2 = equipoCompleto[1]

            return render(request, 'social/profile.html',{'user':user,'posts':posts,'poke_data':poke_data,'poke_data2':poke_data2,'victCurrent':str(victCurrent),'saldo':"privado",'honor':"privado"})
        else:
            
            posts = current_user.posts.all()
            user = current_user
            equipoCompleto = extraer_de_db(query)
            poke_data = equipoCompleto[0]
            poke_data2 = equipoCompleto[1]
            victCurrent = query.victorias
            honor = query.honor
            saldo = query.saldo
            
        
        return render(request, 'social/profile.html',{'user':user,'posts':posts,'poke_data':poke_data,'poke_data2':poke_data2,'victCurrent':str(victCurrent),'saldo':str(saldo),'honor':str(honor)})


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
    miEquipoCompleto = extraer_de_db(query)
    poke_data = miEquipoCompleto[0]
    poke_data2 = miEquipoCompleto[1]
    
    agua = query.agua
    pocion = query.pocion
    hiperPocion = query.hiperPocion
    maxPocion = query.maxPocion

    if((pk >= 10) and (pk <= 18)):
        vida = 5    
    elif((pk >= 1) and (pk <= 9)):
        vida = 7
    else:
        vida = 14
            
    context = {
        'equipoEnemigo':equipoEnemigo,
        'enemigo':enemigo,
        'poke_data':poke_data,
        'poke_data2':poke_data2,
        'pk':pk,
        'agua':agua,
        'pocion':pocion,
        'hiperPocion':hiperPocion,
        'maxPocion':maxPocion,
        'vida':vida
    }
    
    return render(request, 'social/batalla.html',context)

def finalView(request,pk,wl,a,p,h,m):
    perfilMio = Profile.objects.get(user=request.user)
    perfilMio.agua = a
    perfilMio.pocion = p
    perfilMio.hiperPocion = h
    perfilMio.maxPocion = m
    perfilMio.save()



    if(wl == 0):
        context = {
                'imagenPremio':"",
                'nombrePremio':"Mejor suerte para la proxima",
                'numeroPremio':""}
        
        print("perdiste nub")
        return render(request,'social/letreroFinal.html',context)
        
    else:
        
        victorias = perfilMio.victorias
        saldo = perfilMio.saldo
        perfilMio.victorias = victorias + 1

        honor = perfilMio.honor
        perfilMio.honor = honor + 1


        listaPremiosFacil = [1,1,1,1,1,1,1,1,1,1,
                        6,6,6,6,6,6,6,6,6,6,
                        2,2,2,2,2,2,2,6,6,6,
                        6,6,6,6,6,4,4,4,5,6,
                        6,6,6,6,6,6,6,6,6,6,
                        6,6,6,6,6,6,6,6,6,6,
                        6,6,6,6,6,6,6,6,6,6,
                        6,6,6,6,6,6,6,6,6,6,
                        6,6,6,6,6,6,6,6,6,6,
                        6,6,6,6,6,6,6,6,6,6]

        listaPremiosMedio = [
                        1,1,1,1,1,1,1,1,1,1,
                        1,1,1,1,1,6,6,6,6,6,
                        2,2,2,2,2,2,2,2,2,2,
                        2,2,2,2,6,4,4,4,5,5,
                        4,4,4,6,6,6,6,6,6,6,
                        6,6,6,6,6,6,6,6,6,6,
                        6,6,6,6,6,6,6,6,6,6,
                        6,6,6,6,6,6,6,6,6,6,
                        6,6,6,6,6,6,6,6,6,6,
                        6,6,6,6,6,6,6,6,6,6]

        listaPremiosDificil = [
                        1,1,1,1,1,1,1,1,1,1,
                        1,1,1,1,1,1,1,1,1,1,
                        2,2,2,2,2,2,2,2,2,2,
                        2,2,2,2,2,4,4,4,5,5,
                        4,4,4,4,4,4,5,5,6,6,
                        2,2,2,2,6,6,6,6,6,6,
                        6,6,6,6,6,6,6,6,6,6,
                        6,6,6,6,6,6,6,6,6,6,
                        6,6,6,6,6,6,6,6,6,6,
                        6,6,6,6,6,6,6,6,6,6]


        imagenPremio = ""
        nombrePremio = ""

        if ((pk >= 10) and (pk <= 17)):
            numeroPremio = "1"
            perfilMio.saldo = saldo + 1
            premio = random.choice(listaPremiosFacil)
            if (premio == 1):
                perfilMio.agua = (perfilMio.agua + 1)
                perfilMio.save()
                imagenPremio = "fresh_water.png"
                nombrePremio = "Agua fresca"
            elif(premio ==2):
                perfilMio.pocion = (perfilMio.pocion + 1)
                perfilMio.save()
                imagenPremio = "super_potion.png"
                nombrePremio = "Pocion"
            elif(premio ==3):
                perfilMio.HiperPocion = (perfilMio.pocion + 1)
                perfilMio.save()
                imagenPremio = "hyper_potion.png"
                nombrePremio = "Hiper Pocion"
            elif(premio ==4):
                perfilMio.MaxPocion = (perfilMio.pocion + 1)
                perfilMio.save()
                imagenPremio = "max_potion.png"
                nombrePremio = "Maxima pocion"
            else:
                perfilMio.save()
            

            context = {
                'imagenPremio':imagenPremio,
                'nombrePremio':nombrePremio,
                'numeroPremio':numeroPremio}
        elif((pk >= 1) and (pk <= 9)):
            numeroPremio = "5"
            perfilMio.saldo = saldo + 5
            premio = random.choice(listaPremiosMedio)
            if (premio == 1):
                perfilMio.agua = (perfilMio.agua + 1)
                perfilMio.save()
                imagenPremio = "fresh_water.png"
                nombrePremio = "Agua fresca"
            elif(premio ==2):
                perfilMio.pocion = (perfilMio.pocion + 1)
                perfilMio.save()
                imagenPremio = "super_potion.png"
                nombrePremio = "Pocion"
            elif(premio ==3):
                perfilMio.HiperPocion = (perfilMio.pocion + 1)
                perfilMio.save()
                imagenPremio = "hyper_potion.png"
                nombrePremio = "Hiper Pocion"
            elif(premio ==4):
                perfilMio.MaxPocion = (perfilMio.pocion + 1)
                perfilMio.save()
                imagenPremio = "max_potion.png"
                nombrePremio = "Maxima pocion"
            else:
                perfilMio.save()
            print(premio)

            context = {
                'imagenPremio':imagenPremio,
                'nombrePremio':nombrePremio,
                'numeroPremio':numeroPremio}
        else:
            numeroPremio = "10"
            perfilMio.saldo = saldo + 10
            premio = random.choice(listaPremiosDificil)
            if (premio == 1):
                perfilMio.agua = (perfilMio.agua + 1)
                perfilMio.save()
                imagenPremio = "fresh_water.png"
                nombrePremio = "Agua fresca"
            elif(premio ==2):
                perfilMio.pocion = (perfilMio.pocion + 1)
                perfilMio.save()
                imagenPremio = "super_potion.png"
                nombrePremio = "Pocion"
            elif(premio ==3):
                perfilMio.HiperPocion = (perfilMio.pocion + 1)
                perfilMio.save()
                imagenPremio = "hyper_potion.png"
                nombrePremio = "Hiper Pocion"
            elif(premio ==4):
                perfilMio.MaxPocion = (perfilMio.pocion + 1)
                perfilMio.save()
                imagenPremio = "max_potion.png"
                nombrePremio = "Maxima pocion"
            else:
                perfilMio.save()
            print(premio)

            context = {
                'imagenPremio':imagenPremio,
                'nombrePremio':nombrePremio,
                'numeroPremio':numeroPremio}
        

    return render(request,'social/letreroFinal.html',context)

def tienda(request):
    perfil = Profile.objects.get(user=request.user)
    print(perfil.user)
    context = {'perfil':perfil}
    
    return render(request,'social/tienda.html',context)

def CompraConfirmada(request,a,p,h,m,honor,saldo,c):
    perfilMio = Profile.objects.get(user=request.user)
    aguaInventario = perfilMio.agua
    pocionInventario = perfilMio.pocion
    hiperInventario = perfilMio.hiperPocion
    maxInventario = perfilMio.maxPocion
    honorInventario = perfilMio.honor
    
    perfilMio.agua = a + aguaInventario
    perfilMio.pocion = p + pocionInventario
    perfilMio.hiperPocion = h + hiperInventario
    perfilMio.maxPocion = m + maxInventario

    calcuHonor = isCero(honor,honorInventario)

    perfilMio.honor =  calcuHonor
    perfilMio.saldo = saldo
    perfilMio.save()

    context = {
        'a':a,
        'p':p,
        'h':h,
        'm':m,
        'honor':honor,
        'saldo':saldo,
        'c':c
    }
    
    return render(request,'social/compraConfirmada.html',context)


def isCero (num,inv):
    if(num == 0):
        return 0
    else:
        resta = inv - num
        return resta
