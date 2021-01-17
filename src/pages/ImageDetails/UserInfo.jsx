import React from 'react';

export default function UserInfo({ name, loc, pic, profileLink }) {
  return (
    <div className="user-info">
      <div className="user-info__text">
        <a className="user-info__profile-link" href={profileLink} target="_blank" rel="noreferrer">
          {name}
        </a>
        {loc && <p className="user-info__loc">{loc}</p>}
      </div>
      <a className="user-info__image" href={profileLink} target="_blank" rel="noreferrer">
        <img src={pic} alt="user profile"/>
      </a>
    </div>
  );
}
