import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
    <div className="container pt-5">
      <div className="pt-5">
        <h1 className="pt-5 swcolory">Planets</h1>
      </div>
      <div
        className="d-flex flex-row flex-nowrap pb-3"
        style={{ overflowX: "scroll" }}
      >
        {store.planets.map((item, index) => {
          //console.log('uid homejs ', item);
          return (
            <div key={index} className="col mx-1 px-1">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                <Link to={`/planet/${item.uid}`}>
                  <h5 className="txtMod">{item.name}</h5>
                  </Link>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-body">
                  <Link to={`/planet/${item.uid}`} className="card-link">
                    <button type="button" class="btn btn-primary btn-sm btnMod">Planet Details</button>
                  </Link>
                  <button type="button" class="btn btn-secondary rounded-circle btn-sm ms-1 "><i className="fa-regular fa-heart"></i></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-5">
        <h1 className="swcolory">Ships</h1>
      </div>
      <div
        className="d-flex flex-row flex-nowrap pb-3"
        style={{ overflowX: "scroll" }}
      >
        {store.starships.map((item, index) => {
          return (
            <div key={index} className="col mx-1 px-1">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                <Link to={`/starship/${item.uid}`}>
                  <h5 className="txtMod">{item.name}</h5>
                  </Link>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-body">
                  <Link to={`/starship/${item.uid}`} className="card-link">
                    <button type="button" class="btn btn-primary btn-sm btnMod">View Details</button>
                  </Link>
                  <button type="button" class="btn btn-danger rounded-circle btn-sm ms-1 "><i className="fa-regular fa-heart"></i></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

	  <div className="pt-5">
        <h1 className="swcolory">People</h1>
      </div>
      <div
        className="d-flex flex-row flex-nowrap pb-3"
        style={{ overflowX: "scroll" }}
      >
        {store.persons.map((item, index) => {
          return (
            <div key={index} className="col mx-1 px-1">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                <Link to={`/people/${item.uid}`}>
                  <h5 className="txtMod">{item.name}</h5>
                  </Link>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-body">
                  <Link to={`/people/${item.uid}`} className="card-link">
                    <button type="button" class="btn btn-primary btn-sm btnMod">View Details</button>
                  </Link>
                  <button type="button" class="btn btn-danger rounded-circle btn-sm ms-1 "><i className="fa-regular fa-heart"></i></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
