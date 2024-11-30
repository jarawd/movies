import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CurrentMovie } from '../../contexts/CurrentMovie';
import { useContext } from 'react';

export default function Popup({ active, imageUrl, title, description }) {
  const popup = useContext(CurrentMovie);

  function closePopup() {
    popup.setPopupActive(false);
  }
  return (
    <div className={`popup ${active && 'popup__active'}`}>
      <div className="popup__shadow"></div>
      <div className="popup__content">
        <AiOutlineClose
          onClick={closePopup}
          className="popup__content-close"
        />
        <img
          className="popup__content-img"
          src={imageUrl}
          alt={title}
        />
        <h2 className="popup__content-title">{title}</h2>
        <p className="popup__content-description">{description}</p>
      </div>
    </div>
  );
}
