import { useState, useEffect } from "react";
import { getRandomFact } from "./services/facts";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();
  // recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return;
    const threeFirstWords = fact.split(" ", 3).join(" ");
    // split(" ")[0]
    // slice(0, 3).join("");
    console.log(threeFirstWords);

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then((res) => res.json())
      .then((response) => {
        const { _id } = response;
        const url = `/cat/${_id}/says/${threeFirstWords}`;
        setImageUrl(url);
      });
    // setImageUrl(`https://cataas.com/cat/says/${threeFirstWords}`);
  }, [fact]);

  return { imageUrl };
}

function App() {
  const [fact, setFact] = useState();
  const { imageUrl } = useCatImage({ fact });

  // recuperar la cita al cargar la imagen
  useEffect(() => {
    getRandomFact().then(setFact);
  }, []);

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
  };

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  );
}

export default App;
