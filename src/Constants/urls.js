import { API_KEY, baseUrl } from "./constants";
export const action = `${baseUrl}/discover/movie/action?api_key=${API_KEY}&with_genres=28`;
export const trending = `${baseUrl}/trending/all/day?api_key=${API_KEY}`;
export const comedyMovies = `${baseUrl}/comedy/movie/list?api_key=${API_KEY}&language=en-US`;
export const Documentaries = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`;
export const topRated = `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const nowPlaying = `${baseUrl}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
export const popular = `${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
