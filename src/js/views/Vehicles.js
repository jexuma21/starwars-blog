import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";



const Vehicles = () => {
    const { store, actions} = useContext(Context);
    const starWarsVehicles = store.vehicles.map((vehicle, index) => {
        return (
            <div key={index} className='container'>
                <div className= 'card-header'>Vehicle Name: {vehicle.name}</div>
                <div className='card-details'>
                    Vehicle Model: {vehicle.model}
                    <br></br>
                    Vehicle manufacturer: {vehicle.manufacturer}
                </div>
            </div>
        )

    })

    return (
        <div>
            {starWarsVehicles}
        </div>
    )
}

export default Vehicles;