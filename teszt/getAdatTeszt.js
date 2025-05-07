import Modell from "../Modell.js";

function getAdatTeszt_jo_vegpont() {
  const modell = new Modell();
  let tesztJoVegpont = "https://pokeapi.co/api/v2/pokemon-form/1";
  const vart = {
    form_name: "",
    form_names: [],
    form_order: 1,
    id: 1,
    is_battle_only: false,
    is_default: true,
    is_mega: false,
    name: "bulbasaur",
    names: [],
    order: 1,
    pokemon: {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pmon/1/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/spritster/sprites/pokemon/back/1.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/spriteer/sprites/pokemon/back/shiny/1.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/tes/pokemon/shiny/1.png",
      front_shiny_female: null,
    },
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/atype/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    version_group: {
      name: "red-blue",
      url: "https://pokeapi.co/api/v2/version-group/1/",
    },
  };
  modell.getAdat(tesztJoVegpont, tesztCallback, tesztHibaCallback);

  function tesztCallback(adat) {
    console.log("Lefutott a teszt jó végponttal.");
    console.assert(
      JSON.stringify(
        adat[0] === JSON.stringify(vart),
        " hibás adatot kapunk jó végpontra"
      )
    );

    console.log("lefutott a callback");
  }
  function tesztHibaCallback(adat) {
    console.log("hiba: " + adat);
  }
}

function getAdatTeszt_hibas_vegpont() {
  /* meghívódik-e a teszt
    jó adtokat kapunk-e, a végpontról*/
  const modell = new Modell();
  let tesztJoVegpont = "https://pokeapi.co/api/v2/pokemon-/1";
  /* mock adatokat gyártok, ezzel hívom meg a függvényt */
  const vart = {};
  modell.getAdat(tesztJoVegpont, tesztCallback, tesztHibaCallback);

  function tesztCallback(adat) {
    /* adat - lista */
    console.log(
      "HIBA! nem ennek kellene meghivódnia, mert nincs ilyen végpont"
    );
  }
  function tesztHibaCallback(error) {
    /* itt kapom a hibaüzenetet */
    console.log("hiba: " + error);
  }
}

getAdatTeszt_jo_vegpont();
getAdatTeszt_hibas_vegpont();
