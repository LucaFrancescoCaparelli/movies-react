import movie from '../movies.json'
import styles from './MovieDetails.module.css'

import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Spinner } from '../components/Spinner';
import { getMoviesImg } from '../utils/getMovieImg';

export function MovieDetails() {

  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    get(`/movie/${movieId}`)
    .then(data => {
      setIsLoading(false)
      setMovie(data)
    })
  }, [movieId])

  if(isLoading) {
    return <Spinner />;
  }

  if(!movie) return null;
  
  
  //const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  const imageUrl = getMoviesImg(movie.poster_path, 500);
  return (
    <div className={styles.detailsContainer}>
      <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}><strong>Title:</strong> {movie.title}</p>
        <p><strong>Description:</strong> {movie.overview}</p>
        <strong>Genres:</strong>{" "}{movie.genres.map(genre => genre.name).join(', ')}
      </div>
    </div>
  )
} 