import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import "./App.css";

function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName={"AdrianGermn1"} initialIsFollowing>
        Adrian German
      </TwitterFollowCard>

      <TwitterFollowCard userName={"nilojeda"}>Nil Ojeda</TwitterFollowCard>

      <TwitterFollowCard userName={"Andronews_net"} initialIsFollowing>
        Juan Hernandez
      </TwitterFollowCard>

      <TwitterFollowCard userName={"benistofeles"}>
        Benito Taibo
      </TwitterFollowCard>
    </section>
  );
}

export default App;
