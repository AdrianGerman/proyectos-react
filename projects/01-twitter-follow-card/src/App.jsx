import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import "./App.css";

const users = [
  {
    userName: "AdrianGermn1",
    name: "Adrian German",
    isFollowing: true,
  },
  {
    userName: "nilojeda",
    name: "Nil Ojete",
    isFollowing: true,
  },
  {
    userName: "TeamCherryGames",
    name: "Gregorio Dominic Rupertino Rodriguez",
    isFollowing: false,
  },
  {
    userName: "benistofeles",
    name: "Benito Taibo",
    isFollowing: false,
  },
];

function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}

export default App;
