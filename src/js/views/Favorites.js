import React from "react";
import { Context } from "../store/appContext";


const Favorites =() => {

    const {store, actiona } = useContext(Context)

    const favList = store.favorites.map((fav) => {
        return {
            
        }
    })

    return (
        <div>This is the favorites</div>
    )
}


export default Favorites