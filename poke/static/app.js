const resultText = document.getElementById("result");
const vidaEnemiga = document.getElementById("eVida");
const teamA = document.getElementById("pokeTeamA");
const teamE = document.getElementById("pokeTeamE");
const field1 = document.getElementById('field1');
const field4 = document.getElementById('field4');
const field3 = document.getElementById('field3');
const field5 = document.getElementById('field5');

const agua = document.getElementById('agua');
const pocion = document.getElementById('pocion');
const hiperPocion = document.getElementById('hiperPocion');
const maxPocion = document.getElementById('maxPocion');

const FE1 = document.getElementById('FE1');
const PKB1 = document.getElementById('pk1');
const PKB1IMG = document.getElementById('pk1-img');

const FE2 = document.getElementById('FE2');
const PKB2 = document.getElementById('pk2');
const PKB2IMG = document.getElementById('pk2-img');


const FE3 = document.getElementById('FE3');
const PKB3 = document.getElementById('pk3');
const PKB3IMG = document.getElementById('pk3-img');


const FE4 = document.getElementById('FE4');
const PKB4 = document.getElementById('pk4');
const PKB4IMG = document.getElementById('pk4-img');

const FE5 = document.getElementById('FE5');
const PKB5 = document.getElementById('pk5');
const PKB5IMG = document.getElementById('pk5-img');

const FE6 = document.getElementById('FE6');
const PKB6 = document.getElementById('pk6');
const PKB6IMG = document.getElementById('pk6-img');




//////////////equipo enemigo 2/////////////////////////
const movA2 = document.getElementById("movA2");             //1
const typeA2 = document.getElementById("typeA2");           //2

const movE2_1 = document.getElementById("movE2_1");         //3
const type2_1 = document.getElementById("type2_1");         //4

const movE2_2 = document.getElementById("movE2_2");        //5
const type2_2 = document.getElementById("type2_2");        //6

const movE2_3 = document.getElementById("movE2_3");        //7
const type2_3 = document.getElementById("type2_3");        //8

const movE2_4 = document.getElementById("movE2_4");        //9
const type2_4 = document.getElementById("type2_4");        //10

const nombreA2 = document.getElementById("nombreA2");       //11

const nombreE2 = document.getElementById("nombreE2")        //12

const PokeTypeA2 = document.getElementById("PokeTypeA2");     //13

const PokeTypeE2 = document.getElementById("PokeTypeE2");     //14
////////////////////////////////////////////////////////
//////////////equipo enemigo 3/////////////////////////
const movA3 = document.getElementById("movA3");             //1
const typeA3 = document.getElementById("typeA3");           //2

const movE3_1 = document.getElementById("movE3_1");         //3
const type3_1 = document.getElementById("type3_1");         //4

const movE3_2 = document.getElementById("movE3_2");        //5
const type3_2 = document.getElementById("type3_2");        //6

const movE3_3 = document.getElementById("movE3_3");        //7
const type3_3 = document.getElementById("type3_3");        //8

const movE3_4 = document.getElementById("movE3_4");        //9
const type3_4 = document.getElementById("type3_4");        //10

const nombreA3 = document.getElementById("nombreA3");       //11

const nombreE3 = document.getElementById("nombreE3")        //12

const PokeTypeA3 = document.getElementById("PokeTypeA3");     //13

const PokeTypeE3 = document.getElementById("PokeTypeE3");     //14
////////////////////////////////////////////////////////
//////////////equipo enemigo 4/////////////////////////
const movA4 = document.getElementById("movA4");             //1
const typeA4 = document.getElementById("typeA4");           //2

const movE4_1 = document.getElementById("movE4_1");         //3
const type4_1 = document.getElementById("type4_1");         //4

const movE4_2 = document.getElementById("movE4_2");        //5
const type4_2 = document.getElementById("type4_2");        //6

const movE4_3 = document.getElementById("movE4_3");        //7
const type4_3 = document.getElementById("type4_3");        //8

const movE4_4 = document.getElementById("movE4_4");        //9
const type4_4 = document.getElementById("type4_4");        //10

const nombreA4 = document.getElementById("nombreA4");       //11

const nombreE4 = document.getElementById("nombreE4")        //12

const PokeTypeA4 = document.getElementById("PokeTypeA4");     //13

const PokeTypeE4 = document.getElementById("PokeTypeE4");     //14
////////////////////////////////////////////////////////
//////////////equipo enemigo 5/////////////////////////
const movA5 = document.getElementById("movA5");             //1
const typeA5 = document.getElementById("typeA5");           //2

const movE5_1 = document.getElementById("movE5_1");         //3
const type5_1 = document.getElementById("type5_1");         //4

const movE5_2 = document.getElementById("movE5_2");        //5
const type5_2 = document.getElementById("type5_2");        //6

const movE5_3 = document.getElementById("movE5_3");        //7
const type5_3 = document.getElementById("type5_3");        //8

const movE5_4 = document.getElementById("movE5_4");        //9
const type5_4 = document.getElementById("type5_4");        //10

const nombreA5 = document.getElementById("nombreA5");       //11

const nombreE5 = document.getElementById("nombreE5")        //12

const PokeTypeA5 = document.getElementById("PokeTypeA5");     //13

const PokeTypeE5 = document.getElementById("PokeTypeE5");     //14
////////////////////////////////////////////////////////
//////////////equipo enemigo 6/////////////////////////
const movA6 = document.getElementById("movA6");             //1
const typeA6 = document.getElementById("typeA6");           //2

const movE6_1 = document.getElementById("movE6_1");         //3
const type6_1 = document.getElementById("type6_1");         //4

const movE6_2 = document.getElementById("movE6_2");        //5
const type6_2 = document.getElementById("type6_2");        //6

const movE6_3 = document.getElementById("movE6_3");        //7
const type6_3 = document.getElementById("type6_3");        //8

const movE6_4 = document.getElementById("movE6_4");        //9
const type6_4 = document.getElementById("type6_4");        //10

const nombreA6 = document.getElementById("nombreA6");       //11

const nombreE6 = document.getElementById("nombreE6")        //12

const PokeTypeA6 = document.getElementById("PokeTypeA6");     //13

const PokeTypeE6 = document.getElementById("PokeTypeE6");     //14
////////////////////////////////////////////////////////




var matriz = [
    [2,2,2,2,2,2,2,2,2,2,2,2,1,0,2,2,1,2],
    [2,1,1,2,4,4,2,2,2,2,2,4,1,2,1,2,4,2],
    [2,4,1,2,1,2,2,2,4,2,2,2,4,2,1,2,2,2],
    [2,2,4,1,1,2,2,2,0,4,2,2,2,2,1,2,2,2],
    [2,1,4,2,1,2,2,1,4,1,2,1,4,2,1,2,1,2],
    [2,1,1,2,4,1,2,2,4,4,2,2,2,2,4,2,1,2],
    [4,2,2,2,2,4,2,1,2,1,1,1,4,0,2,4,4,1],
    [2,2,2,2,4,2,2,1,1,2,2,2,1,1,2,2,0,4],
    [2,4,2,4,1,2,2,4,2,0,2,1,4,2,2,2,4,2],
    [2,2,2,1,4,2,4,2,2,2,2,4,1,2,2,2,1,2],
    [2,2,2,2,2,2,4,4,2,2,1,2,2,2,2,0,1,2],
    [2,1,2,2,4,2,1,1,2,1,4,2,2,1,2,4,1,1],
    [2,4,2,2,2,4,1,2,1,4,2,4,2,2,2,2,1,2],
    [0,2,2,2,2,2,2,2,2,2,4,2,2,4,2,1,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,2,1,0],
    [2,2,2,2,2,2,1,2,2,2,4,2,2,4,2,1,2,1],
    [2,1,1,1,2,4,2,2,2,2,2,2,4,2,2,2,1,2],
    [2,1,2,2,2,2,4,1,2,2,2,2,2,2,4,4,1,2]
];

function play(){
    const machineOption = Math.floor(Math.random()* 3)
    return machineOption
}

function ArmarDireccionMatriz(dir){
    a = 0;
    switch (dir) {
        case "normal":
            a = 0;
            break;
        case "fire":
            a = 1;  
            break;
        case "water":
            a = 2;
            break;
        case "electric":
            a = 3;
            break;
        case "grass":
            a = 4;    
            break;
        case "ice":
            a = 5;    
            break;
        case "fighting":
            a = 6;
            break;
        case "poison":
            a = 7;
            break;
            
        case "ground":
            a = 8;
            break;
        case "flying":
            a = 9;
            break;
        case "psychic":
            a = 10;
            break;
        case "bug":
            a = 11;
            break;
        case "rock":
            a = 12;
            break;
        case "ghost":
            a = 13;
            break;
        case "dragon":
            a = 14;
            break;
        case "dark":
            a = 15;
            break; 
        case "steel":
            a = 16;
            break; 
        case "fairy":
            a = 17;
            break; 
      }
    return a;
}

function calcularEfectividad(dmgP){
    if(dmgP == 0){
        return "No le afecta";
    }else if(dmgP == 1){
        return "Es poco efectivo";
    }else if(dmgP == 2){
        return "Daño normal";
    }else{
        return "Es super efectivo"
    }
}


    


var hola = function(aMov1,atype1,eMov11,etype11,eMov21,etype21,eMov31,etype31,eMov41,etype41,aName1,eName1,aPkType1,ePkType1,object){
    if((teamE.textContent) == "0"){

        field3.style.display = 'none';
        field4.style.display = 'block';
       

        
    }
    
    var conTeamE = (parseInt(teamE.textContent));

    var pepe = search();
    
    const vidaAliada = document.getElementById(pepe)
    

    
    switch (conTeamE) {
        case 6:
            if(teamA.textContent == "0"){
                setTimeout(function(){field3.style.display = 'none';},13000);
                setTimeout(function(){field5.style.display = 'block';},13000);
            }
            win = game(aMov1,atype1,eMov11,etype11,eMov21,etype21,eMov31,etype31,eMov41,etype41,aName1,eName1,aPkType1,ePkType1)

            if(win=="si"){
                setTimeout(function(){FE1.style.display='none';},9000); 
                setTimeout(function(){vidaEnemiga.innerHTML= "5"; },11000);
                setTimeout(function(){FE2.style.display = 'block';},11000); 
                
            }
            break;
        case 5:
            win = game(aMov1,atype1,(movE2_1.textContent),(type2_1.textContent),(movE2_2.textContent),(type2_2.textContent),(movE2_3.textContent),(type2_3.textContent),(movE2_4.textContent),(type2_4.textContent),aName1,(nombreE2.textContent),aPkType1,(PokeTypeE2.textContent))
            
            if(teamA.textContent == "0"){
                setTimeout(function(){field3.style.display = 'none';},13000);
                setTimeout(function(){field5.style.display = 'block';},13000);
            }
            if(win=="si"){
                setTimeout(function(){FE2.style.display='none';},9000); 
                setTimeout(function(){vidaEnemiga.innerHTML= "5"; },10000);
                setTimeout(function(){FE3.style.display = 'block';},11000);  
                
            }
            break;
        case 4:
            win = game(aMov1,atype1,(movE3_1.textContent),(type3_1.textContent),(movE3_2.textContent),(type3_2.textContent),(movE3_3.textContent),(type3_3.textContent),(movE3_4.textContent),(type3_4.textContent),aName1,(nombreE3.textContent),aPkType1,(PokeTypeE3.textContent))
            if(teamA.textContent == "0"){
                setTimeout(function(){field3.style.display = 'none';},13000);
                setTimeout(function(){field5.style.display = 'block';},13000);
            }
            if(win=="si"){
                setTimeout(function(){FE3.style.display='none';},9000); 
                setTimeout(function(){vidaEnemiga.innerHTML= "5"; },10000);
                setTimeout(function(){FE4.style.display = 'block';},11000);  
                
            }
            break;
        case 3:
            win = game(aMov1,atype1,(movE4_1.textContent),(type4_1.textContent),(movE4_2.textContent),(type4_2.textContent),(movE4_3.textContent),(type4_3.textContent),(movE4_4.textContent),(type4_4.textContent),aName1,(nombreE4.textContent),aPkType1,(PokeTypeE4.textContent))
            if(teamA.textContent == "0"){
                setTimeout(function(){field3.style.display = 'none';},13000);
                setTimeout(function(){field5.style.display = 'block';},13000);
            }
            
            if(win=="si"){
                setTimeout(function(){FE4.style.display='none';},9000); 
                setTimeout(function(){vidaEnemiga.innerHTML= "5"; },10000);
                setTimeout(function(){FE5.style.display = 'block';},11000);  
            }
            break;
        case 2:
            win = game(aMov1,atype1,(movE5_1.textContent),(type5_1.textContent),(movE5_2.textContent),(type5_2.textContent),(movE5_3.textContent),(type5_3.textContent),(movE5_4.textContent),(type5_4.textContent),aName1,(nombreE5.textContent),aPkType1,(PokeTypeE5.textContent))
            if(teamA.textContent == "0"){
                setTimeout(function(){field3.style.display = 'none';},13000);
                setTimeout(function(){field5.style.display = 'block';},13000);
            }
            if(win=="si"){
                setTimeout(function(){FE5.style.display='none';},9000); 
                setTimeout(function(){vidaEnemiga.innerHTML= "5"; },10000);
                setTimeout(function(){FE6.style.display = 'block';},11000); 
            }
            break;
            
        case 1:
            win = game(aMov1,atype1,(movE6_1.textContent),(type6_1.textContent),(movE6_2.textContent),(type6_2.textContent),(movE6_3.textContent),(type6_3.textContent),(movE6_4.textContent),(type6_4.textContent),aName1,(nombreE6.textContent),aPkType1,(PokeTypeE6.textContent))
            if(teamA.textContent == "0"){
                setTimeout(function(){field3.style.display = 'none';},9000);
                setTimeout(function(){field5.style.display = 'block';},10000);
            }
            
            if(win=="si"){
                setTimeout(function(){FE6.style.display='none';},9000); 
                setTimeout(function(){vidaEnemiga.innerHTML= "5"; },10000);
                setTimeout(function(){resultText.innerHTML= 'Felicidades ganaste';},11000); 

                setTimeout(function(){field3.style.display = 'none';},13000);
                setTimeout(function(){field4.style.display = 'block';},14000);

            }
            break;
        default:
            console.log(`Sorry, we are out none of ${expr}.`);
        }
    return object;
    
}

function search(){
    if((PKB1IMG.style.display) == 'block'){
        return "aVida";
    }else if((PKB2IMG.style.display) == 'block'){
        return "aVida2";
    }else if((PKB3IMG.style.display) == 'block'){
        return "aVida3";
    }else if((PKB4IMG.style.display) == 'block'){
        return "aVida4";
    }else if((PKB5IMG.style.display) == 'block'){
        return "aVida5";
    }else if((PKB6IMG.style.display) == 'block'){
        return "aVida6";
    }
}


function searchCancel(){
    if((PKB1IMG.style.display) == 'block'){
        return "pk1";
    }else if((PKB2IMG.style.display) == 'block'){
        return "pk2";
    }else if((PKB3IMG.style.display) == 'block'){
        return "pk3";
    }else if((PKB4IMG.style.display) == 'block'){
        return "pk4";
    }else if((PKB5IMG.style.display) == 'block'){
        return "pk5";
    }else if((PKB6IMG.style.display) == 'block'){
        return "pk6";
    }
}

function searchImgHidden(){
    if((PKB1IMG.style.display) == 'block'){
        return "pk1-img";
    }else if((PKB2IMG.style.display) == 'block'){
        return "pk2-img";
    }else if((PKB3IMG.style.display) == 'block'){
        return "pk3-img";
    }else if((PKB4IMG.style.display) == 'block'){
        return "pk4-img";
    }else if((PKB5IMG.style.display) == 'block'){
        return "pk5-img";
    }else if((PKB6IMG.style.display) == 'block'){
        return "pk6-img";
    }
}


function game(aMov,atype,eMov1,etype1,eMov2,etype2,eMov3,etype3,eMov4,etype4,aName,eName,aPkType,ePkType){

    

    val = play()
    var refin = "a"
    if (val == 0){
        
        

        var dmgA = calcularDmg(atype,ePkType)
        var dmgE = calcularDmg(etype1,aPkType)

        var finalDmgAli = finalDmgA(dmgA);
        var finalDmgEne = finalDmgE(dmgE);

        var efectividadA = calcularEfectividad(dmgA)
        var efectividadE = calcularEfectividad(dmgE)

        if((finalDmgAli <= 0)||((finalDmgEne <= 0)&&(finalDmgAli <= 0))){
            ganador(aName,aMov,eName,efectividadA);
            console.log("Ganaste")
            var conTeamE = ((parseInt(teamE.textContent)) - 1);
            setTimeout(function(){teamE.innerHTML = conTeamE;},7000);
            
            refin = "si";

        }else if((finalDmgEne <= 0)&&(finalDmgAli > 0)){
            var pepe = search()
            const vidaAliada = document.getElementById(pepe)
            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov1 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= "0";},7000);
            setTimeout(function(){resultText.innerHTML = aName + " se debilito";},8000);
            console.log("Perdiste")

            var pepe2 = searchCancel()
            const PKB1 = document.getElementById(pepe2)
            setTimeout(function(){PKB1.disabled = true;PKB1.style.opacity = 0.6;},8000);
            

            var pepe3 = searchImgHidden()
            const PKB1IMG = document.getElementById(pepe3)
            setTimeout(function(){PKB1IMG.style.display = 'none';},9000);
            
            var miEquipoSobrante = ((teamA.textContent) - 1);
            teamA.innerHTML = miEquipoSobrante; 

            refin = "no";
            
        }else {
            var pepe = search()
            const vidaAliada = document.getElementById(pepe)
            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov1 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= finalDmgEne;},7000);
            refin ="no";
        }
    }else if(val==1){
        
        var dmgA = calcularDmg(atype,ePkType)
        var dmgE = calcularDmg(etype2,aPkType)

        var finalDmgAli = finalDmgA(dmgA);
        var finalDmgEne = finalDmgE(dmgE);

        var efectividadA = calcularEfectividad(dmgA)
        var efectividadE = calcularEfectividad(dmgE)
        if((finalDmgAli <= 0)||((finalDmgEne <= 0)&&(finalDmgAli <= 0))){
            ganador(aName,aMov,eName,efectividadA);
            console.log("Ganaste")
            var conTeamE = ((parseInt(teamE.textContent)) - 1);
            setTimeout(function(){teamE.innerHTML = conTeamE;},7000);
            
            refin = "si";

        }else if((finalDmgEne <= 0)&&(finalDmgAli > 0)){
            var pepe = search()
            const vidaAliada = document.getElementById(pepe)
            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov2 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= "0";},7000);
            setTimeout(function(){resultText.innerHTML = aName + " se debilito";},8000);
            console.log("Perdiste")

            var pepe2 = searchCancel()
            const PKB1 = document.getElementById(pepe2)
            setTimeout(function(){PKB1.disabled = true;PKB1.style.opacity = 0.6;},8000);
            

            var pepe3 = searchImgHidden()
            const PKB1IMG = document.getElementById(pepe3)
            setTimeout(function(){PKB1IMG.style.display = 'none';},9000);
            
            var miEquipoSobrante = ((teamA.textContent) - 1);
            teamA.innerHTML = miEquipoSobrante; 
            refin = "no";
            
        }else {
            var pepe = search()
            const vidaAliada = document.getElementById(pepe)
            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov2 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= finalDmgEne;},7000);
            refin = "no";
            
        }
        
    }else if(val==2){
        
        var dmgA = calcularDmg(atype,ePkType)
        var dmgE = calcularDmg(etype3,aPkType)

        var finalDmgAli = finalDmgA(dmgA);
        var finalDmgEne = finalDmgE(dmgE);
        
        var efectividadA = calcularEfectividad(dmgA)
        var efectividadE = calcularEfectividad(dmgE)

        if((finalDmgAli <= 0)||((finalDmgEne <= 0)&&(finalDmgAli <= 0))){
            ganador(aName,aMov,eName,efectividadA);
            console.log("Ganaste")
            var conTeamE = ((parseInt(teamE.textContent)) - 1);
            setTimeout(function(){teamE.innerHTML = conTeamE;},7000); 
                     
            refin = "si";
            
        }else if((finalDmgEne <= 0)&&(finalDmgAli > 0)){
            var pepe = search()
            const vidaAliada = document.getElementById(pepe)
            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov3 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= "0";},7000);
            setTimeout(function(){resultText.innerHTML = aName + " se debilito";},8000);
            console.log("Perdiste")

            var pepe2 = searchCancel()
            const PKB1 = document.getElementById(pepe2)
            setTimeout(function(){PKB1.disabled = true; PKB1.style.opacity = 0.6;},8000);
            

            var pepe3 = searchImgHidden()
            const PKB1IMG = document.getElementById(pepe3)
            setTimeout(function(){PKB1IMG.style.display = 'none';},9000);
            
            var miEquipoSobrante = ((teamA.textContent) - 1);
            teamA.innerHTML = miEquipoSobrante; 
            refin = "no";
            
        }else {
            var pepe = search()
            const vidaAliada = document.getElementById(pepe)
            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov3 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= finalDmgEne;},7000);
            refin = "no";
            
        }
        
    }else{
       
        var dmgA = calcularDmg(atype,ePkType)
        var dmgE = calcularDmg(etype4,aPkType)

        var finalDmgAli = finalDmgA(dmgA);
        var finalDmgEne = finalDmgE(dmgE);
        
        var efectividadA = calcularEfectividad(dmgA)
        var efectividadE = calcularEfectividad(dmgE)

        if((finalDmgAli <= 0)||((finalDmgEne <= 0)&&(finalDmgAli <= 0))){
            ganador(aName,aMov,eName,efectividadA);
            console.log("Ganaste")
            var conTeamE = ((parseInt(teamE.textContent)) - 1);
            setTimeout(function(){teamE.innerHTML = conTeamE;},7000);      
              
            refin = "si";
            
        }else if((finalDmgEne <= 0)&&(finalDmgAli > 0)){
            var pepe = search()
            const vidaAliada = document.getElementById(pepe)
            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov4 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= "0";},7000);
            setTimeout(function(){resultText.innerHTML = aName + " se debilito";},8000);
            console.log("Perdiste")

            var pepe2 = searchCancel()
            const PKB1 = document.getElementById(pepe2)
            setTimeout(function(){PKB1.disabled = true;PKB1.style.opacity = 0.6;},8000);
            

            var pepe3 = searchImgHidden()
            const PKB1IMG = document.getElementById(pepe3)
            setTimeout(function(){PKB1IMG.style.display = 'none';},9000);
            
            var miEquipoSobrante = ((teamA.textContent) - 1);
            teamA.innerHTML = miEquipoSobrante; 
            refin = "no";
            
        }else {
            var pepe = search()
            const vidaAliada = document.getElementById(pepe)

            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov4 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= finalDmgEne;},7000);
            refin = "no";
            
        }
        
    }
    return refin;
};
function calcularDmg(tipoA,eTipo){
    var direccion = []
    direccion[0] = ArmarDireccionMatriz(tipoA);
    direccion[1] = ArmarDireccionMatriz(eTipo);
    var dps = matriz[direccion[0]][direccion[1]];
    return dps
}


$(document).ready(function(){
    $("#FE2").css("display", "none");
    $("#FE3").css("display", "none");
    $("#FE4").css("display", "none");
    $("#FE5").css("display", "none");
    $("#FE6").css("display", "none");
    $("#aVida").css("display", "none");
    $("#aVida2").css("display", "none");
    $("#aVida3").css("display", "none");
    $("#aVida4").css("display", "none");
    $("#aVida5").css("display", "none");
    $("#aVida6").css("display", "none");
    
    $("#pk1").click(function() {       
        $("#field1").css("display", "block");//Oculta el equipo puchamon

        $("#pk1-img").css("display", "block");//muestra el div del pk1-img
        $("#pk2-img").css("display", "none");
        $("#pk3-img").css("display", "none");
        $("#pk4-img").css("display", "none");
        $("#pk5-img").css("display", "none");
        $("#pk6-img").css("display", "none");

        $("#aVida").css("display", "block");
        $("#aVida2").css("display", "none");
        $("#aVida3").css("display", "none");
        $("#aVida4").css("display", "none");
        $("#aVida5").css("display", "none");
        $("#aVida6").css("display", "none");
        
    });
    $("#pk2").click(function() {       
        $("#field1").css("display", "block");//Oculta el equipo puchamon
        $("#pk2-img").css("display", "block");//muestra el div del pk1-img
        $("#pk1-img").css("display", "none");
        $("#pk3-img").css("display", "none");
        $("#pk4-img").css("display", "none");
        $("#pk5-img").css("display", "none");
        $("#pk6-img").css("display", "none");

        $("#aVida2").css("display", "block");
        $("#aVida").css("display", "none");
        $("#aVida3").css("display", "none");
        $("#aVida4").css("display", "none");
        $("#aVida5").css("display", "none");
        $("#aVida6").css("display", "none");

    });
    $("#pk3").click(function() {       
        $("#field1").css("display", "block");//Oculta el equipo puchamon
        $("#pk3-img").css("display", "block");//muestra el div del pk1-img
        $("#pk1-img").css("display", "none");
        $("#pk2-img").css("display", "none");
        $("#pk4-img").css("display", "none");
        $("#pk5-img").css("display", "none");
        $("#pk6-img").css("display", "none");

        $("#aVida3").css("display", "block");
        $("#aVida").css("display", "none");
        $("#aVida2").css("display", "none");
        $("#aVida4").css("display", "none");
        $("#aVida5").css("display", "none");
        $("#aVida6").css("display", "none");
    });
    $("#pk4").click(function() {       
        $("#field1").css("display", "block");//Oculta el equipo puchamon
        $("#pk4-img").css("display", "block");//muestra el div del pk1-img
        $("#pk1-img").css("display", "none");
        $("#pk2-img").css("display", "none");
        $("#pk3-img").css("display", "none");
        $("#pk5-img").css("display", "none");
        $("#pk6-img").css("display", "none");

        $("#aVida4").css("display", "block");
        $("#aVida").css("display", "none");
        $("#aVida2").css("display", "none");
        $("#aVida3").css("display", "none");
        $("#aVida5").css("display", "none");
        $("#aVida6").css("display", "none");
    });
    $("#pk5").click(function() {       
        $("#field1").css("display", "block");//Oculta el equipo puchamon
        $("#pk5-img").css("display", "block");//muestra el div del pk1-img
        $("#pk1-img").css("display", "none");
        $("#pk2-img").css("display", "none");
        $("#pk3-img").css("display", "none");
        $("#pk4-img").css("display", "none");
        $("#pk6-img").css("display", "none");

        $("#aVida5").css("display", "block");
        $("#aVida").css("display", "none");
        $("#aVida2").css("display", "none");
        $("#aVida3").css("display", "none");
        $("#aVida4").css("display", "none");
        $("#aVida6").css("display", "none");
    });
    $("#pk6").click(function() {       
        $("#field1").css("display", "block");//Oculta el equipo puchamon
        $("#pk6-img").css("display", "block");//muestra el div del pk1-img
        $("#pk1-img").css("display", "none");
        $("#pk2-img").css("display", "none");
        $("#pk3-img").css("display", "none");
        $("#pk4-img").css("display", "none");
        $("#pk5-img").css("display", "none");

        $("#aVida6").css("display", "block");
        $("#aVida").css("display", "none");
        $("#aVida2").css("display", "none");
        $("#aVida3").css("display", "none");
        $("#aVida4").css("display", "none");
        $("#aVida5").css("display", "none");
    });
    $("#agua-img").click(function(){  
        if(agua.textContent == "0"){
            console.log("compre pociones bb")
        }else {
            var pepe = search()
            const vidaAliada = document.getElementById(pepe)
            if(vidaAliada == null){
                console.log("seleccione un pokemon")
            }else if(vidaAliada.textContent == "5"){
                HpCurada = (parseInt(vidaAliada.textContent)) + 0
                console.log(vidaAliada.textContent)
                vidaAliada.innerHTML= HpCurada;            
            }else {
                HpCurada = (parseInt(vidaAliada.textContent)) + 1
                if(HpCurada > 5){
                    vidaAliada.innerHTML= 5;
                }else{
                    vidaAliada.innerHTML= HpCurada;   
                }
                
            }
            gasto = parseInt (agua.textContent)
            agua.innerHTML = gasto - 1    
            var aguas = agua.textContent;
            console.log(aguas)
            var pocions = pocion.textContent;
            console.log(pocions)
            var hipers = hiperPocion.textContent;
            console.log(hipers)
            var maxs = maxPocion.textContent;
            console.log(maxs)
            var strLink = "1/"+aguas+"/"+pocions+"/"+hipers+"/"+maxs;
            console.log("entro aqui?")
            console.log(strLink)
            document.getElementById("field4").setAttribute("href",strLink);
        }
        
    });
    $("#pocion-img").click(function(){
        if(pocion.textContent == "0"){
            console.log("compre pociones bb")
        }else {
            var pepe = search()
            const vidaAliada = document.getElementById(pepe)
            if(vidaAliada == null){
                console.log("seleccione un pokemon")
            }else if(vidaAliada.textContent == "5"){
                HpCurada = (parseInt(vidaAliada.textContent)) + 0
                console.log(vidaAliada.textContent)
                vidaAliada.innerHTML= HpCurada;            
            }else {
                HpCurada = (parseInt(vidaAliada.textContent)) + 2
                if(HpCurada > 5){
                    vidaAliada.innerHTML= 5;
                }else{
                    vidaAliada.innerHTML= HpCurada;   
                }
                
                
            }
            gasto = parseInt (pocion.textContent)
            pocion.innerHTML = gasto - 1    
            var aguas = agua.textContent;
            console.log(aguas)
            var pocions = pocion.textContent;
            console.log(pocions)
            var hipers = hiperPocion.textContent;
            console.log(hipers)
            var maxs = maxPocion.textContent;
            console.log(maxs)
            var strLink = "1/"+aguas+"/"+pocions+"/"+hipers+"/"+maxs;
            console.log("entro aqui?")
            console.log(strLink)
            document.getElementById("field4").setAttribute("href",strLink);
        }
        
      });
    $("#hiper-img").click(function(){ 
        if(hiperPocion.textContent == "0"){
            console.log("compre pociones bb")
        }else {
            var pepe = search()
            const vidaAliada = document.getElementById(pepe)
            if(vidaAliada == null){
                console.log("seleccione un pokemon")
            }else if(vidaAliada.textContent == "5"){
                HpCurada = (parseInt(vidaAliada.textContent)) + 0
                console.log(vidaAliada.textContent)
                vidaAliada.innerHTML= HpCurada;            
            }else {
                HpCurada = (parseInt(vidaAliada.textContent)) + 4
                if(HpCurada > 5){
                    vidaAliada.innerHTML= 5;
                }else{
                    vidaAliada.innerHTML= HpCurada;   
                }
                
                
            }
            gasto = parseInt (hiperPocion.textContent)
            hiperPocion.innerHTML = gasto - 1    
            var aguas = agua.textContent;
            console.log(aguas)
            var pocions = pocion.textContent;
            console.log(pocions)
            var hipers = hiperPocion.textContent;
            console.log(hipers)
            var maxs = maxPocion.textContent;
            console.log(maxs)
            var strLink = "1/"+aguas+"/"+pocions+"/"+hipers+"/"+maxs;
            console.log("entro aqui?")
            console.log(strLink)
            document.getElementById("field4").setAttribute("href",strLink);
        }
     });
    $("#max-img").click(function() { 
        if(maxPocion.textContent == "0"){
            console.log("compre pociones bb")
        }else {
            var pepe = search()
            const vidaAliada = document.getElementById(pepe)
            if(vidaAliada == null){
                console.log("seleccione un pokemon")
            }else if(vidaAliada.textContent == "5"){
                HpCurada = (parseInt(vidaAliada.textContent)) + 0
                console.log(vidaAliada.textContent)
                vidaAliada.innerHTML= HpCurada;            
            }else {
                HpCurada = (parseInt(vidaAliada.textContent)) + 5
                console.log(vidaAliada.textContent)
                vidaAliada.innerHTML= 5;
                
            }
            gasto = parseInt (maxPocion.textContent)
            maxPocion.innerHTML = gasto - 1    
            var aguas = agua.textContent;
            console.log(aguas)
            var pocions = pocion.textContent;
            console.log(pocions)
            var hipers = hiperPocion.textContent;
            console.log(hipers)
            var maxs = maxPocion.textContent;
            console.log(maxs)
            var strLink = "1/"+aguas+"/"+pocions+"/"+hipers+"/"+maxs;
            console.log("entro aqui?")
            console.log(strLink)
            document.getElementById("field4").setAttribute("href",strLink);
        }
     });
});


function finalDmgA(dmg){
    var finalDmg = ( (parseInt(vidaEnemiga.textContent))- dmg); 
    console.log(vidaEnemiga.textContent)
    console.log(finalDmg) 
    return finalDmg;
}

function finalDmgE(dmg){
    var pepe = search()
    const vidaAliada = document.getElementById(pepe)
    var finalDmg = ( (parseInt(vidaAliada.textContent))- dmg);
    console.log(vidaEnemiga.textContent)
    console.log(finalDmg)
    return finalDmg;
}

function ganador(aNameG,aMovG,eNameG,efectividadG){
    setTimeout(function(){resultText.innerHTML=aNameG + " Utilizo " + aMovG + " en " + eNameG ;},1000);  
    setTimeout(function(){resultText.innerHTML = efectividadG; vidaEnemiga.innerHTML= "0";},3000);
    setTimeout(function(){resultText.innerHTML = eNameG + " se debilito";},5000);
}



