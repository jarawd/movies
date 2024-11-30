import React, { useContext } from 'react';
import Search from '../Search/Search';
import { CurrentMovie } from '../../contexts/CurrentMovie';

export default function Hero({
  goToCategories,
  goToCommonMovies,
  goCategories,
}) {
  const categories = useContext(CurrentMovie);

  function showCategories() {
    categories.setShowCommonMovies(false);
    categories.setNoResults(false);
    categories.setShowCategories(true);
    if (goCategories) {
      goToCategories.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">El mundo de las películas!</h1>
        <p className="hero__introduction">
          ¡Bienvenido a la web donde el cine cobra vida! Aquí, tus películas
          favoritas están a un solo clic. Explora, descubre y sumérgete en el
          mundo del séptimo arte.
        </p>
        <Search goToCommonMovies={goToCommonMovies} />
        <button
          className="hero__categories"
          onClick={showCategories}
        >
          Mostrar Categorías
        </button>
      </div>
    </div>
  );
}
