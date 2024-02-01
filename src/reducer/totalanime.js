import { TOTAL_ANIME } from "../action/animeAction";

const initialState = {
  selectedanime: {},
  loading: false,
  error: null,
};

const totalAnime = (state = initialState, action) => {
  const data = action.payload?.data || [];
  const filterList = (data || [])?.map((obj) => {
    // Create a new object by spreading the existing object and adding new key-value pairs
    return { img: obj?.images?.jpg?.small_image_url, id: obj.obj.mal_id ,title: obj.title_english,year: obj.year};
  });
  console.log(filterList,filterList)
  switch (action.type) {
    case TOTAL_ANIME:
      return {
        ...state,
        loading: true,
        error: null,
        totalanime: action.payload,
      };
    default:
      return state;
  }
};

export default totalAnime;
