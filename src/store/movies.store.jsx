import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../reducer/moviesReducer';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;