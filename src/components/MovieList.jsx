import { MovieCard } from "./MovieCard";
import { useFavourites } from "../hooks/useFavourites";

// other way to export components - arrow functions
export const MovieList = (props) => {

    const {list} = props;
    const [favourites, addFavourites] = useFavourites();

    function handleFavouriteClick(movieName) {
      addFavourites(movieName);
    }

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