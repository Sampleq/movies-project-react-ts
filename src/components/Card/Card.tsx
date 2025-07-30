import styles from './Card.module.scss';

import type { Movie } from '../../types';
// import matrixArt from '../../assets/matrix-art.jpg'; // Импортируем изображение из папки

interface CardProps {
  movie: Movie;
}

export const Card = ({ movie }: CardProps) => {
  return (
    <div className={styles.card}>
      {/* <img src={matrixArt} alt='movie art' /> */}
      {/* <img src="/matrix-art.jpg" alt='movie art' /> // из папки public  */}

      <img
        src={
          movie.Poster === 'N/A'
            ? `https://images.placeholders.dev/?width=300&height=600&text=${movie.Title}&textWrap=true&fontSize=36`
            : movie.Poster
        }
        alt='movie art'
      />

      <div className={styles.content}>
        <h4>{movie.Title}</h4>
        <p>
          <span>{movie.Year}</span>
          <span>{movie.Type}</span>
        </p>
      </div>
    </div>
  );
};
