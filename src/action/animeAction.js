import axios from "axios";



export const FETCH_API_DATA_REQUEST = 'FETCH_API_DATA_REQUEST';
export const FETCH_API_DATA_SUCCESS = 'FETCH_API_DATA_SUCCESS';
export const FETCH_API_DATA_FAILURE = 'FETCH_API_DATA_FAILURE';

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

export const fetchApiData = (page=1) => {
  return dispatch => {
    dispatch(fetchApiDataRequest());
    fetch(`https://api.jikan.moe/v4/top/anime?page=${page}&sfw=${true}`)
      .then(response => response.json())
      .then(data => dispatch(fetchApiDataSuccess(data)))
      .catch(error => dispatch(fetchApiDataFailure(error.message)));
  };
};

// https://api.jikan.moe/v4/anime?q=yourname&page=1&limit=8&sfw
// searc
// fetch https://api.jikan.moe/v4/anime/35198 mal id