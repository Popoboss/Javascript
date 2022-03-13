let pokemonRepository = (function() {
let pokemonList = [

{ name: 'Vulpix', height: 0.3, type: 'fire' },
{ name: 'Machop', height: 2, type: 'fire' },
{ name: 'Growlithe', height: 0.6, type: 'fire' },
];

return {
  add:function(pokemon) {
    pokemonList.push(pokemon);
  },
  getAll: function() {
    return pokemonList;
  }
};

})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Mew'});
console.log(pokemonRepository.getAll());

(pokemonRepository.getAll()).forEach (function(pokemon) {
  if (pokemon.height > 0.7) {
    document.write(
      pokemon.name +
        ' (height: ' +
        pokemon.height +
        'm) -- ' +
        'Wow, that\'s big!' +
        '<br /><br />'
    );
  } else
    document.write(
      pokemon.name +
        ' (height: ' +
        pokemon.height +
        'm)' +
        '<br /><br />'
    );
});
