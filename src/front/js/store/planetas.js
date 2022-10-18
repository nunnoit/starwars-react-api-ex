export const planetStore = {
    planets: [], //la lista de planetas
    planet: {} //planeta en específico
}

export function planetActions(getStore, getActions, setStore) {
    const BASE_URL = process.env.BASE_URL;
    //const BASE_URL2 = process.env.BASE_URL2;
    return {
        getPlanets: async () => {
            //console.log(BASE_URL)
            let resultado = await fetch(`${BASE_URL}planets`)
            if (resultado.ok) {
                console.log("Se trajo correctamente la lista de planetas")
                let resultadoJSON = await resultado.json()
                //console.log("resultadoJSON: ", resultadoJSON.results)
                let store = getStore();
                setStore({ ...store, planets: resultadoJSON.results })
                return resultadoJSON
            } else {
                console.log("hubo un error en la petición de planetas")
                return false
            }
        },

        getSinglePlanet: async (numero) => {
            let resultado = await fetch(`${BASE_URL}planets/${numero}`)
            let urlsingleRes = `${BASE_URL}planets/${numero}`;
            console.log('url SINGLE res:', urlsingleRes);
            
            if (resultado.ok) {
                console.log("Se trajo correctamente el planeta solicitado")
                let resultadoJSON = await resultado.json()
                console.log("resultadoJSON SINGLE PLANET : ", resultadoJSON)
                let store = getStore();
                setStore({ ...store, planet: resultadoJSON.result })
                return resultadoJSON
            } else {
                console.log("hubo un error en la petición del planeta")
                return false
            }
        }
    }
}