import { useEffect, useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log("efecto", { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("handleMove", clientX, clientY);
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
  }, [enabled]);
  return (
    <>
      <div
        className="circle-cursor"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      ></div>
      <h3>Proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
}

export default App;
