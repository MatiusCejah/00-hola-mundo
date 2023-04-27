import { useState } from 'react';
export function TwitterFollowCard({ children, userName, inicialIsFollowing }) {
  const [isFollowig, setIsFollowing] = useState(inicialIsFollowing);
  const text = isFollowig ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowig
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';
  const handleClick = () => {
    setIsFollowing(!isFollowig);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          Alt="Avatar de Mia Soraya"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
