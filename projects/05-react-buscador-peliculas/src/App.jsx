import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import "./App.css";

function App() {
  const { movies } = useMovies();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { query } = Object.fromEntries(new window.FormData(event.target));
    console.log({ query });
  };

  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de películas</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input name="query" type="text" placeholder="Avengers, superman, the matrix..." />
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
