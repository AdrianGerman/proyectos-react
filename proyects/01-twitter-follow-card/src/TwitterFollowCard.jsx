export function TwitterFollowCard({ children, userName, isFollowing }) {
  const addAt = (userName) => `@${userName}`;

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-avatar"
            src={`https://unavatar.io/${addAt(userName)}`}
            alt="avatar persona 1"
          />
          <div className="tw-followCard-info">
            <strong>{children}</strong>
            <span className="tw-followCard-infoUsername">
              {addAt(userName)}
            </span>
          </div>
        </header>

        <aside>
          <button className={buttonClassName}>{text}</button>
        </aside>
      </article>
    </>
  );
}
