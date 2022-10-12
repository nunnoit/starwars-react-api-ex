import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light fixed-top bg-dark p-4">
			<div className="container">
				<Link to="/">
					<img className="imgMod" src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"/>
				</Link>
				<div className="ml-auto">
					{/* <Link to="/demo">
						<button className="btn btn-primary btnMod">Check the Context in action</button>
					</Link> */}
					<div class="dropdown">
					<button class="btn btn-secondary btnMod dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorite <span class="badge bg-secondary">0</span>
					</button>
					<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li><a class="dropdown-item" href="#">Item</a> <span><i class="fa-regular fa-trash-can"></i></span></li>
					</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};