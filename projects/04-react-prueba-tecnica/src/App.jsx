import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const threeFirstWords = fact.split(" ", 3).join(" ");
        // slice(0, 3).join("");
        console.log(threeFirstWords);

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
          .then((res) => res.json())
          .then((response) => {
            const { url } = response;
            setImageUrl(`https://cataas.com${url}`);
          });
      });
  }, []);

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />
      )}
    </main>
  );
}

export default App;
