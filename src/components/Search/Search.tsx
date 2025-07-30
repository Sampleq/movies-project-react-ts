import styles from './Search.module.scss';
import type { SearchState } from '../../types';

interface SearchProps {
  currentSearchState: SearchState;
  setCurrentSearchState: (searchState: SearchState) => void;
  updateMovies: (currentSearchState: SearchState) => void;
}

export const Search = ({
  currentSearchState,
  setCurrentSearchState,
  updateMovies,
}: SearchProps) => {
  function inputTextHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentSearchState({
      ...currentSearchState,
      [event.target.name]: event.target.value,
    });
  }
  function inputRadioHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const newSearchState = {
      ...currentSearchState,
      [event.target.name]: event.target.value,
    };

    setCurrentSearchState(newSearchState);

    updateMovies(newSearchState);
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (currentSearchState.searchPrompt === '') {
      alert('Enter name of movie, series, etc., please!');
      return;
    }

    // alert(JSON.stringify(searchState));
    setCurrentSearchState(currentSearchState);

    updateMovies(currentSearchState);
  }

  console.log('currentSearchState', currentSearchState);

  return (
    <form className={styles.search} onSubmit={submitHandler}>
      <input
        type='text'
        name='searchPrompt'
        placeholder='Search movies, series, etc.'
        value={currentSearchState.searchPrompt}
        onChange={inputTextHandler}
      />

      <div className={styles.radios}>
        <label>
          <input
            type='radio'
            name='type'
            value=''
            onChange={inputRadioHandler}
            checked={currentSearchState.type === ''}
          />
          All
        </label>
        <label>
          <input
            type='radio'
            name='type'
            value='movie'
            onChange={inputRadioHandler}
            checked={currentSearchState.type === 'movie'}
          />
          Movies only
        </label>
        <label>
          <input
            type='radio'
            name='type'
            value='series'
            onChange={inputRadioHandler}
            checked={currentSearchState.type === 'series'}
          />
          Series only
        </label>
      </div>

      <button type='submit'>Search</button>
    </form>
  );
};
