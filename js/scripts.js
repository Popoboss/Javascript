let pokemonList = [
{
  name: 'Vulpix',
  height: 0.3,
  type: 'fire'
},
{
  name: 'Machop',
  height: 2,
  type: 'fighting'
},
{
  name: 'Growlithe',
  height: 0.6,
  type: 'fire'}
];


for (let i=0; i < pokemonList.length; i++){
  if(pokemonList[i].height > 1)
// Adding the comment "Wow, that is a big pokemon!!" to pokemon that are taller than 2m
  {
    document.write(pokemonList[i].name +" (Height : " + pokemonList[i].height + ")" + "- Wow this is a big pokemon!!!<br>")
  }
// Everything else would just show name of Pokemon and height.
  else {
  document.write(pokemonList[i].name + " (Height : " + pokemonList[i].height + ")<br>")
}
}
