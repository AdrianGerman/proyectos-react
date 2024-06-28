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
    path: "/example",
    Component: () => <h1>Example route</h1>
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
