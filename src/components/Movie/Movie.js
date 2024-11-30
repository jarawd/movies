import React, { useContext } from 'react';
import { CurrentMovie } from '../../contexts/CurrentMovie';

export default function Movie({ image, title, overview }) {
  const baseUrl = 'https://media.themoviedb.org/t/p/w200';
  const popup = useContext(CurrentMovie);

  function getMovieInfo() {
    popup.setPopupActive(true);
    popup.setPopupImage(`${baseUrl}${image}`);
    popup.setPopupTitle(title);
    popup.setOverview(overview);
  }

  return (
    <article className="movie">
      <img
        className="movie__poster"
        src={`${baseUrl}${image}`}
        alt={title}
        onClick={getMovieInfo}
      />
      <h3 className="movie__title">{title}</h3>
    </article>
  );
}
