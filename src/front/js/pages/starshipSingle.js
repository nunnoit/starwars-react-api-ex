import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const StarShipSingle = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    console.log("Se abre el componente StarShipSingle");
    console.log(params.uid);
    actions.getStarship(params.uid);

    return () => {
      console.log("Se cerró el componente StarShipSingle");
    };
  }, []);
  return (
    <>
      <div className="jumbotron topMod">
        <div className="row">
          <div className="col-5 text-center iconMod border-end border-white">
            <i className="fa-solid fa-rocket text-white"></i>
            <h1 className="text-white">
              {store.starship.properties
                ? store.starship.properties.name
                : "no ha cargado"}
            </h1>
            <p className="fst-italic m-0 text-muted">Starship Name</p>
          </div>
          <div className="col-7 ps-5">
            <div className="row text-white">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="text-uppercase">
                    <p className="fst-italic m-0">model</p>{" "}
                    <h3>
                      {store.starship.properties
                        ? store.starship.properties.model
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">starship class</p>{" "}
                    <h3>
                      {store.starship.properties
                        ? store.starship.properties.starship_class
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">manufacturer</p>{" "}
                    <h3>
                      {store.starship.properties
                        ? store.starship.properties.manufacturer
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">cost in credits</p>{" "}
                    <h3>
                      {store.starship.properties
                        ? store.starship.properties.cost_in_credits
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">MGLT</p>{" "}
                    <h3>
                      {store.starship.properties
                        ? store.starship.properties.MGLT
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">cargo capacity</p>{" "}
                    <h3>
                      {store.starship.properties
                        ? store.starship.properties.cargo_capacity
                        : "no ha cargado"}
                    </h3>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="text-uppercase">
                    <p className="fst-italic m-0">length</p>{" "}
                    <h3>
                      {store.starship.properties
                        ? store.starship.properties.length
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">crew</p>{" "}
                    <h3>
                      {store.starship.properties
                        ? store.starship.properties.crew
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">passengers</p>{" "}
                    <h3>
                      {store.starship.properties
                        ? store.starship.properties.passengers
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">max atmosphering speed</p>{" "}
                    <h3>
                      {store.starship.properties
                        ? store.starship.properties.max_atmosphering_speed
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">hyperdrive rating</p>{" "}
                    <h3>
                      {store.starship.properties
                        ? store.starship.properties.hyperdrive_rating
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">consumables</p>{" "}
                    <h3>
                      {store.starship.properties
                        ? store.starship.properties.consumables
                        : "no ha cargado"}
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />

        <div className="text-center">
          <Link to="/">
            <span
              className="btn btn-primary btnMod btn-lg"
              href="#"
              role="button"
            >
              Back home
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
