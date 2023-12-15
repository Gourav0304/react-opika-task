import React, { useState } from 'react';
import './style.css';
import { SHOW_BUTTON_TEXT } from 'src/utils/Constant';
import { CardProps } from 'src/utils/Type';

const UserProfileCard: React.FC<CardProps> = ({ imageSrc, name, bio, email }) => {
  const [showEmail, setShowEmail] = useState(false);

  const handleShowEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="card">
      <div className="card__cover-photo">
        <img src={imageSrc} className="card__profile" alt="Profile" />
      </div>
      <h3 className="card__profile-name">{name}</h3>
      <div className="card_about-container">
        <p className="card__about">{bio}</p>
      </div>
      <div className="card_email-container">
        {showEmail && <p className="card__email">{email}</p>}
      </div>
      <button className="card__btn" onClick={handleShowEmail}>
        {SHOW_BUTTON_TEXT}
      </button>
    </div>
  );
};

export default UserProfileCard;
