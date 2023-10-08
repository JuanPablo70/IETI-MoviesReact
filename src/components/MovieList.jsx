import { MovieCard } from "./MovieCard";

// other way to export components - arrow functions
export const MovieList = (props) => {

    const {list} = props;

    const handleCheck = (movieName) => {
        console.log(`Check clicked from ${movieName}`)
    }

    return (
        <ul>
            {
                list.map(movie => (
                    <MovieCard name={movie.name} onCheckClick={handleCheck}/>
                ))
            }
        </ul>        
    );
}