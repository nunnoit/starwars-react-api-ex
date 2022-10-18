export const starshipsStore = {
    starships: [],
    starship: {}
};

export function starshipActions(getStore, getActions, setStore) {
  const BASE_URL = process.env.BASE_URL;
  return {
    getStarships: async () => {
      //console.log(BASE_URL)
      let resultado = await fetch(`${BASE_URL}starships`);
      if (resultado.ok) {
        console.log("Se trajo correctamente la lista de starships");
        let resultadoJSON = await resultado.json();
        console.log("resultadoJSON: ", resultadoJSON.results)
        let store = getStore();
        console.log('store:', store);
        
        setStore({ ...store, starships: resultadoJSON.results });
        return resultadoJSON;
      } else {
        console.log("hubo un error en la petición de starships");
        return false;
      }
    },

    getStarship: async (numero) => {
      let resultado = await fetch(`${BASE_URL}starships/${numero}`);
      if (resultado.ok) {
        console.log("Se trajo correctamente el starship solicitado");
        let resultadoJSON = await resultado.json();
        console.log("resJSON: ", resultadoJSON.result);
        let store = getStore();
        setStore({ ...store, starship: resultadoJSON.result });
        return resultadoJSON;
      } else {
        console.log("Err starships req");
        return false;
      }
    },
  };
}
