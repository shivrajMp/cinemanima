import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../reducer/moviesReducer';
import selectedAnimeReducer from '../reducer/selectedAnimeReducer';

const store = configureStore({
  reducer: {
    data: dataReducer,
    selectedAnime: selectedAnimeReducer,
  },
});

export default store;