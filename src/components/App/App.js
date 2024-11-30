import './App.css';
import api from '../../utils/api';
import { useState, useEffect, useRef } from 'react';
import { CurrentMovie } from '../../contexts/CurrentMovie';
import Categories from '../Categories/Categories';
import Hero from '../Hero/Hero';
import Popup from '../Popup/Popup';
import About from '../About/About';
import Contact from '../Contact/Contact';
import CommonMovies from '../CommonMovies/CommonMovies';
import NoResults from '../NoResults/NoResults';

function App() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [showCategories, setShowCategories] = useState(true);
  const [showCommonMovies, setShowCommonMovies] = useState(false);
  const goToCategories = useRef(null);
  const goToCommonMovies = useRef(null);

  //Context state variables
  const [popupActive, setPopupActive] = useState(false);
  const [popupImage, setPopupImage] = useState('');
  const [popupTitle, setPopupTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [commonMovies, setCommonMovies] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [titleFound, setTitleFound] = useState('');

  useEffect(() => {
    const moviesList = async () => {
      try {
        const nowPlaying = await api.getNowPlaying();
        setNowPlaying(nowPlaying.results);

        const popular = await api.getPopular();
        setPopular(popular.results);

        const topRated = await api.getTopRated();
        setTopRated(topRated.results);

        const upcoming = await api.getUpcoming();
        setUpcoming(upcoming.results);
      } catch (error) {
        console.log(error);
      }
    };
    // api.showDataInConsole();
    moviesList();
  }, []);

  const movieContext = {
    popupActive,
    setPopupActive,
    setPopupImage,
    setPopupTitle,
    setOverview,
    setShowCategories,
    setCommonMovies,
    setShowCommonMovies,
    commonMovies,
    setNoResults,
    setTitleFound,
    titleFound,
  };

  return (
    <div className="App">
      <CurrentMovie.Provider value={movieContext}>
        <Hero
          goToCategories={goToCategories}
          goToCommonMovies={goToCommonMovies}
          goCategories={showCategories}
        />
        {showCategories && (
          <Categories
            nowPlaying={nowPlaying}
            popular={popular}
            topRated={topRated}
            upcoming={upcoming}
            goToCategories={goToCategories}
          />
        )}
        {showCommonMovies && (
          <CommonMovies goToCommonMovies={goToCommonMovies} />
        )}
        {noResults && <NoResults />}
        <About />
        <Contact />
        <Popup
          active={popupActive}
          imageUrl={popupImage}
          title={popupTitle}
          description={overview}
        />
      </CurrentMovie.Provider>
    </div>
  );
}

export default App;
