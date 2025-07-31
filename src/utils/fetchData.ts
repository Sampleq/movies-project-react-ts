import type { ResponseOmdbApi } from '../types';

export async function fetchData(
  API_KEY: string,
  searchPrompt: string,
  type: string
) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchPrompt}${
        type ? `&type=${type}` : ''
      }`
    );

    const data: ResponseOmdbApi = await response.json();

    //   console.log(data);
    return data;
  } catch (error) {
    return {
      Response: false,
      Error: 'Error: ' + (error as Error).message,
    };
  }
}
