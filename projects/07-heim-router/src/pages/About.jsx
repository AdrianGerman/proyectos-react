import { navigate } from "../Link";

export default function AboutPage() {
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
