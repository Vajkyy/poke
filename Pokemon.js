export default class Pokemon {
    #adatObj = {};
    #szuloElem;
  
    constructor(adat, szuloElem) {
      this.#adatObj = adat;
      this.#szuloElem = szuloElem;
      this.megjelenit();
    }
  
    megjelenit() {
      let html = `
        <div class="kartya">
          <img src="${this.#adatObj.sprites.front_default}" alt="Pokémon kép">
          <h2>${this.#adatObj.name}</h2>
        </div>
      `;
      this.#szuloElem.insertAdjacentHTML("beforeend", html);
    }
  }
  