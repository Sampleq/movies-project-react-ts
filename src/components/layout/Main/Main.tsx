import { useEffect, useState } from 'react';
import { Cards } from '../../Cards';
import { Search } from '../../Search';
import type { Movie, SearchState } from '../../../types';
import { fetchData } from '../../../utils/fetchData';
import { Preloader } from '../../Preloader';

import styles from './Main.module.scss';

export const initialState: SearchState = {
  searchPrompt: 'matrix',
  type: '',
};

interface MainProps {}

export const Main = ({}: MainProps) => {
  console.log('   Main()');

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

  const [movies, setMovies] = useState<Movie[] | string>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [currentSearchState, setCurrentSearchState] =
    useState<SearchState>(initialState);

  async function updateMovies(currentSearchState: SearchState) {
    setIsLoading(true);

    const data = await fetchData(
      API_KEY,
      currentSearchState.searchPrompt,
      currentSearchState.type
    );

    if (data.Response === 'True') {
      setMovies(data.Search);
    }

    if (data.Error) {
      setMovies(data.Error);
      // alert(`Error: ${data.Error}`);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    updateMovies(currentSearchState);
    setIsLoading(false);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <Search
          currentSearchState={currentSearchState}
          setCurrentSearchState={setCurrentSearchState}
          updateMovies={updateMovies}
        />

        {isLoading ? (
          <p>
            <Preloader />
            Loading...
          </p>
        ) : typeof movies === 'string' ? (
          <h2>{movies}</h2>
        ) : (
          <Cards movies={movies} />
        )}
      </div>
    </div>
  );
};
