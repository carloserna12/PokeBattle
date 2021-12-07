const resultText = document.getElementById("result");
const vidaAliada = document.getElementById("aVida");
const vidaEnemiga = document.getElementById("eVida");
const teamA = document.getElementById("pokeTeamA");
const teamE = document.getElementById("pokeTeamE");
const field1 = document.getElementById('field1');
const FE1 = document.getElementById('FE1')
const FE2 = document.getElementById('FE2')

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
    console.log(dmgP)
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

var hola = function(aMov,atype,eMov1,etype1,eMov2,etype2,eMov3,etype3,eMov4,etype4,aName,eName,aPkType,ePkType,object){
    val = play()
    

    if (val == 0){
        var dmgA = calcularDmg(atype,ePkType)
        var dmgE = calcularDmg(etype1,aPkType)
        var finalDmgAli = finalDmg(dmgA);
        var finalDmgEne = finalDmg(dmgE);
        var efectividadA = calcularEfectividad(dmgA)
        var efectividadE = calcularEfectividad(dmgE)

        if((finalDmgAli <= 0)||((finalDmgEne <= 0)&&(finalDmgAli <= 0))){
            ganador(aName,aMov,eName,efectividadA);
            console.log("Ganaste")
            ///////////////////////
            var conTeamE = ((parseInt(teamE.textContent)) - 1);
            console.log(conTeamE)
            setTimeout(function(){teamE.innerHTML = conTeamE;},7000);
            ///////////////////////
            
            setTimeout(function(){FE1.style.display='none';},9000);

            setTimeout(function(){FE2.style.display = 'block';},11000);
            


        }else if((finalDmgEne <= 0)&&(finalDmgAli > 0)){
            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov1 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= "0";},7000);
            setTimeout(function(){resultText.innerHTML = aName + " se debilito";},9000);
            console.log("Perdiste")
            field1.style.display = 'block';
        }else {
            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov1 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= finalDmgEne;},7000);
            
        }
    }else if(val==1){
        var dmgA = calcularDmg(atype,ePkType)
        var dmgE = calcularDmg(etype1,aPkType)
        var finalDmgAli = finalDmg(dmgA);
        var finalDmgEne = finalDmg(dmgE);
        var efectividadA = calcularEfectividad(dmgA)
        var efectividadE = calcularEfectividad(dmgE)
        if((finalDmgAli <= 0)||((finalDmgEne <= 0)&&(finalDmgAli <= 0))){
            ganador(aName,aMov,eName,efectividadA);
            console.log("Ganaste")
            
            var conTeamE = ((parseInt(teamE.textContent)) - 1);
            console.log(conTeamE)
            setTimeout(function(){teamE.innerHTML = conTeamE;},7000);
            ///////////////////////
            
            setTimeout(function(){FE1.style.display='none';},9000);
            setTimeout(function(){FE2.style.display = 'block';},11000);

        }else if((finalDmgEne <= 0)&&(finalDmgAli > 0)){
            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov2 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= "0";},7000);
            setTimeout(function(){resultText.innerHTML = aName + " se debilito";},9000);
            console.log("Perdiste")
            field1.style.display = 'block';
        }else {
            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov2 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= finalDmgEne;},7000);
        }
        
    }else if(val==2){
        var dmgA = calcularDmg(atype,ePkType)
        var dmgE = calcularDmg(etype1,aPkType)
        var finalDmgAli = finalDmg(dmgA);
        var finalDmgEne = finalDmg(dmgE);
        console.log(finalDmgAli)
        var efectividadA = calcularEfectividad(dmgA)
        var efectividadE = calcularEfectividad(dmgE)

        if((finalDmgAli <= 0)||((finalDmgEne <= 0)&&(finalDmgAli <= 0))){
            ganador(aName,aMov,eName,efectividadA);
            console.log("Ganaste")
            var conTeamE = ((parseInt(teamE.textContent)) - 1);
            console.log(conTeamE)
            setTimeout(function(){teamE.innerHTML = conTeamE;},7000);
            ///////////////////////
            
            setTimeout(function(){FE1.style.display='none';},9000);
            setTimeout(function(){FE2.style.display = 'block';},11000);

        }else if((finalDmgEne <= 0)&&(finalDmgAli > 0)){
            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov3 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= "0";},7000);
            setTimeout(function(){resultText.innerHTML = aName + " se debilito";},9000);
            console.log("Perdiste")
            field1.style.display = 'block';
        }else {
            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov3 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= finalDmgEne;},7000);
        }
        
    }else{
        var dmgA = calcularDmg(atype,ePkType)
        var dmgE = calcularDmg(etype1,aPkType)
        var finalDmgAli = finalDmg(dmgA);
        var finalDmgEne = finalDmg(dmgE);
        console.log(finalDmgAli)
        var efectividadA = calcularEfectividad(dmgA)
        var efectividadE = calcularEfectividad(dmgE)

        if((finalDmgAli <= 0)||((finalDmgEne <= 0)&&(finalDmgAli <= 0))){
            ganador(aName,aMov,eName,efectividadA);
            console.log("Ganaste")
            var conTeamE = ((parseInt(teamE.textContent)) - 1);
            console.log(conTeamE)
            setTimeout(function(){teamE.innerHTML = conTeamE;},7000);
            ///////////////////////
            
            setTimeout(function(){FE1.style.display='none';},9000);
            setTimeout(function(){FE2.style.display = 'block';},11000);

        }else if((finalDmgEne <= 0)&&(finalDmgAli > 0)){
            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov4 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= "0";},7000);
            setTimeout(function(){resultText.innerHTML = aName + " se debilito";},9000);
            console.log("Perdiste")
            field1.style.display = 'block';
        }else {
            setTimeout(function(){resultText.innerHTML=aName + " Utilizo " + aMov + " en " + eName ;},1000);
            setTimeout(function(){vidaEnemiga.innerHTML= finalDmgAli;resultText.innerHTML= efectividadA;},3000);
            setTimeout(function(){resultText.innerHTML= eName + " Utilizo " + eMov4 + " en " + aName;},5000);
            setTimeout(function(){resultText.innerHTML = efectividadE; vidaAliada.innerHTML= finalDmgEne;},7000);
        }
        
    }
    return object;
};
function calcularDmg(tipoA,eTipo){
    var direccion = []
    direccion[0] = ArmarDireccionMatriz(tipoA);
    direccion[1] = ArmarDireccionMatriz(eTipo);
    var dps = matriz[direccion[0]][direccion[1]];
    return dps
}


$(document).ready(function(){
    $("#pk1").click(function() {       
        $("#field1").toggle(500);//Oculta el equipo puchamon
        $("#pk1-img").toggle(500);//muestra el div del pk1-img
        $("#FE2").css("display", "none");
        $("#FE3").css("display", "none");
        $("#FE4").css("display", "none");
        $("#FE5").css("display", "none");
        $("#FE6").css("display", "none");
    });
    $("#pk2").click(function() {       
        $("#field1").toggle(500);
    });
    $("#pk3").click(function() {       
        $("#field1").toggle(500);
    });
    $("#pk4").click(function() {       
        $("#field1").toggle(500);
    });
    $("#pk5").click(function() {       
        $("#field1").toggle(500);
    });
    $("#pk6").click(function() {       
        $("#field1").toggle(500);
    });
});


function finalDmg(dmg){
    var finalDmg = ( (parseInt(vidaEnemiga.textContent))- dmg);
    return finalDmg;
}

function ganador(aNameG,aMovG,eNameG,efectividadG){
    setTimeout(function(){resultText.innerHTML=aNameG + " Utilizo " + aMovG + " en " + eNameG ;},1000);  
    setTimeout(function(){resultText.innerHTML = efectividadG; vidaEnemiga.innerHTML= "0";},3000);
    setTimeout(function(){resultText.innerHTML = eNameG + " se debilito";},5000);
}