import {
  FETCH_API_DATA_REQUEST,
  FETCH_API_DATA_SUCCESS,
  FETCH_API_DATA_FAILURE,
  CLEAR_DETAILS

} from "../action/animeAction";

export const initialState = {
  anime: {
    data: [
      {
        mal_id: 0,
  
      },
      {
        mal_id: 1,
       
      },
      {
        mal_id: 3,
       
      },
      {
        mal_id: 4,
      
      },
      {
        mal_id: 5,
      },
      {
        mal_id: 6,
      },
      {
        mal_id: 7,
      },
      {
        mal_id: 8,
      }
    ],
    pagination: {
      last_visible_page: 0,
      has_next_page: true,
      items: {
        count: 0,
        total: 0,
        per_page: 0,
      },
    },
  },
  loading: false,
  error: null,
 
};

const dataReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_API_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_API_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        anime: action.payload,
        error: null,
      };
    case FETCH_API_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        anime: {},
        error: action.payload,
      };
    case CLEAR_DETAILS:
        return initialState
    default:
      return state;
  }
};

export default dataReducer;
