import "./App.css";
import responseMovies from "./mocks/with-results.json";
// import withoutResults from "./mocks/no-results.json";

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  const renderMovies = () => {
    return (
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))}
      </ul>
    );
  };

  const renderNoResult = () => {
    return <p>No se encontraron resultados</p>;
  };

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

        <main>{hasMovies ? renderMovies() : renderNoResult()}</main>
      </div>
    </>
  );
}

export default App;
