import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import movieDetailStore from "../../app/store/movieDetailStore";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const MovieDetailPage: React.FC = () => {
  const { imdbID } = useParams();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (imdbID) {
      movieDetailStore.fetchMovieDetails(imdbID);
    }

    const savedTime = localStorage.getItem(`movie-${imdbID}-time`);
    if (savedTime && videoRef.current) {
      videoRef.current.currentTime = parseFloat(savedTime);
    }

    const handleTimeUpdate = () => {
      if (videoRef.current) {
        localStorage.setItem(`movie-${imdbID}-time`, videoRef.current.currentTime.toString());
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [imdbID]);

  const movie = movieDetailStore.movie;

  if (!movie) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", 
          textAlign: "center", 
        }}
      >
        <Typography variant="h4">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
      <Card sx={{ maxWidth: 600, display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          image={movie.Poster}
          alt={movie.Title}
          sx={{ height: 300, objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {movie.Title} ({movie.Year})
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Genre: {movie.Genre} | Language: {movie.Language}
          </Typography>
          <Typography variant="body1" paragraph>
            {movie.Plot}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Director: {movie.Director || "N/A"}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Writers: {movie.Writer || "N/A"}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Actors: {movie.Actors}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Country: {movie.Country}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Released: {movie.Released}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Rating: {movie.imdbRating} ({movie.imdbVotes} votes)
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Runtime: {movie.Runtime || "N/A"}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Metascore: {movie.Metascore || "N/A"}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Awards: {movie.Awards || "N/A"}
          </Typography>
          <video
            autoPlay
            muted
            ref={videoRef}
            controls
            width="100%"
            src="/exampl.mp4"
          >
          </video>
        </CardContent>
      </Card>
    </Box>
  );
};

export default observer(MovieDetailPage);
