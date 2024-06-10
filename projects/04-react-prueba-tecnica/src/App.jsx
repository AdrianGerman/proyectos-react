import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

function App() {
  const [fact, setFact] = useState("texto texto texto texto texto texto ");

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, []);

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  );
}

export default App;
