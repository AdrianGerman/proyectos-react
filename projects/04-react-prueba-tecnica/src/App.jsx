import { useState } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState("texto texto texto texto texto texto ");
  return (
    <main>
      <h1>Hello, world!</h1>
      <p>{fact}</p>
    </main>
  );
}

export default App;
