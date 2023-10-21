import { useState, useEffect } from "react";

export function useFavourites() {
  const [favourites, setFavourites] = useState([]);

  function addFavourites(movieName) {
    console.log(`Favourite clicked from ${movieName}`);

      // favourites copy to see the state in real time
      let newFavourites = [...favourites];

      if (!favourites.includes(movieName)) {
        newFavourites = [...favourites, movieName];
      } else { // removes the movie if it is already in favourites list
        newFavourites = newFavourites.filter((movie) => movieName != movie);
      }

      // saves the list into favourites
      setFavourites(newFavourites);

      // saves the "favourites" list in local storage in order to see the info when the page reloads
      localStorage.setItem("favourites", JSON.stringify(newFavourites));
  }

  useEffect(() => {
    const localStorageData = localStorage.getItem("favourites"); // gets the local storage with key = "favourites"
    if (localStorageData) {
      const storedFavourites = JSON.parse(localStorageData);
    setFavourites(storedFavourites); // the component knows what the favourites are
    }
  }, []);

  return [favourites, addFavourites];
}