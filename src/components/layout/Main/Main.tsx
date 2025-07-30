import { useEffect, useState } from 'react';
import { Cards } from '../../Cards';
import { initialState, Search } from '../../Search';
import styles from './Main.module.scss';
import type { Movie, ResponseOmdbApi, SearchState } from '../../../types';

interface MainProps {}

export const Main = ({}: MainProps) => {
  // OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=_REGISTER_AND_GET_YOUR_API_KEY_
  const API_KEY = import.meta.env.VITE_API_KEY;

  /**
   * 
  Send all data requests to:

  http://www.omdbapi.com/?apikey=[yourkey]&

  Poster API requests:

  http://img.omdbapi.com/?apikey=[yourkey]&
  
  Generate super-fast placeholder images

  https://placeholders.dev/
  */

  const [movies, setMovies] = useState<Movie[]>([]);

  const [currentSearchState, setCurrentSearchState] =
    // useState<SearchState>(initialState);
    useState<SearchState>({
      searchPrompt: 'matrix',
      type: '',
    });

  useEffect(() => {
    // fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${currentSearchState.searchPrompt}&type=${currentSearchState.type}`
    )
      .then((response) => response.json())
      .then((data: ResponseOmdbApi) => {
        console.log(
          data,
          currentSearchState.searchPrompt,
          currentSearchState.type
        );
        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          alert(`Error: ${data.Error}`);
        }
      });
  }, [currentSearchState.searchPrompt, currentSearchState.type]);

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <Search setCurrentSearchState={setCurrentSearchState} />

        {movies.length ? <Cards movies={movies} /> : <h2>Loading...</h2>}
      </div>
    </div>
  );
};
