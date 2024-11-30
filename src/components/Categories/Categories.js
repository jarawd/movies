import React, { useRef } from 'react';
import Movie from '../Movie/Movie';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

export default function Categories({
  nowPlaying,
  popular,
  topRated,
  upcoming,
  goToCategories,
}) {
  const sliderNowPlaying = useRef(null);
  const sliderPopular = useRef(null);
  const sliderTopRated = useRef(null);
  const sliderUpcoming = useRef(null);

  const scrollLeft = (slider) => {
    if (slider.current) {
      slider.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  const scrollRight = (slider) => {
    if (slider.current) {
      slider.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={goToCategories}
      className="categories"
    >
      {nowPlaying && (
        <section className="categories__section">
          <h2 className="categories__section-title">En cartelera</h2>
          <div className="categories__section-slider">
            <FaAngleLeft
              onClick={() => scrollLeft(sliderNowPlaying)}
              className="categories__section-arrow categories__section-arrow_left"
            />
            <div
              className="categories__section-movies"
              ref={sliderNowPlaying}
            >
              {nowPlaying.map((el) => {
                return (
                  <Movie
                    key={el.id}
                    image={el.poster_path}
                    title={el.original_title}
                    overview={el.overview}
                  />
                );
              })}
            </div>
            <FaAngleRight
              onClick={() => scrollRight(sliderNowPlaying)}
              className="categories__section-arrow categories__section-arrow_right"
            />
          </div>
        </section>
      )}
      {popular && (
        <section className="categories__section">
          <h2 className="categories__section-title">Populares</h2>
          <div className="categories__section-slider">
            <FaAngleLeft
              onClick={() => scrollLeft(sliderPopular)}
              className="categories__section-arrow categories__section-arrow_left"
            />
            <div
              className="categories__section-movies"
              ref={sliderPopular}
            >
              {popular.map((el) => {
                return (
                  <Movie
                    key={el.id}
                    image={el.poster_path}
                    title={el.original_title}
                    overview={el.overview}
                  />
                );
              })}
            </div>
            <FaAngleRight
              onClick={() => scrollRight(sliderPopular)}
              className="categories__section-arrow categories__section-arrow_right"
            />
          </div>
        </section>
      )}
      {topRated && (
        <section className="categories__section">
          <h2 className="categories__section-title">Mejor valoradas</h2>
          <div className="categories__section-slider">
            <FaAngleLeft
              onClick={() => scrollLeft(sliderTopRated)}
              className="categories__section-arrow categories__section-arrow_left"
            />
            <div
              className="categories__section-movies"
              ref={sliderTopRated}
            >
              {topRated.map((el) => {
                return (
                  <Movie
                    key={el.id}
                    image={el.poster_path}
                    title={el.original_title}
                    overview={el.overview}
                  />
                );
              })}
            </div>
            <FaAngleRight
              onClick={() => scrollRight(sliderTopRated)}
              className="categories__section-arrow categories__section-arrow_right"
            />
          </div>
        </section>
      )}
      {upcoming && (
        <section className="categories__section">
          <h2 className="categories__section-title">Próximamente</h2>
          <div className="categories__section-slider">
            <FaAngleLeft
              onClick={() => scrollLeft(sliderUpcoming)}
              className="categories__section-arrow categories__section-arrow_left"
            />
            <div
              className="categories__section-movies"
              ref={sliderUpcoming}
            >
              {upcoming.map((el) => {
                return (
                  <Movie
                    key={el.id}
                    image={el.poster_path}
                    title={el.original_title}
                    overview={el.overview}
                  />
                );
              })}
            </div>
            <FaAngleRight
              onClick={() => scrollRight(sliderUpcoming)}
              className="categories__section-arrow categories__section-arrow_right"
            />
          </div>
        </section>
      )}
    </div>
  );
}
