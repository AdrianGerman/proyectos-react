import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

function App() {
  const format = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={format}
        isFollowing
        userName={"AdrianGermn1"}
        name={"Adrian German"}
      />
      <TwitterFollowCard
        formatUserName={format}
        isFollowing={false}
        userName={"nilojeda"}
        name={"Nil Ojeda"}
      />
      <TwitterFollowCard
        formatUserName={format}
        isFollowing
        userName={"Andronews_net"}
        name={"Juan Hernandez"}
      />
      <TwitterFollowCard
        formatUserName={format}
        isFollowing
        userName={"benistofeles"}
        name={"Benito Taibo"}
      />
    </section>
  );
}

export default App;
