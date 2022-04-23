let modal = (function () {
    // Modal stars here
      let modalContainer = document.querySelector('#modal-container');
      function showModal(title, text, imgSrc) {
        modalContainer.innerHTML = '';
        let modal = document.createElement('div');
        modal.classList.add('modal');

        let myImage = document.createElement('img');
        myImage.src = imgSrc;
        modal.appendChild(myImage);

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        let titleElement = document.createElement('h1');
        titleElement.innerText = title;

        let contentElement = document.createElement('p');
        contentElement.innerText = text;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);


        modalContainer.classList.add('is-visible');
      }

      function hideModal() {
        modalContainer.classList.remove('is-visible');
      }

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();
        }
      });
      modalContainer.addEventListener('click', (e) => {
        // Since this is also triggered when clicking INSIDE the modal
        // We only want to close if the user clicks directly on the overlay
        let target = e.target;
        if (target === modalContainer) {
          hideModal();
        }
      });
    //Modal ends here

    //adding the return statement
    return {
      showModal: showModal,
      hideModal: hideModal,
      };

    })();


let pokemonRepository = (function () {

  function pokemonListFromExternalSource()
  {
    const apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let pokemonList = [];

    fetch(apiURL)
    .then(response=>response.json())
    .then(response =>
    {
      pokemonList = response.results;
      pokemonList.forEach(pokemon=>{
      let newPokemonList = document.querySelector(".pokemon-list");
        let listItemPokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        button.addEventListener('click', function() {

          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then(response=>response.json())
          .then(response=>{
            console.log(response)
            console.log(response.sprites.back_shiny)

             let pokemonDetails = `Height: ${response.height}`


          modal.showModal(`${pokemon.name}`, `${pokemonDetails}`, `${response.sprites.back_shiny}`);


          })
          .catch(err=>console.error(err))


          // alert(pokemonDetails);
        });
        listItemPokemon.appendChild(button);
        newPokemonList.appendChild(listItemPokemon);
        })
        })
        .catch(error=>console.log(error))

  }

//adding getAll key, with return statement-will return the pokemonList
  function getAll(){
    return pokemonList;
  }
  //adding add key, will push a new pokemon with new properties into the list
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function main()
  {
    pokemonRepository.pokemonListFromExternalSource()
  }


  return {
    getAll: getAll,
    add: add,
    main: main,
    pokemonListFromExternalSource: pokemonListFromExternalSource
    };

  })();



  pokemonRepository.main();
