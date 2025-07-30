export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface ResponseOmdbApi {
  Search: Movie[];
  totalResults: string;
  Response: 'True' | 'False';
  Error?: string;
}

export interface SearchState {
  searchPrompt: string;
  type: '' | 'movie' | 'series';
}
