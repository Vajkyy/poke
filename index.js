import Modell from "./Modell.js";
import Pokemon from "./Pokemon.js";

let LISTA = [];
const modell = new Modell(LISTA);

for (let i = 1; i <= 1026; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon-form/${i}`;
    modell.getAdat(url, peldanyosit);    
}


function peldanyosit(adat) {
  new Pokemon(adat, document.querySelector("article"));
}
