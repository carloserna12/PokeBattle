//pokemon 1
const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeTypes11 = document.querySelector('[data-poke-types11]');


let datos = [];

const searchPokemon = () => {
  //  event.preventDefault();
    a = Math.floor(Math.random() * 500)
    fetch(`https://pokeapi.co/api/v2/pokemon/${a}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

const renderPokemonData = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `Nº ${data.id}`;

    let datosP1 = [data.name,data.id,data.types[0].type.name]
    datos.push(datosP1);

    console.log(data);
    if((Object.keys(data.types).length) == 2){
        pokeTypes.textContent = data.types[0].type.name
        pokeTypes11.textContent = data.types[1].type.name
    }else{
        pokeTypes.textContent = data.types[0].type.name
        pokeTypes11.textContent = "."
        }

}
console.log(datos);
////////////////////////////////////////////////////////


const pokeCard1 = document.querySelector('[data-poke-card-pikachu]');
const pokeName1 = document.querySelector('[data-poke-name-pikachu]');
const pokeImg1 = document.querySelector('[data-poke-img-pikachu]');
const pokeImgContainer1 = document.querySelector('[data-poke-img-container-pikachu]');
const pokeId1 = document.querySelector('[data-poke-id-pikachu]');
const pokeTypes1 = document.querySelector('[data-poke-types-pikachu]');
const pokeTypes2 = document.querySelector('[data-poke-types-pikachu2]');



const searchPokemonPikachu = event => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/25`)
        .then(data1 => data1.json())
        .then(response1 => renderPokemonDataP(response1))
        //.catch(err => renderNotFound())
}

const renderPokemonDataP = data1 => {
    const sprite1 =  data1.sprites.front_default;
    const { stats1, types1 } = data1;

    pokeName1.textContent = data1.name;
    pokeImg1.setAttribute('src', sprite1);
    pokeId1.textContent = `Nº ${data1.id}`;
    
    let datosP2 = [data1.name,data1.id,data1.types[0].type.name]
    datos.push(datosP2);
    
    if((Object.keys(data1.types).length) == 2){
        pokeTypes1.textContent = data1.types[0].type.name
        pokeTypes2.textContent = data1.types[1].type.name

    }else{
        pokeTypes1.textContent = data1.types[0].type.name
        pokeTypes2.textContent = "."

        }



    
   
}

console.log(datos);