import "./App.css";
import SearchPage from "./pages/Search";
import Page404 from "./pages/404";
import { Router } from "./Router";
import { Route } from "./Route";
import { Suspense, lazy } from "react";

// importaciones lazy
const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));

const appRoutes = [
  {
    path: "/:lang/about",
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
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
