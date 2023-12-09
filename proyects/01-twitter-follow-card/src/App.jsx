import "/App.css";

function App() {
  return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-avatar"
            src="https://unavatar.io/goryheim"
            alt="avatar persona 1"
          />
          <div className="tw-followCard-info">
            <strong>Adrian German Becerra</strong>
            <span className="tw-followCard-infoUsername">@gikariu</span>
          </div>
        </header>

        <aside>
          <button className="tw-followCard-button">Seguir</button>
        </aside>
      </article>
    </>
  );
}

export default App;
