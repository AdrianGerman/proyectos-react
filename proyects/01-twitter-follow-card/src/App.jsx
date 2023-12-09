import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing={true}
        userName={"AdrianGermn1"}
        name={"Adrian German"}
      />
      <TwitterFollowCard
        isFollowing={false}
        userName={"nilojeda"}
        name={"Nil Ojeda"}
      />
      <TwitterFollowCard
        isFollowing
        userName={"Andronews_net"}
        name={"Juan Hernandez"}
      />
    </section>
  );
}

export default App;
