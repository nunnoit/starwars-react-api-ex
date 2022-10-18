import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planetsingle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		console.log("Se abre el componente Planetsingle")
		console.log('params ', params.uid)
		actions.getSinglePlanet(params.uid)
		//console.log('store.planet.properties: ', store.planet.properties);
		
		

		return () => {
			console.log("Se cerró el componente PlanetSingle")
		}
	}, [])
	return (
    <>
      <div className="jumbotron topMod">
        <div className="row">
          <div className="col-6 text-center iconMod">
		  <i className="fa-solid fa-earth-europe text-white"></i>
            <h1 className="text-white">
              {store.planet.properties
                ? store.planet.properties.name
                : "no ha cargado"}
            </h1>
			<p className="fst-italic m-0 text-muted">Planet Name</p>
          </div>
          <div className="col-6">
            <div className="row text-white">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="text-uppercase">
                    <p className="fst-italic m-0">Diameter</p>{" "}
                    <h3>
                      {store.planet.properties
                        ? store.planet.properties.diameter
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">Climate</p>{" "}
                    <h3>
                      {store.planet.properties
                        ? store.planet.properties.climate
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">Gravity</p>{" "}
                    <h3>
                      {store.planet.properties
                        ? store.planet.properties.gravity
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">Orbital period</p>{" "}
                    <h3>
                      {store.planet.properties
                        ? store.planet.properties.orbital_period + " Days"
                        : "no ha cargado"}
                    </h3>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="text-uppercase">
                    <p className="fst-italic m-0">population</p>{" "}
                    <h3>
                      {store.planet.properties
                        ? store.planet.properties.population
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">rotation period</p>{" "}
                    <h3>
                      {store.planet.properties
                        ? store.planet.properties.rotation_period
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">surface water</p>{" "}
                    <h3>
                      {store.planet.properties
                        ? store.planet.properties.surface_water
                        : "no ha cargado"}
                    </h3>
                  </li>
                  <li className="pt-3 text-uppercase">
                    <p className="fst-italic m-0">terrain</p>{" "}
                    <h3>
                      {store.planet.properties
                        ? store.planet.properties.terrain
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
          <span className="btn btn-primary btnMod btn-lg" href="#" role="button">
            Back home
          </span>
        </Link>
		</div>

      </div>
    </>
  );
};

