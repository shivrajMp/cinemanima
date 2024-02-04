import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../reducer/moviesReducer';
import selectedAnimeReducer from '../reducer/selectedAnimeReducer';
import totalAnime from '../reducer/totalanime';

const store = configureStore({
  reducer: {
    data: dataReducer,
    selectedAnime: selectedAnimeReducer,
    totalAnime: totalAnime,
  },
});

export default store;