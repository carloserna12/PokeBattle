from django.shortcuts import get_object_or_404, render, redirect
from .models import *
from .forms import UserRegisterForm
from django.contrib import messages
import requests
import random
from .models import Post, Profile
from django.contrib.auth import *


def feed(request):
    post = Post.objects.all()

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



def nuevo(request):
    #Funcion de peticion para saber si el perfil tiene ya un equipo, si no lo genera.
    
    query = Profile.objects.get(user=request.user)
    a = query.equip
    Contador = 2
    if a == "0":
        #Pikachu
        url = "https://pokeapi.co/api/v2/pokemon/25"
        response = requests.get(url)
        content = response.json()
        poke_data = []
        poke_data2 = []
        #Guardado de pikachu
        query.pokemon1 = url
        query.save()
        ###################
        single_poke = {
            'name':content['name'],
            'id':content['id'],
            'sprites':content['sprites']['front_default'],
            'types':content['types'][0]['type']['name'],
            'types2':'-'
            }
        poke_data.append(single_poke)


        for i in range(2):
            get_poke = "https://pokeapi.co/api/v2/pokemon/"
            poke = 0
            poke = random.randint(1, 500)
            url = get_poke + str(poke)
            response = requests.get(url)
            content = response.json()
            
                        #Guardado de pokemonURL en la base de datos
            #query = Profile.objects.get(pk=request.user.pk)
            
            
            if Contador == 2:
                query.pokemon2 = url
                query.save()
                Contador= Contador + 1
            elif Contador == 3:
                query.pokemon3 = url
                query.save()
                Contador= Contador + 1
            else:
                query.pokemon4 = url
                query.save()
                
            
            ############################################

            if (len(content['types']) == 1):
                single_poke = {
                    'name':content['name'],
                    'id':content['id'],
                    'sprites':content['sprites']['front_default'],
                    'types':content['types'][0]['type']['name'],
                    'types2':'-'
                }
                poke_data.append(single_poke)
            else:
                single_poke = {
                    'name':content['name'],
                    'id':content['id'],
                    'sprites':content['sprites']['front_default'],
                    'types':content['types'][0]['type']['name'],
                    'types2':content['types'][1]['type']['name']
                }
                poke_data.append(single_poke)


        for i in range(3):
            get_poke2 = "https://pokeapi.co/api/v2/pokemon/"
            poke2 = 0
            poke2 = random.randint(1, 500)
            url2 = get_poke2 + str(poke2)
            response2 = requests.get(url2)
            content2 = response2.json()

            #Guardado de pokemonURL en la base de datos
            #query = Profile.objects.get(pk=request.user.pk)
            
            
            if Contador == 4:
                query.pokemon4 = url2
                query.save()
                Contador= Contador + 1
            elif Contador == 5:
                query.pokemon5 = url2
                query.save()
                Contador= Contador + 1
            else:
                query.pokemon6 = url2
                query.save()
                
            
            ############################################
        #    print(len(content2['types']))        

            if (len(content2['types']) == 1):
                single_poke2 = {
                    'name':content2['name'],
                    'id':content2['id'],
                    'sprites':content2['sprites']['front_default'],
                    'types':content2['types'][0]['type']['name'],
                    'types2':'-'
                }
                poke_data2.append(single_poke2)
            else:
                single_poke2 = {
                    'name':content2['name'],
                    'id':content2['id'],
                    'sprites':content2['sprites']['front_default'],
                    'types':content2['types'][0]['type']['name'],
                    'types2':content2['types'][1]['type']['name']
                }
                poke_data2.append(single_poke2)

        #Guardando equipo completo 
        equipoCompleto = []
        equipoCompleto = poke_data + poke_data2
        query.equip = equipoCompleto
        query.save()
        
        return render(request,'social/nuevo.html',{'poke_data':poke_data,'poke_data2':poke_data2})
    else:
        P1 = query.pokemon1
        P2 = query.pokemon2
        P3 = query.pokemon3
        P4 = query.pokemon4
        P5 = query.pokemon5
        P6 = query.pokemon6
        url = P1
        response = requests.get(url)
        content = response.json()
        poke_data = []
        poke_data2 = []

        single_poke = {
            'name':content['name'],
            'id':content['id'],
            'sprites':content['sprites']['front_default'],
            'types':content['types'][0]['type']['name'],
            'types2':'-'
            }
    #  print(single_poke)
        poke_data.append(single_poke)
        Contador = 2


        for i in range(2):
            if Contador == 2:
                url = P2
                
                Contador= Contador + 1
            else:
                url = P3
            
                Contador= Contador + 1

          
            response = requests.get(url)
          
            content = response.json()
          
            if (len(content['types']) == 1):
                single_poke = {
                    'name':content['name'],
                    'id':content['id'],
                    'sprites':content['sprites']['front_default'],
                    'types':content['types'][0]['type']['name'],
                    'types2':'-'
                }
                poke_data.append(single_poke)
               
            else:
                single_poke = {
                    'name':content['name'],
                    'id':content['id'],
                    'sprites':content['sprites']['front_default'],
                    'types':content['types'][0]['type']['name'],
                    'types2':content['types'][1]['type']['name']
                }
                poke_data.append(single_poke)


        for i in range(3):
            
            if Contador == 4:
                url2 = P4
               
                Contador= Contador + 1
            elif Contador == 5:
                url2 = P5
              
                Contador= Contador + 1
            else:
                url2 = P6
              
            response2 = requests.get(url2)
            content2 = response2.json()

            if (len(content2['types']) == 1):
                single_poke2 = {
                    'name':content2['name'],
                    'id':content2['id'],
                    'sprites':content2['sprites']['front_default'],
                    'types':content2['types'][0]['type']['name'],
                    'types2':'-'
                }
                poke_data2.append(single_poke2)
            else:
                single_poke2 = {
                    'name':content2['name'],
                    'id':content2['id'],
                    'sprites':content2['sprites']['front_default'],
                    'types':content2['types'][0]['type']['name'],
                    'types2':content2['types'][1]['type']['name']
                }
                poke_data2.append(single_poke2)

        return render(request,'social/nuevo.html',{'poke_data':poke_data,'poke_data2':poke_data2})

