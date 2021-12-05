import requests
import random
from .models import *


def extraer_de_api(request):
    cod = 0
    query = request
    Contador = 2
    equipoCompleto = []
    poke_data = []
    poke_data2 = []
    listIdMov = []
    ############################# Genera Pikachu ###############################
    contentPika = (generarPikachu(query))
    poke_data.append(contentPika)
    listIdMov.append(contentPika['movesPikachu'])
    ############################################################################
    get_pokemon = "https://pokeapi.co/api/v2/pokemon/"

    for i  in range(2):
        
        pokemon_random = random.randint(1, 900)
        url = get_pokemon + str(pokemon_random)
        response = requests.get(url)
        content = response.json()
    
        if Contador == 2:
            query.pokemon2 = url
            query.image_pokemon2 = content['sprites']['front_default']
            query.save()
            Contador= Contador + 1
        else:
            query.pokemon3 = url
            query.image_pokemon3 = content['sprites']['front_default']
            query.save()
            Contador = Contador + 1

        ############################################
        deita=(singlePokeCreate(content, cod))
        
        poke_data.append(deita)
        listIdMov.append(deita['listMov'])

        


    for i in range(3):
        
        poke2 = random.randint(1, 900)
        url2 = get_pokemon + str(poke2)
        response2 = requests.get(url2)
        content2 = response2.json()

        
        
        if Contador == 4:
            query.pokemon4 = url2
            query.image_pokemon4 = content2['sprites']['front_default']
            query.save()
            Contador= Contador + 1
        elif Contador == 5:
            query.pokemon5 = url2
            query.image_pokemon5 = content2['sprites']['front_default']
            query.save()
            Contador= Contador + 1
        else:
            query.pokemon6 = url2
            query.image_pokemon6 = content2['sprites']['front_default']
            query.save()
            
        
        ############################################
        deita=(singlePokeCreate(content2, cod))
        
        poke_data2.append(deita)
        listIdMov.append(deita['listMov'])
        

    #Guardando equipo completo 
    query.skills = listIdMov
    equipoCompleto.append(poke_data)
    equipoCompleto.append(poke_data2)
    query.equip = equipoCompleto
    query.save()


        
    return equipoCompleto
    

def extraer_de_db(request):
    cod = 1
    query = request
    Contador = 2
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
    equipoCompleto = []

    usuario = request.user
    PerfilUsuario = query
    print(PerfilUsuario)
    movPeticion = PerfilUsuario.skills

    arrayMov = []
    #Consulta de Movimientos
    cod = EliminarCaracteres(movPeticion)
    newCod = cod.split(',')
    movP1 = []
    j = 0


    for p in range(4):
        movP1.append(newCod[j])
        j = j+1

    movP2 = []
    for p in range(4):
        movP2.append(newCod[j])
        j = j+1

    movP3 = []
    for p in range(4):
        movP3.append(newCod[j])
        j = j+1

    movP4 = []
    for p in range(4):
        movP4.append(newCod[j])
        j = j+1

    movP5 = []
    for p in range(4):
        movP5.append(newCod[j])
        j = j+1
    movP6 = []
    for p in range(4):
        movP6.append(newCod[j])
        j = j+1

    
    a = rezar(movP1)
    print(a)
    
    

        


    single_poke = singlePokeCreate(content , a)
    
    
    poke_data.append(single_poke)


    

    for i in range(2):
        if Contador == 2:
            url = P2
            b = rezar(movP2)
            Contador= Contador + 1
        else:
            url = P3
            b = rezar(movP3)
            Contador= Contador + 1

        
        response = requests.get(url)
        
        content = response.json()
        poke_data.append(singlePokeCreate(content, b))
        
    for i in range(3):
        
        if Contador == 4:
            url2 = P4
            c = rezar(movP4)
            Contador= Contador + 1
        elif Contador == 5:
            url2 = P5
            c = rezar(movP5)
            Contador= Contador + 1
        else:
            url2 = P6
            c = rezar(movP6)
            
        response2 = requests.get(url2)
        content2 = response2.json()

        poke_data2.append(singlePokeCreate(content2, c))
            
    equipoCompleto.append(poke_data)
    equipoCompleto.append(poke_data2)
      
 
      



    return equipoCompleto

def generarPikachu(query):
    #Pikachu
    url = "https://pokeapi.co/api/v2/pokemon/25"
    response = requests.get(url)
    content = response.json()
    movesPikachu = generateMov(content)
    #Guardado de pikachu
    query.pokemon1 = url
    query.image_pokemon1 = content['sprites']['front_default']
    #query.skills = movesPikachu[4]
    print("sisisisisisii")
    print(movesPikachu)
    query.save()
    
    

    single_poke = {
        'name':content['name'],
        'id':content['id'],
        'sprites':content['sprites']['front_default'],
        'types':content['types'][0]['type']['name'],
        'types2':'-',
        'mov1':movesPikachu[0],
        'mov2':movesPikachu[1],
        'mov3':movesPikachu[2],
        'mov4':movesPikachu[3],
        'movesPikachu':movesPikachu[4]
        }
    return single_poke


def singlePokeCreate(content, cod):

    if cod == 0:
        listMov = generateMov(content)
    else:
        cod.append(1)
        listMov = cod   
      
        


        
    if (len(content['types']) == 1):
        single_poke = {
        'name':content['name'],
        'id':content['id'],
        'sprites':content['sprites']['front_default'],
        'types':content['types'][0]['type']['name'],
        'types2':'-',
        'mov1':listMov[0],
        'mov2':listMov[1],
        'mov3':listMov[2],
        'mov4':listMov[3],
        'listMov':listMov[4]
        }
        return single_poke
    else:
        single_poke = {
            'name':content['name'],
            'id':content['id'],
            'sprites':content['sprites']['front_default'],
            'types':content['types'][0]['type']['name'],
            'types2':content['types'][1]['type']['name'],
            'mov1':listMov[0],
            'mov2':listMov[1],
            'mov3':listMov[2],
            'mov4':listMov[3],
            'listMov':listMov[4]
            
        }
        return single_poke


def generateMov(content):
    listIdMov = []
    listMov = []
    arrayDeId = []

    for i in range(4):  
        print("cantidad de movimientos del pokemon")
        print(((len(content['moves']))))
        print("######")
        var = (len(content['moves'])- 1)
        print("var menos uno")
        print(var)
        if var <= 0:
            var = 0
            idNumRandom = 0
            print("entre XYA")
        else:
            var = var
            idNumRandom = random.randint(1,(var) )
            print("entre XYB")


        
        if(idNumRandom <= 0):
            print("dio menor que 0#####################################################")
            listIdMov.append(5)
            moverUrl = "https://pokeapi.co/api/v2/move/"
            Randoma = random.randint(1,150 )
            moveUrl = moverUrl + str(Randoma)
            
        else:
            listIdMov.append(idNumRandom)
            moveUrl = (content['moves'][idNumRandom]['move']['url'])

        responseMov = requests.get(moveUrl)
        contentMov = responseMov.json()

        arrayDeId.append(contentMov['id'])
        moves = {
            'name':contentMov['name'],
            'type':contentMov['type']['name'],
            
        }
        listMov.append(moves)
        
    listMov.append(arrayDeId)
    return listMov  


def EliminarCaracteres(cod):
    characters = "[] "
    for x in range(len(characters)):
        cod = cod.replace(characters[x],"")

    return cod

def rezar(movP1):
    a = []
    for i in movP1:
        urlGlobal = "https://pokeapi.co/api/v2/move/"
        url = urlGlobal + i
        response = requests.get(url)
        contentG = response.json()

        moves = {
            'name':contentG['name'],
            'type':contentG['type']['name'],    
        }
        a.append(moves)
    return a