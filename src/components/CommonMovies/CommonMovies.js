import React, { useContext } from 'react';
import { CurrentMovie } from '../../contexts/CurrentMovie';
import Movie from '../Movie/Movie';

export default function CommonMovies({ goToCommonMovies }) {
  const movies = useContext(CurrentMovie);
  const list = movies.commonMovies.results;
  return (
    <section
      ref={goToCommonMovies}
      className="common-movies"
    >
      <h2 className="common-movies__title">{`Películas de "${movies.titleFound}"`}</h2>
      <div className="common-movies__grid">
        {list.map((el) => {
          return (
            el.poster_path !== null && (
              <Movie
                className="common-movies_item"
                key={el.id}
                image={el.poster_path}
                title={el.original_title}
                overview={el.overview}
              />
            )
          );
        })}
      </div>
    </section>
  );
}
