import { useState } from 'react';
import './Joke.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [goodlike, setGoodlike] = useState(likes);
  const [badlike, setBadlike] = useState(dislikes);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} />
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text">{text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => setGoodlike(goodlike + 1)}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {goodlike}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => setBadlike(badlike + 1)}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {badlike}
          </span>
        </div>
      </div>
    </div>
  );
};
