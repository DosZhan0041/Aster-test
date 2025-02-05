import React from "react";
import { observer } from "mobx-react-lite";
import './favorits.scss'
import { Card, CardContent, Typography, Button, CardMedia } from "@mui/material";
import { Movie } from "../../app/store/moviesStore";
import favoritesStore from "../../app/store/favoriteStore";
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
  borderTopRightRadius: 8
};

const buttonStyle = {
  marginTop: 2,
  backgroundColor: "#ff4081",
  "&:hover": {
    backgroundColor: "#f50057",
  },
};

const Favorites: React.FC = () => {
  return (
    <div className="favorites">
      {favoritesStore.favorites.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center", marginTop: 3, width: 1456}}>
          Favorites are empty ;(
        </Typography>
      ) : (
        favoritesStore.favorites.map((movie: Movie) => (
          <Link to={`movie/${movie.imdbID}`} key={movie.imdbID} style={{ textDecoration: "none" }}>
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                image={movie.Poster !== "N/A" ? movie.Poster : 'https://pbs.twimg.com/media/DagrTZvUQAEmSoW.jpg'}
                alt={movie.Title}
                sx={cardMediaStyle}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {movie.Title.slice(0, 14)}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                  {movie.Year}
                </Typography>
                <Button
                  variant="contained"
                  sx={buttonStyle}
                  onClick={(e) => {
                    e.preventDefault();
                    favoritesStore.removeFavorite(movie.imdbID); 
                  }}
                >
                  Remove from Favorites
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))
      )}
    </div>
  );
};

export default observer(Favorites);
