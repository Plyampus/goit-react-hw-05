import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Додано useLocation
import css from './HomePage.module.css';
import { fetchTrendMovies } from '../../theMovieApi';
import toast from 'react-hot-toast';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';

const notify = () =>
  toast.error('Something went wrong. Please, try again!', {
    style: {
      border: '1px solid #000000',
      padding: '16px',
      color: '#000000',
    },
    iconTheme: {
      primary: '#000000',
      secondary: '#f5f5f5',
    },
  });

export default function HomePage() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Тепер useLocation імпортовано

  useEffect(() => {
    async function getMovieData() {
      setLoading(true);
      try {
        const data = await fetchTrendMovies();
        setMovieData(data.results);
        setLoading(false);
      } catch (error) {
        notify();
        console.log(error);
      }
    }

    getMovieData();
  }, []);

  return (
    <div className="container">
      <div className={css.homePage}>
        <h1>Trending Today</h1>
        <MovieList movies={movieData} location={location} />
        {loading && <Loader />}
      </div>
    </div>
  );
}
