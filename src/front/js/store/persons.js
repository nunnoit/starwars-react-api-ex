export const personsStore = {
  persons: [], //la lista de planetas
  person: {}, //planeta en específico
};

export function personActions(getStore, getActions, setStore) {
  const BASE_URL = process.env.BASE_URL;
  //const BASE_URL2 = process.env.BASE_URL2;
  return {
    getPersons: async () => {
      //console.log(BASE_URL)
      let resultado = await fetch(`${BASE_URL}people`);
      if (resultado.ok) {
        alert("Se trajo correctamente la lista de planetas");
        let resultadoJSON = await resultado.json();
        //console.log("resultadoJSON: ", resultadoJSON.results)
        let store = getStore();
        setStore({ ...store, persons: resultadoJSON.results });
        return resultadoJSON;
      } else {
        alert("hubo un error en la petición de planetas");
        return false;
      }
    },

    getPerson: async (numero) => {
      let resultado = await fetch(`${BASE_URL}people/${numero}`);
      let urlsingleRes = `${BASE_URL}people/${numero}`;
      console.log("url SINGLE res:", urlsingleRes);

      if (resultado.ok) {
        alert("Se trajo correctamente el planeta solicitado");
        let resultadoJSON = await resultado.json();
        console.log("resultadoJSON SINGLE PERSON : ", resultadoJSON);
        let store = getStore();
        setStore({ ...store, person: resultadoJSON.result });
        return resultadoJSON;
      } else {
        alert("hubo un error en la petición del SINGLE PERSON");
        return false;
      }
    },
  };
}
