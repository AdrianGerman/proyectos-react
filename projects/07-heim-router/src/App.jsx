import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { EVENTS } from "./const";

function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <button onClick={() => navigate("/about")}>Ir a sobre nosotros</button>
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
        <button onClick={() => navigate("/")}>Ir al inicio</button>
      </div>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  return (
    <>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </>
  );
}

export default App;
