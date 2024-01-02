import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import "./App.css";

function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName={"AdrianGermn1"}>
        Adrian German
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing={false} userName={"nilojeda"}>
        Nil Ojeda
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName={"Andronews_net"}>
        Juan Hernandez
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName={"benistofeles"}>
        Benito Taibo
      </TwitterFollowCard>
    </section>
  );
}

export default App;
