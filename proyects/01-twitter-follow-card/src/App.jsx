import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        userName={"AdrianGermn1"}
        name={"Adrian German Becerra"}
      />
      <TwitterFollowCard userName={"nilojeda"} name={"Nil Ojeda"} />
      <TwitterFollowCard userName={"Andronews_net"} name={"Juan Hernandez"} />
    </section>
  );
}

export default App;
