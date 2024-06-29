/* eslint-disable react/prop-types */
import { Router } from "./Router";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import "./App.css";
import Page404 from "./pages/404";

const appRoutes = [
  {
    path: "/",
    Component: HomePage
  },
  {
    path: "/about",
    Component: AboutPage
  },
  {
    path: "/search/:query",
    Component: ({ routeParams }) => <h1>Has buscado: {routeParams.query}</h1>
  }
];

function App() {
  return (
    <>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </>
  );
}

export default App;
