import {
  FETCH_API_ANIME_DATA_REQUEST,
  FETCH_API_ANIME_DATA_SUCCESS,
  FETCH_API_ANIME_DATA_FAILURE,
} from "../action/animeAction";

const initialState = {
  selectedanime: {},
  loading: false,
  error: null,
};

const selectedAnimeReducer = (state = initialState, action) => {

  switch (action.type) {
  
    case FETCH_API_ANIME_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_API_ANIME_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedanime: action.payload,
        error: null,
      };
    case FETCH_API_ANIME_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        selectedanime: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default selectedAnimeReducer;
