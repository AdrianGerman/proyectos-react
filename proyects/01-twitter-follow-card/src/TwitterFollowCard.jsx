/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export function TwitterFollowCard({
  formatUserName,
  userName,
  name,
  isFollowing,
}) {
  return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-avatar"
            src={`https://unavatar.io/${formatUserName(userName)}`}
            alt="avatar persona 1"
          />
          <div className="tw-followCard-info">
            <strong>{name}</strong>
            <span className="tw-followCard-infoUsername">
              {formatUserName(userName)}
            </span>
          </div>
        </header>

        <aside>
          <button className="tw-followCard-button">Seguir</button>
        </aside>
      </article>
    </>
  );
}
