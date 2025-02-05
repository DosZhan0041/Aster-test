import React from "react";
import Favorites from "../../features/favorites/favorites";
import './favorites-main.scss'

const FavoritesPage: React.FC = () => {
  return (
    <div className="favorites-main">
      <h1>Favorites</h1>
      <Favorites />
    </div>
  );
};

export default FavoritesPage;
