import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import FavoritesPage from "./pages/favoritesPage.tsx/favoritesPage";
import MovieDetailPage from "./pages/movieDetail/movieDetailPage";
import HomePage from "./pages/home/homePage";
import Header from "./widgets/header/header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:imdbID" element={<MovieDetailPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
    </BrowserRouter>
  );
};

export default App;
