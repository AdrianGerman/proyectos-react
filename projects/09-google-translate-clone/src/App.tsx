import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useStore } from "./hooks/useStore";

function App() {
  const { setFromLanguage, fromLanguage } = useStore();
  return (
    <>
      <div>
        <h1>Google translate</h1>
        <button
          onClick={() => {
            setFromLanguage("es");
          }}
        >
          Cambiar loading
        </button>
        {fromLanguage}
      </div>
    </>
  );
}

export default App;
