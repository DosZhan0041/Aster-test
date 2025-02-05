import React from "react";
import MovieSearch from "../../features/movieSearch/movieSearch";
import MovieCard from "../../entities/movie/movieCard";
import { Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import moviesStore from "../../app/store/moviesStore";
import './home.scss';

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <MovieSearch />
      {moviesStore.movies.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center", marginTop: 3 }}>
          Киношек надо поискать)
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {moviesStore.movies.map((movie) => (
            <Grid item xs={3} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default observer(HomePage);
