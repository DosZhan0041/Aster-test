import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import favoritesStore from "../../app/store/favoriteStore";
import { Movie } from "../../app/store/moviesStore";
import { Link } from "react-router-dom";

const cardStyle = {
  width: 280,
  height: 470,
  boxShadow: 3,
  borderRadius: 2,
  paddingTop: 5,
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  display: "flex",
  flexDirection: "column", 
  justifyContent: "center", 
  alignItems: "center",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: 10,
  },
};

const cardMediaStyle = {
  height: 300,
  width: 250,
  objectFit: "cover",
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
};

const buttonStyle = {
  marginTop: 2,
  backgroundColor: "#ff4081",
  "&:hover": {
    backgroundColor: "#f50057",
  },
};

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const tit = (movie.Title).slice(0, 14)
  return (
    <Link to={`movie/${movie.imdbID}`} style={{ textDecoration: "none" }}>
      <Card sx={cardStyle}>
        <CardMedia
          component="img"
          image={movie.Poster !== "N/A"  ? movie.Poster : 'https://pbs.twimg.com/media/DagrTZvUQAEmSoW.jpg'}
          alt={movie.Title}
          height={280}
          sx={cardMediaStyle}
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {tit}
          </Typography>
          <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
            {movie.Year}
          </Typography>
          <Button
            variant="contained"
            sx={buttonStyle}
            onClick={(e) => {
              e.preventDefault(); 
              favoritesStore.addFavorite(movie);
            }}
          >
            Add to Favorites
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default observer(MovieCard);
