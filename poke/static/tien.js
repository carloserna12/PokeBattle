const agua = document.getElementById('agua');
const pocion = document.getElementById('pocion');
const hiperPocion = document.getElementById('hiperPocion');
const maxPocion = document.getElementById('maxPocion');
const honor = document.getElementById('honor');
const saldo = document.getElementById('saldo');
const change = document.getElementById('change');

const aguasCompradas = document.getElementById('aguasCompradas');
const pocionesCompradas = document.getElementById('pocionesCompradas');
const hipersCompradas = document.getElementById('hipersCompradas');
const maxesCompradas = document.getElementById('maxesCompradas');
const changesCompradas = document.getElementById('changesCompradas');


const costAgua = 5;
const costPocion = 10;
const costHiper = 20;
const costMax = 30;
const costChange = 10;

$(document).ready(function(){  
    $("#buyAgua").click(function() {         
        var aguas = agua.value;
        var saldos = parseInt(saldo.textContent)
        var compraAgua =(saldos - (aguas * costAgua))
        if(compraAgua < 0){
            window.alert("Saldo insuficiente");
        }else{ 
            awita = parseInt(aguasCompradas.textContent)
            venta = parseInt(aguas) + awita
            aguasCompradas.innerHTML = venta
            saldo.innerHTML = compraAgua
        }
        
    
    });
    $("#buyPocion").click(function() {         
        var pocions = pocion.value;
        var saldos = parseInt(saldo.textContent)
        var compraPocion =(saldos - (pocions * costPocion))
        if(compraPocion < 0){
            window.alert("Saldo insuficiente");
        }else{ 
            po = parseInt(pocionesCompradas.textContent)
            venta = parseInt(pocions) + po
            pocionesCompradas.innerHTML = venta
            saldo.innerHTML = compraPocion
        }
    });
    $("#buyHiper").click(function() {         
        var hipers = hiperPocion.value;
        var saldos = parseInt(saldo.textContent)
        var compraHiper =(saldos - (hipers * costHiper))
        if(compraHiper < 0){
            window.alert("Saldo insuficiente");
        }else{ 
            hi = parseInt(hipersCompradas.textContent)
            venta = parseInt(hipers) + hi
            hipersCompradas.innerHTML = venta
            saldo.innerHTML = compraHiper
        }
    });
    $("#buyMax").click(function() {         
        var maxes = maxPocion.value;
        var saldos = parseInt(saldo.textContent)
        var compraMax =(saldos - (maxes * costMax))
        if(compraMax < 0){
            window.alert("Saldo insuficiente");
        }else{ 
            ma = parseInt(maxesCompradas.textContent)
            venta = parseInt(maxes) + ma
            maxesCompradas.innerHTML = venta
            saldo.innerHTML = compraMax
        }
    });
    $("#buyChange").click(function() {  
        var changes = change.value;
        var honors = parseInt(honor.textContent)
        var compraChange =(honors - (changes * costChange))
        if(compraChange < 0){
            window.alert("Saldo insuficiente");
        }else{ 
            ch = parseInt(changesCompradas.textContent)
            venta = parseInt(changes) + ch
            changesCompradas.innerHTML = venta
            honor.innerHTML = compraChange
        }       

    });
    $("#link").click(function() {  
        var aguas = aguasCompradas.textContent;
        var pocions = pocionesCompradas.textContent;
        var hipers = hipersCompradas.textContent;
        var maxs = maxesCompradas.textContent;
        var honors = honor.textContent;
        var saldos = saldo.textContent;
        var changes = changesCompradas.textContent;
        var strLink = aguas+"/"+pocions+"/"+hipers+"/"+maxs + "/" + honors + "/" + saldos + "/" + changes;
        console.log("entro aqui?")
        console.log(strLink)
        document.getElementById("link").setAttribute("href",strLink);
        console.log("compro un pokimijo")
        console.log(agua)
    });
});