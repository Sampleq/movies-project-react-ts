import { useEffect, useState } from 'react';
import { Cards } from '../../Cards';
import { Search } from '../../Search';
import styles from './Main.module.scss';
import type { Movie, SearchState } from '../../../types';
import { fetchData } from '../../../utils/fetchData';

export const initialState: SearchState = {
  searchPrompt: 'matrix',
  type: '',
};

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
    useState<SearchState>(initialState);

  async function updateMovies(currentSearchState: SearchState) {
    const data = await fetchData(
      API_KEY,
      currentSearchState.searchPrompt,
      currentSearchState.type
    );

    if (data.Response === 'True') {
      setMovies(data.Search);
    } else {
      alert(`Error: ${data.Error}`);
    }
  }

  useEffect(() => {
    updateMovies(currentSearchState);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <Search
          currentSearchState={currentSearchState}
          setCurrentSearchState={setCurrentSearchState}
          updateMovies={updateMovies}
        />

        {movies.length ? <Cards movies={movies} /> : <h2>Loading...</h2>}
      </div>
    </div>
  );
};
