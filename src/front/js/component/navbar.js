import React from "react";
import { Link } from "react-router-dom";
import { Favorites } from "./favorites";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light fixed-top bg-dark p-4">
			<div className="container">
				<Link to="/">
					<img className="logo" src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"/>
				</Link>
				<div className="ml-auto">
					<Favorites />
				</div>
			</div>
		</nav>
	);
};