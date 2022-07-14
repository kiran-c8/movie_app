import {API_KEY} from './constants'
export const originals=`discover/tv?api_key=${API_KEY}&with_networks=213`
export const action =`https://api.themoviedb.org/3/discover/movie/action?api_key=${API_KEY}&with_genres=28`
export const trending =`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
export const comedyMovies= `https://api.themoviedb.org/3/comedy/movie/list?api_key=${API_KEY}&language=en-US`
export const Documentaries= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
export const topRated =`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const nowPlaying =`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
export const popular =`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
