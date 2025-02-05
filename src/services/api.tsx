const baseUrl = "https://www.omdbapi.com/";
const apiKey = "7e59b8de";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await fetch(`${baseUrl}?s=${query}&apikey=${apiKey}`);
  const data = await response.json();
  return data.Search || [];
};

export const fetchMovieDetails = async (imdbID: string): Promise<any> => {
  const response = await fetch(`${baseUrl}?i=${imdbID}&apikey=${apiKey}`);
  const data = await response.json();
  return data;
};
