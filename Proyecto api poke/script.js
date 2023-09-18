
for (let i = 1; i <20; i++)
fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then( res => res.json())
        .then(json => setdata(json))

        function setdata(data){
                const cardconteiner = document.querySelector('#tarjeta')
cardconteiner.innerHTML += `
<div class="card">
<img src="${data.sprites.front_default}" alt="" srcset="">
<div class="card__content">
  <p class="card__title">${data.name}</p>
  <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  <button class="card__button">${data.id}</button>
  <button class="card__button secondary">Source Code</button>
</div>
</div>`


}

