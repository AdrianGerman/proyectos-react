import "./App.css";

function App() {
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
          <p>Aquí los resultados de la búsqueda</p>
        </main>
      </div>
    </>
  );
}

export default App;
