from django.shortcuts import get_object_or_404, render, redirect
from .models import *
from .forms import UserRegisterForm
from django.contrib import messages
import requests
import random
from .models import Post, Profile

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
    #Pikachu
    url = "https://pokeapi.co/api/v2/pokemon/25"
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


    for i in range(2):
        get_poke = "https://pokeapi.co/api/v2/pokemon/"
        poke = 0
        poke = random.randint(1, 500)
        url = get_poke + str(poke)
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
        get_poke2 = "https://pokeapi.co/api/v2/pokemon/"
        poke2 = 0
        poke2 = random.randint(1, 500)
        url2 = get_poke2 + str(poke2)
        response2 = requests.get(url2)
        content2 = response2.json()
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

    #Probando BD
    query = Profile.objects.get(pk=request.user.pk)
    query.equip = 'saionara'
    query.save()
    
    print(query)
    return render(request,'social/nuevo.html',{'poke_data':poke_data,'poke_data2':poke_data2})

