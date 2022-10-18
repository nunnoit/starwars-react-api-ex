import React, { useEffect} from "react";
import { useContext } from "react";
import { Context } from "../store/appContext.js";

export const Favorites = () => {
    const { store, actions } = useContext(Context); //call store (access to favs)

    return (
        <div className="dropdown">
			<button className="btn btn-secondary btnMod dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
			    Favorite <span className="badge bg-secondary">{store.favorites.length}</span>
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {store.favorites.map((item, index)=> { // call favorites from flux
                    return (
                        <li key={index} className="dropdown-item">{item} - {index} <span><button onClick={(e)=>{actions.removeFavorite(index)}} className="btn btn-danger" type="button"><i className="fa-regular fa-trash-can"></i></button></span></li>
                    )
                 }) 
                }
             </ul>
		</div>
    )
}
