import { MovieCard } from "./MovieCard";

// other way to export components - arrow functions
export const MovieList = (props) => {

    const {list} = props;

    return (
        <ul>
            {
                list.map(movie => (
                    <MovieCard name={movie.name}/>
                ))
            }
        </ul>        
    );
}