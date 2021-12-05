import requests
import random



def extraer_de_api(request):
    query = request
    Contador = 2
    equipoCompleto = []
    #Pikachu
    url = "https://pokeapi.co/api/v2/pokemon/25"
    response = requests.get(url)
    content = response.json()
    poke_data = []
    poke_data2 = []
    #Guardado de pikachu
    query.pokemon1 = url
    query.image_pokemon1 = content['sprites']['front_default']
    query.save()
    #############################habilidades random###############################
    
    movesPikachu = extraerMov(content)

    ##############################################################################
    single_poke = {
        'name':content['name'],
        'id':content['id'],
        'sprites':content['sprites']['front_default'],
        'types':content['types'][0]['type']['name'],
        'types2':'-',
        'mov1':movesPikachu[0],
        'mov2':movesPikachu[1],
        'mov3':movesPikachu[2],
        'mov4':movesPikachu[3]
        }
    poke_data.append(single_poke)
    print(single_poke)


    for i  in range(2):
        get_pokemon = "https://pokeapi.co/api/v2/pokemon/"
        pokemon_random = random.randint(1, 1282)
        url = get_pokemon + str(pokemon_random)
        response = requests.get(url)
        content = response.json()
    
        if Contador == 2:
            query.pokemon2 = url
            query.image_pokemon2 = content['sprites']['front_default']
            query.save()
            Contador= Contador + 1
        elif Contador == 3:
            query.pokemon3 = url
            query.image_pokemon3 = content['sprites']['front_default']
            query.save()
            Contador= Contador + 1
        else:
            query.pokemon4 = url
            query.image_pokemon4 = content['sprites']['front_default']
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
        poke2 = random.randint(1, 1200)
        url2 = get_poke2 + str(poke2)
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
    
    equipoCompleto.append(poke_data)
    equipoCompleto.append(poke_data2)
    print(equipoCompleto)
    query.equip = equipoCompleto
    query.save()
    
    return equipoCompleto
    

def extraer_de_db(request):
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

    #############################habilidades random###############################
    listIdMov = []
    listMov = []
    for i in range(4):
        
        idNumRandom = random.randint(1,((len(content['moves']))- 1) )
        listIdMov.append(idNumRandom)
        moveUrl = (content['moves'][idNumRandom]['move']['url'])
        responseMov = requests.get(moveUrl)
        contentMov = responseMov.json()
        moves = {
            'name':contentMov['name'],
            'type':contentMov['type']['name']
        }
        listMov.append(moves)
        
        

    
    ##############################################################################

    single_poke = {
        'name':content['name'],
        'id':content['id'],
        'sprites':content['sprites']['front_default'],
        'types':content['types'][0]['type']['name'],
        'types2':'-',
        'mov1':listMov[0],
        'mov2':listMov[1],
        'mov3':listMov[2],
        'mov4':listMov[3]
        }
    
    
    poke_data.append(single_poke)

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
            
    equipoCompleto.append(poke_data)
    equipoCompleto.append(poke_data2)
      
    return equipoCompleto


def extraerMov(content):
    listIdMov = []
    listMov = []
    for i in range(4):
        
        idNumRandom = random.randint(1,((len(content['moves']))- 1) )
        listIdMov.append(idNumRandom)
        moveUrl = (content['moves'][idNumRandom]['move']['url'])
        responseMov = requests.get(moveUrl)
        contentMov = responseMov.json()
        moves = {
            'name':contentMov['name'],
            'type':contentMov['type']['name']
        }
        listMov.append(moves)
    return listMov