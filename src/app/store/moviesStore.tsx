import { makeAutoObservable } from "mobx";

export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

class MoviesStore {
  movies: Movie[] = [];
  searchQuery: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setMovies(movies: Movie[]) {
    this.movies = movies;
    console.log(movies);
    
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  async fetchMovies(query: string) {
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=7e59b8de`);
    const data = await response.json();
    if (data.Search) {
      this.setMovies(data.Search);
    }
  }
}

const moviesStore = new MoviesStore();
export default moviesStore;
