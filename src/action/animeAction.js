import axios from "axios";



export const FETCH_API_DATA_REQUEST = 'FETCH_API_DATA_REQUEST';
export const FETCH_API_DATA_SUCCESS = 'FETCH_API_DATA_SUCCESS';
export const FETCH_API_DATA_FAILURE = 'FETCH_API_DATA_FAILURE';
export const FETCH_API_ANIME_DATA_REQUEST = 'FETCH_API_ANIME_DATA_REQUEST';
export const FETCH_API_ANIME_DATA_SUCCESS  = 'FETCH_API_ANIME_DATA_REQUEST_SUCCESS ';
export const FETCH_API_ANIME_DATA_FAILURE  = 'FETCH_API_ANIME_DATA_REQUES_FAILURE ';
export const CLEAR_DETAILS  = 'CLEAR_DETAILS ';

export const fetchApiDataRequest = () => ({
  type: FETCH_API_DATA_REQUEST,
});



export const fetchApiDataSuccess = data => ({
  type: FETCH_API_DATA_SUCCESS,
  payload: data,
});

export const fetchApiDataFailure = error => ({
  type: FETCH_API_DATA_FAILURE,
  payload: error,
});

export const fetchApiAnimeDataSuccess = data => ({
  type: FETCH_API_ANIME_DATA_SUCCESS,
  payload: data,
});

export const fetchApiAnimeDataFailure = error => ({
  type: FETCH_API_ANIME_DATA_FAILURE,
  payload: error,
});

export const fetchApiAnimeDataRequest = () => ({
  type: FETCH_API_ANIME_DATA_REQUEST,
});

export const clearDetailsActionCreator = () => ({
  type: CLEAR_DETAILS
});
export const fetchApiData = (page=1 ,search="") => {
  return dispatch => {
    dispatch(fetchApiDataRequest());
    fetch(`https://api.jikan.moe/v4/top/anime?q=${search}&page=${page}&sfw=${true}&limit=12`)
      .then(response => response.json())
      .then(data => dispatch(fetchApiDataSuccess(data)))
      .catch(error => dispatch(fetchApiDataFailure(error.message)));
  };
};

export const fetchApiAnimeData = (animeID) => {
  return dispatch => {
    dispatch(fetchApiAnimeDataRequest());
    fetch(`https://api.jikan.moe/v4/anime/${animeID}`)
      .then(response => response.json())
      .then(data => dispatch(fetchApiAnimeDataSuccess(data)))
      .catch(error => dispatch(fetchApiAnimeDataFailure(error.message)));
  };
};

// https://api.jikan.moe/v4/anime?q=yourname&page=1&limit=8&sfw
// searc
// fetch https://api.jikan.moe/v4/anime/35198 mal_id

// https://myanimelist.net/search/prefix.json?type=all&keyword=your&v=1