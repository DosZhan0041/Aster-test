import { makeAutoObservable } from "mobx";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

class FavoritesStore {
  favorites: Movie[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addFavorite(movie: Movie) {
    const isFavorite = this.favorites.some((fav) => fav.imdbID === movie.imdbID);
    
    if (!isFavorite) {
      this.favorites.push(movie);
      console.log(this.favorites);
    } else {
      console.log("Этот фильм уже в избранных");
    }
  }

  removeFavorite(id: string) {
    this.favorites = this.favorites.filter((movie) => movie.imdbID !== id);
  }
}

const favoritesStore = new FavoritesStore();
export default favoritesStore;
