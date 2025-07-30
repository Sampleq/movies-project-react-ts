import type { ResponseOmdbApi } from '../types';

export async function fetchData(
  API_KEY: string,
  searchPrompt: string,
  type: string
) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchPrompt}&type=${type}`
  );

  const data: ResponseOmdbApi = await response.json();

  console.log(data);
  return data;
}
