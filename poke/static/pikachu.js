const pokeCard1 = document.querySelector('[data-poke-card-pikachu]');
const pokeName1 = document.querySelector('[data-poke-name-pikachu]');
const pokeImg1 = document.querySelector('[data-poke-img-pikachu]');
const pokeImgContainer1 = document.querySelector('[data-poke-img-container-pikachu]');
const pokeId1 = document.querySelector('[data-poke-id-pikachu]');
const pokeTypes1 = document.querySelector('[data-poke-types-pikachu]');
const pokeTypes2 = document.querySelector('[data-poke-types-pikachu2]');



const searchPokemonPikachua = event => {
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


    if(data1.types.lenght == 2){
        pokeTypes1.textContent = data1.types[0].type.name
        pokeTypes2.textContent = data1.types[1].type.name
    }else
        pokeTypes1.textContent = data1.types[0].type.name
        pokeTypes2.textContent = "."
    


    console.log(data1)
    
   
}








