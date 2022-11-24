import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";


const Planets = () => {
    const { store, actions} = useContext(Context);
    const starWarsPlanets = store.planets.map((planet, index) => {
        return (
            <div key={index} className='container'>
                <div className= 'card-header'>Planet Name: {planet.name}</div>
                <div className='card-details'>
                    Planet Climate: {planet.climate}
                    <br></br>
                    Planet Population: {planet.population}
                </div>
            </div>
        )
    
    })

    return (
        <div>
            {starWarsPlanets}
        </div>
    )
}

export default Planets;