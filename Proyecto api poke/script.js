

const allPokemon = [];

for (let i = 1; i < 151; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(res => res.json())
    .then(json => {
      allPokemon.push(json);

     
      setdata(json);
    });
}

function setdata(data) {
  let tipos = data.types.map(type => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
  tipos = tipos.join('');
  const cardconteiner = document.querySelector('#tarjeta');
  cardconteiner.innerHTML += `
    <div class="card">
      <img src="https://play.pokemonshowdown.com/sprites/xyani/${data.name}.gif" alt="${data.name}" class="image">
      <h1>#${data.id}</h1>
      <div class="card-info">
        <span>${data.name}</span>
        <div class="pokemon-tipos">
          ${tipos}
        </div>
        <div class="pokemon-stats">
          <p class="stat">${data.height}m</p>
          <p class="stat">${data.weight}kg</p>
        </div>
      </div>
    </div>
  `;
}



const searchInput = document.querySelector('#searchInput');

searchInput.addEventListener('input', searchPokemon);

function searchPokemon() {
  const searchValue = searchInput.value.toLowerCase();

  const cardconteiner = document.querySelector('#tarjeta');
  cardconteiner.innerHTML = '';

  allPokemon.forEach(pokemon => {
    if (pokemon.name.toLowerCase().includes(searchValue)) {
      setdata(pokemon);
    }
  });
}