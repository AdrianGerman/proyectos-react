/* eslint-disable react/prop-types */
export function TwitterFollowCard({ userName, name, isFollowing }) {
  return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-avatar"
            src={`https://unavatar.io/@${userName}`}
            alt="avatar persona 1"
          />
          <div className="tw-followCard-info">
            <strong>{name}</strong>
            <span className="tw-followCard-infoUsername">@{userName}</span>
          </div>
        </header>

        <aside>
          <button className="tw-followCard-button">Seguir</button>
        </aside>
      </article>
    </>
  );
}
