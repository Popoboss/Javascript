let pokemonRepository = (function () {
  let repository = [
   { name: 'Vulpix', height: 0.3, type: 'fire' },
   { name: 'Machop', height: 2, type: 'fire' },
   {name: 'Growlithe', height: 0.6, type: 'fire' },
 ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return repository;
  }

  function showDetails(pokemon){
    console.log(pokemon.name)
  }
  function addListener (button, pokemon) {
    button.addEventListener ("click", function () {
      showDetails(pokemon)
    })
  }
  function addListItem(pokemon){
    let pokemonItem = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonItem.appendChild(listpokemon);
    addListener(button,pokemon);

  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails

  }
})();

pokemonRepository.add({ name: "Mew", height: 1.4, types: ["psychic"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
pokemonRepository.addListItem(pokemon);
});
