const resultText = document.getElementById("result");

function play(){
    const machineOption = Math.floor(Math.random()* 3)
    return machineOption
}


var hola = function(aMov,atype,eMov1,etype1,eMov2,etype2,eMov3,etype3,eMov4,etype4,aName,eName,object){
    val = play()
    if (val == 0){
        resultText.innerHTML=aName + " Utilizo" + aMov + " en" + eName;
        /*setTimeout(function(){
        setTimeout(function(){
            resultText.innerHTML= "Es muy efectivo";
        },3000);
        
            resultText.innerHTML= eName + "Utilizo" + eMov1 + "en" + aName;
        },3000);
        setTimeout(function(){
            resultText.innerHTML= "F en el chat";
        },3000);*/
    }else if(val==1){
        resultText.innerHTML=aName + "Utilizo" + aMov + "en" + eName;
    }else if(val==2){
        resultText.innerHTML=aName + "Utilizo" + aMov + "en" + eName;
    }else{
        resultText.innerHTML=aName + "Utilizo" + aMov + "en" + eName;
    }
    
};


$(document).ready(function(){
    $("#pk1").click(function() {       
        $("#field1").toggle(500);//Oculta el equipo puchamon
        $("#pk1-img").toggle(500);//muestra el div del pk1-img
      /*  const random = play();
        if(random == 1){
            
        }*/
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