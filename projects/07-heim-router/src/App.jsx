import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { EVENTS } from "./const";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

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
