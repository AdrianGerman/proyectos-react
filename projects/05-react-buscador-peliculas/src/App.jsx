import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import "./App.css";

function App() {
  const { movies } = useMovies();
  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de películas</h1>
          <form className="form">
            <input type="text" placeholder="Avengers, superman, the matrix..." />
            <button type="submit">Search</button>
          </form>
        </header>

        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  );
}

export default App;
