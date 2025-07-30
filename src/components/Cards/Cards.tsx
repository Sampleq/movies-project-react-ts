import type { Movie } from '../../types';
import { Card } from '../Card';
import styles from './Cards.module.scss';

interface CardsProps {
  movies: Movie[];
}

export const Cards = ({ movies }: CardsProps) => {
  // console.log(movies);

  return (
    <div className={styles.cards}>
      {movies.map((movie) => (
        <Card movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
};
