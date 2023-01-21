import axios from "axios";
import { getCreditsBaseUrl, getMovieBaseUrl, POPULAR_BASE_URL, SEARCH_BASE_URL } from "./config";

export type Movie = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  budget: number;
  runtime: number;
  revenue: number;
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Cast = {
  character: string;
  credit_id: string;
  name: string;
  profile_path: string;
};

export type Crew = {
  job: string;
  name: string;
  credit_id: number;
};

export type Credits = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

const apis = {
  fetchMovies: (searchTerm: string, page: number): Promise<Movies> => {
    let request = searchTerm ? `${SEARCH_BASE_URL}${searchTerm}` : POPULAR_BASE_URL;
    request += `&page=${page}`;
    return axios.get(request).then((response) => response.data);
  },
  fetchMovie: (movieId: string): Promise<Movie> => {
    return axios.get(getMovieBaseUrl(movieId)).then((response) => response.data);
  },
  fetchCredits: (movieId: string): Promise<Credits> => {
    return axios.get(getCreditsBaseUrl(movieId)).then((response) => response.data);
  },
};

export default apis;
