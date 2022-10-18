import { planetStore, planetActions } from "./planetas.js";
import { starshipsStore, starshipActions } from "./starships.js";
import { personsStore, personActions } from "./persons.js";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
          ruta: "uno",
          indice: 0,
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
          ruta: "dos",
          indice: 1,
        },
      ],
      ...planetStore,
      ...personsStore,
      ...starshipsStore,
      favorites : []
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the local store
        setStore({ ...store, demo: demo });
      },
      ...planetActions(getStore, getActions, setStore),
      ...personActions(getStore, getActions, setStore),
      ...starshipActions(getStore, getActions, setStore),

      getLocalStorageSW: () => {
        console.log('test localstorage1', window.localStorage);
        
      if (window.localStorage !== undefined) {
				const data = window.localStorage.getItem('SWstorage');
        console.log('test localstorage2', window.localStorage);
        console.log('test localstorage3 ', data);
        let allData = JSON.parse(data)
				data !== null ? setStore(allData) : null;
        console.log('test localstorage4', allData.demo[0].title);

			}
      },
      addFavorite: (nuevo) => {
        const store = getStore();
        let arrayAux = store.favorites.slice();
        arrayAux.push(nuevo)
        setStore({...store, favorites:arrayAux})
      },
      removeFavorite: (aux) => {
				const store = getStore();
        //let fav = store.favorites;
        const favRemove = store.favorites.filter((item, index) => index != aux);
        console.log('itemZ1', favRemove); 
        console.log('itemZ2', aux);
        
				setStore({...store,favorites: favRemove})							
				//setStore({favorites: favRemove})
				}
    }
  };
};

export default getState;