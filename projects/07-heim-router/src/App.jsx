/* eslint-disable react/prop-types */
import { Router } from "./Router";
import { Route } from "./Route";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import "./App.css";
import Page404 from "./pages/404";
import SearchPage from "./pages/Search";

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
    Component: SearchPage
  }
];

function App() {
  return (
    <>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
      </Router>
    </>
  );
}

export default App;
