import { useState } from "react";
import "./App.css";

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <a href="/about">Ir a sobre nosotros</a>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1776312145816227840/ISlE225__400x400.jpg"
          alt="foto_de_perfil"
        />
        <h1>About</h1>
        <p>Hola! Me llamo Adrian German y estoy creando un clon de React Router.</p>
        <a href="/">Ir a la home</a>
      </div>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  return (
    <>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </>
  );
}

export default App;
