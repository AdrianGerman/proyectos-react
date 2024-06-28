import { Router } from "./Router";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import "./App.css";

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
      <Router routes={appRoutes} />
    </>
  );
}

export default App;
