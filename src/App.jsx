import Header from "./components/Header";
import { MovieList } from "./components/MovieList";

const latestMovies = [
  {name:"Spiderman - Into The Spiderverse"},
  {name:"Spiderman - Across The Spiderverse"}
]

function App() {

  return (
    <div>
      <Header />
      <MovieList list={latestMovies}/>
    </div>
  );
  
}

export default App
