import React from 'react';
import { useState, useContext } from 'react';
import { CurrentMovie } from '../../contexts/CurrentMovie';
import api from '../../utils/api';

export default function Search({ goToCommonMovies }) {
  const movies = useContext(CurrentMovie);
  const [query, setQuery] = useState('');

  async function searchMovie(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api._apiKey}&query=${query}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      if (data.results.length === 0) {
        movies.setNoResults(true);
        movies.setShowCommonMovies(false);
        movies.setShowCategories(false);
        goToCommonMovies.current.scrollIntoView({ behavior: 'smooth' });
        setQuery('');
        return;
      }
      movies.setNoResults(false);
      movies.setCommonMovies(data);
      movies.setShowCategories(false);
      movies.setShowCommonMovies(true);
      movies.setTitleFound(query);
      goToCommonMovies.current.scrollIntoView({ behavior: 'smooth' });
      setQuery('');
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  return (
    <form
      className="search"
      onSubmit={searchMovie}
    >
      <input
        className="search__text"
        type="text"
        placeholder="Título"
        required
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button className="search__btn">Buscar</button>
    </form>
  );
}
