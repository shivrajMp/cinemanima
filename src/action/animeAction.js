import axios from "axios";
import animelist from "../assets/animelist.json";

export const FETCH_API_DATA_REQUEST = "FETCH_API_DATA_REQUEST";
export const FETCH_API_DATA_SUCCESS = "FETCH_API_DATA_SUCCESS";
export const FETCH_API_DATA_FAILURE = "FETCH_API_DATA_FAILURE";
export const FETCH_API_ANIME_DATA_REQUEST = "FETCH_API_ANIME_DATA_REQUEST";
export const FETCH_API_ANIME_DATA_SUCCESS =
  "FETCH_API_ANIME_DATA_REQUEST_SUCCESS ";
export const FETCH_API_ANIME_DATA_FAILURE =
  "FETCH_API_ANIME_DATA_REQUES_FAILURE ";
export const TOTAL_ANIME = "TOTAL_ANIME ";
export const FETCH_TOTAL_ANIME_DATA_REQUEST = "FETCH_TOTAL_ANIME_DATA_REQUEST ";
export const CLEAR_DETAILS = "CLEAR_DETAILS ";

export const fetchApiDataRequest = () => ({
  type: FETCH_API_DATA_REQUEST,
});

export const fetchApiDataSuccess = (data) => ({
  type: FETCH_API_DATA_SUCCESS,
  payload: data,
});

export const fetchApiDataFailure = (error) => ({
  type: FETCH_API_DATA_FAILURE,
  payload: error,
});

export const fetchApiAnimeDataSuccess = (data) => ({
  type: FETCH_API_ANIME_DATA_SUCCESS,
  payload: data,
});

export const fetchApiAnimeDataFailure = (error) => ({
  type: FETCH_API_ANIME_DATA_FAILURE,
  payload: error,
});

export const fetchApiAnimeDataRequest = () => ({
  type: FETCH_API_ANIME_DATA_REQUEST,
});

export const fetchTotalAnimeDataRequest = () => ({
  type: FETCH_TOTAL_ANIME_DATA_REQUEST,
});

export const fetchTotalAnimeSucess = (data) => ({
  type: TOTAL_ANIME,
  payload: data,
});

export const clearDetailsActionCreator = () => ({
  type: CLEAR_DETAILS,
});

// function setSearchDetails(dispatch){

// }

const setAnimeList = function (dispatch, page) {
  console.log(animelist);
  // dispatch(fetchTotalAnimeSucess(animelist));
};
export const fetchApiData = (
  page = 1,
  search = "",
  filter = {},
  isTopAnime = false
) => {
  const url = isTopAnime
    ? `https://api.jikan.moe/v4/top/anime?q=${search}&page=${page}&sfw=${true}&limit=12`
    : `https://api.jikan.moe/v4/anime?q=${search}&page=${page}&sfw=${true}&filter=${
        filter["filter"] || ""
      }&type=${filter["type"] || ""}&rating=${
        filter["rating"] || ""
      }&order_by=${filter["order_by"] || ""}&status=${filter["status"] || ""}&limit=12`;
  return (dispatch) => {
    dispatch(fetchApiDataRequest());
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data && data?.data) {
          dispatch(fetchApiDataSuccess(data));
        } else {
          // dispatch(fetchApiDataFailure("message"));
          // if (search) {
          //   // setSearchDetails(dispatch)
          // } else {
          //   setAnimeList(dispatch, page);
          // }
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchApiDataFailure(error.message));
        if (search) {
          // setSearchDetails(dispatch)
        } else {
          setAnimeList(dispatch, page);
        }
      });
  };
};

export const fetchTotalAnimeApiData = () => {
  const url = `https://api.jikan.moe/v4/anime?sfw=${true}&limit=12`;
  return (dispatch) => {
    dispatch(fetchTotalAnimeDataRequest());
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchTotalAnimeSucess(data));
      })
      .catch((error) => {});
  };
};

export const fetchApiAnimeData = (animeID) => {
  return (dispatch) => {
    dispatch(fetchApiAnimeDataRequest());
    fetch(`https://api.jikan.moe/v4/anime/${animeID}`)
      .then((response) => response.json())
      .then((data) => dispatch(fetchApiAnimeDataSuccess(data)))
      .catch((error) => dispatch(fetchApiAnimeDataFailure(error.message)));
  };
};

// https://api.jikan.moe/v4/anime?q=yourname&page=1&limit=8&sfw
// searc
// fetch https://api.jikan.moe/v4/anime/35198 mal_id

// https://myanimelist.net/search/prefix.json?type=all&keyword=your&v=1
