import Buizel from '../assets/Pokemons/Buizel.png';
import Bulbasaur from '../assets/Pokemons/Bulbasaur.png';
import Charmander from '../assets/Pokemons/Charmander.png';
import Cyndaquil from '../assets/Pokemons/Cyndaquil.png';
import Grovile from '../assets/Pokemons/Grovile.png';
import Gyarados from '../assets/Pokemons/Gyarados.png';
import Pikachu from '../assets/Pokemons/Pikachu.png';
import Snorlax from '../assets/Pokemons/Snorlax.png';
import Squirtle from '../assets/Pokemons/Squirtle.png';

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max -min + 1) + min );
}

const pokedex = {
        titulo: "Pokémons",
        lista: [
            {
              nome: "Buizel",
              imagem: Buizel,
              poder: gerarNumeroAleatorio(1, 500),
              estrelas: gerarNumeroAleatorio(1, 5),
            },
            {
              nome: "Bulbasaur",
              imagem: Bulbasaur,
              poder: gerarNumeroAleatorio(1, 500),
              estrelas: gerarNumeroAleatorio(1, 5),
            },
            {
              nome: "Charmander",
              imagem: Charmander,
              poder: gerarNumeroAleatorio(1, 500),
              estrelas: gerarNumeroAleatorio(1, 5),
            },
            {
              nome: "Cyndaquil",
              imagem: Cyndaquil,
              poder: gerarNumeroAleatorio(1, 500),
              estrelas: gerarNumeroAleatorio(1, 5),
            },
            {
              nome: "Grovile",
              imagem: Grovile,
              poder: gerarNumeroAleatorio(1, 500),
              estrelas: gerarNumeroAleatorio(1, 5),
            },
            {
                nome: "Gyarados",
                imagem: Gyarados,
                poder: gerarNumeroAleatorio(1, 500),
                estrelas: gerarNumeroAleatorio(1, 5),
              },
              {
                nome: "Pikachu",
                imagem: Pikachu,
                poder: gerarNumeroAleatorio(1, 500),
                estrelas: gerarNumeroAleatorio(1, 5),
              },
              {
                nome: "Snorlax",
                imagem: Snorlax,
                poder: gerarNumeroAleatorio(1, 500),
                estrelas: gerarNumeroAleatorio(1, 5),
              },
              {
                nome: "Squirtle",
                imagem: Squirtle,
                poder: gerarNumeroAleatorio(1, 500),
                estrelas: gerarNumeroAleatorio(1, 5),
              }
          ]
        }
      
      export default pokedex;