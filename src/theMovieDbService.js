const API_KEY = "b041b0681fa9947874d41095ea1ca5ae";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchUpcomingMovies = () =>
  fetch(BASE_URL + "/movie/upcoming?api_key=" + API_KEY).then(response => response.json());

export const fetchMovieVideos = movieId =>
  fetch(BASE_URL + "/movie/" + movieId + "/videos?api_key=" + API_KEY).then(response => response.json());

export const fetchConfig = () =>
  fetch(BASE_URL + "/configuration?api_key=" + API_KEY).then(response => response.json());

export const fetchAllLanguages = () =>
  fetch(BASE_URL + "/configuration/languages?api_key=" + API_KEY).then(response => response.json());