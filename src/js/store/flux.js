const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      vehicles: [],
	  favorites: [],

    },
    actions: {
      getPeople: () => {
        fetch("https://swapi.dev/api/people/")
          .then((data) => data.json())
          .then((res) => setStore({ people: res.results }))
      },
      getPlanets: () => {
        fetch("https://swapi.dev/api/planets/")
          .then((data) => data.json())
          .then((res) => setStore({ planets: res.results }))
	
      },
	  getVehicles: () => {
        fetch("https://swapi.dev/api/vehicles/")
          .then((data) => data.json())
          .then((res) => setStore({ vehicles: res.results }))
	
    },
		addToFavorites: (name) => {
			const newFav = {name: name}
			setStore({favorites:getStore().favorites.concat(newFav)})

		},

		//Delete From Favorites
		deleteFromFavorites: (name) => {
			const delFav = getStore().favorites.filter((fav) => fav.name !== name)
			setStore({favorites: delFav})
		}
  }
};
};
export default getState;
