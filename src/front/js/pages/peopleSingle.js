import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const PersonSingle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		console.log("Se abre el componente PersonSingle")
		console.log(params.uid)
		actions.getPerson(params.uid)

		return () => {
			console.log("Se cerró el componente PersonSingle")
		}
	}, [])
	return (
		<>
		  <div className="jumbotron topMod">
			<div className="row">
			  <div className="col-6 text-center iconMod">
			  <i className="fa-regular fa-circle-user text-white"></i>
				<h1 className="text-white">
				  {store.person.properties
					? store.person.properties.name
					: "no ha cargado"}
				</h1>
				<p className="fst-italic m-0 text-muted">Character Name</p>
			  </div>
			  <div className="col-6">
				<div className="row text-white">
				  <div className="col-6">
					<ul className="list-unstyled">
					  <li className="text-uppercase">
						<p className="fst-italic m-0">height</p>{" "}
						<h3>
						  {store.person.properties
							? store.person.properties.height
							: "no ha cargado"}
						</h3>
					  </li>
					  <li className="pt-3 text-uppercase">
						<p className="fst-italic m-0">mass</p>{" "}
						<h3>
						  {store.person.properties
							? store.person.properties.mass
							: "no ha cargado"}
						</h3>
					  </li>
					  <li className="pt-3 text-uppercase">
						<p className="fst-italic m-0">hair color</p>{" "}
						<h3>
						  {store.person.properties
							? store.person.properties.hair_color
							: "no ha cargado"}
						</h3>
					  </li>
					  <li className="pt-3 text-uppercase">
						<p className="fst-italic m-0">skin color</p>{" "}
						<h3>
						  {store.person.properties
							? store.person.properties.skin_color
							: "no ha cargado"}
						</h3>
					  </li>
					</ul>
				  </div>
				  <div className="col-6">
					<ul className="list-unstyled">
					  <li className="text-uppercase">
						<p className="fst-italic m-0">eye color</p>{" "}
						<h3>
						  {store.person.properties
							? store.person.properties.eye_color
							: "no ha cargado"}
						</h3>
					  </li>
					  <li className="pt-3 text-uppercase">
						<p className="fst-italic m-0">birth year</p>{" "}
						<h3>
						  {store.person.properties
							? store.person.properties.birth_year
							: "no ha cargado"}
						</h3>
					  </li>
					  <li className="pt-3 text-uppercase">
						<p className="fst-italic m-0">gender</p>{" "}
						<h3>
						  {store.person.properties
							? store.person.properties.gender
							: "no ha cargado"}
						</h3>
					  </li>
					  <li className="pt-3 text-uppercase">
						<p className="fst-italic m-0">HomeWorld</p>{" "}
						{/* <h3>
						  {store.person.properties
							? store.person.properties.terrain
							: "no ha cargado"}
						</h3> */}
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