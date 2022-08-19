import {API_KEY, URL_MOVIES} from './env';

export const getMovies = async () => {
  return await fetch(
    `${URL_MOVIES}?api_key=${API_KEY}`
  ).then(res => {
    return res.json();
  });
};

export const getCredits = async (id) => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then(res => {
    return res.json();
  });
};