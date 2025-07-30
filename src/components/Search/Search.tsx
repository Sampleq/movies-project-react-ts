import { useState } from 'react';
import styles from './Search.module.scss';
import type { SearchState } from '../../types';

interface SearchProps {
  setCurrentSearchState: (searchState: SearchState) => void;
}

export const initialState: SearchState = {
  searchPrompt: 'matrix',
  type: '',
};

export const Search = ({ setCurrentSearchState }: SearchProps) => {
  function inputTextHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchState({
      ...searchState,
      [event.target.name]: event.target.value,
    });
  }
  function inputRadioHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const newSearchState = {
      ...searchState,
      [event.target.name]: event.target.value,
    };

    setSearchState(newSearchState);

    setCurrentSearchState(newSearchState); // update main content when change
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (searchState.searchPrompt === '') {
      alert('Enter name of movie, series, etc., please!');
      return;
    }

    // alert(JSON.stringify(searchState));
    setCurrentSearchState(searchState);

    // setSearchState(initialState);
  }

  const [searchState, setSearchState] = useState<SearchState>(initialState);

  console.log('searchState', searchState);

  return (
    <form className={styles.search} onSubmit={submitHandler}>
      <input
        type='text'
        name='searchPrompt'
        placeholder='Search movies, series, etc.'
        value={searchState.searchPrompt}
        onChange={inputTextHandler}
      />

      <div className={styles.radios}>
        <label>
          <input
            type='radio'
            name='type'
            value=''
            onChange={inputRadioHandler}
            checked={searchState.type === ''}
          />
          All
        </label>
        <label>
          <input
            type='radio'
            name='type'
            value='movie'
            onChange={inputRadioHandler}
            checked={searchState.type === 'movie'}
          />
          Movies only
        </label>
        <label>
          <input
            type='radio'
            name='type'
            value='series'
            onChange={inputRadioHandler}
            checked={searchState.type === 'series'}
          />
          Series only
        </label>
      </div>

      <button type='submit'>Search</button>
    </form>
  );
};
