import { useState } from 'react';
import './Joke.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

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
            onClick={() => setLikes(likes + 1)}
            id="btn-up"
            className="btn-like btn-like--up"
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {likes}
          </span>
          <button
            onClick={() => setDislikes(dislikes + 1)}
            id="btn-down"
            className="btn-like btn-like--down"
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {dislikes}
          </span>
        </div>
      </div>
    </div>
  );
};
