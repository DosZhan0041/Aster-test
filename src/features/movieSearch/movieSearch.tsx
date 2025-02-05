import React from "react";
import { observer } from "mobx-react-lite";
import moviesStore from "../../app/store/moviesStore";
import { TextField } from "@mui/material";

const MovieSearch: React.FC = () => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    moviesStore.setSearchQuery(event.target.value);
    moviesStore.fetchMovies(event.target.value);
  };

  return (
    <TextField
      label="Поискать киношек"
      variant="outlined"
      value={moviesStore.searchQuery}
      onChange={handleSearch}
      sx={{
        width: 300,
        height: 35,
        marginBottom: 10,
        marginTop: 5,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    />
  );
};

export default observer(MovieSearch);
