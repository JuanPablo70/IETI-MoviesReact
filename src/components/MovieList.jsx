import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

// other way to export components - arrow functions
export const MovieList = (props) => {

    const {list} = props;
    // state to save the favourite movies. favourites is a read only variable
    const [favourites, setFavourites] = useState([]);

    const handleFavouriteClick = (movieName) => {
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
    };

    // Hook that allows to see the local storage information in the component
    useEffect(() => {
      const localStorageData = localStorage.getItem("favourites"); // gets the local storage with key = "favourites"
      if (localStorageData) {
        const storedFavourites = JSON.parse(localStorageData);
      setFavourites(storedFavourites); // the component knows what the favourites are
      }
    }, []);

    console.log({favourites});

    return (
        <ul>
          {
            list.map(movie => (
              <MovieCard key={movie.name} name={movie.name} onFavouriteClick={handleFavouriteClick} isFavourite={favourites.includes(movie.name)} />
            ))
          }
        </ul>        
    );
}