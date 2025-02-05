import { makeAutoObservable } from "mobx";

interface MovieDetail {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Genre: string;
  Language: string;
  Plot: string;
  Director: string | null;
  Writer: string | null;
  Actors: string;
  Country: string;
  Released: string;
  imdbRating: string;
  imdbVotes: string;
  Runtime: string | null;
  Metascore: string | null;
  Awards: string | null;
}

class MovieDetailStore {
  movie: MovieDetail | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setMovie(movie: MovieDetail) {
    this.movie = movie;
    console.log(movie);
    
  }

  async fetchMovieDetails(imdbID: string) {
    const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=7e59b8de`);
    const data = await response.json();
    this.setMovie(data);
  }
}

const movieDetailStore = new MovieDetailStore();
export default movieDetailStore;
