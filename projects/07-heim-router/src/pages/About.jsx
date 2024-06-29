/* eslint-disable react/prop-types */
import { Link } from "../Link";

const i18n = {
  es: {
    title: "Sobre mi",
    button: "Ir al inicio",
    description: "Hola! Me llamo Adrian German y estoy creando un clon de React Router."
  },
  en: {
    title: "About me",
    button: "Go to home page",
    description: "Hi! my name is Adrian German and I am creating a clone of React Router."
  }
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? "es");
  return (
    <>
      <div>
        <h1>{i18n.title}</h1>
        <img
          src="https://pbs.twimg.com/profile_images/1776312145816227840/ISlE225__400x400.jpg"
          alt="foto_de_perfil"
        />
        <p>{i18n.description}</p>
        <Link to="/">{i18n.button}</Link>
      </div>
    </>
  );
}
