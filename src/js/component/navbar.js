import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store} =useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3 mx-5">
			<Link to="/">Home</Link>
			<Link to="/people">People</Link>
			<Link to="/planets">Planets</Link>
			<Link to="/vehicles">Vehicles</Link>
			
			<div className= "dropdown">
			<button className = "d-flex btn btn-primary dropdown-toggle" 
			type="button"
			>
			Favorites
			<div className="mx-2 px-2 bg-warning rounded">
				{store.favorites.lenght}
			</div>
			</button>
			<ul>
				{ Favorites}
			</ul>
			</div>
			

		</nav>
	);
};
