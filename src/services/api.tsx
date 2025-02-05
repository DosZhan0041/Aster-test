interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
  }
  
  export const fetchMovies = async (query: string): Promise<Movie[]> => {
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=7e59b8de`);
    const data = await response.json();
    return data.Search || [];
  };
  
  export const fetchMovieDetails = async (imdbID: string): Promise<any> => {
    const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=7e59b8de`);
    const data = await response.json();
    return data;
  };
  