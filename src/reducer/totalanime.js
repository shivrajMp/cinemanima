// import { TOTAL_ANIME ,FETCH_TOTAL_ANIME_DATA_REQUEST} from "../action/animeAction";

// const initialState = {
//   data: {},
//   loading: false,
//   error: null,
// };

// const totalAnime = (state = initialState, action) => {
//   const data = action.payload?.data || [];
//   // const filterList = (data || [])?.map((obj) => {
//   //   // Create a new object by spreading the existing object and adding new key-value pairs
//   //   return { img: obj?.images?.jpg?.small_image_url, id: obj.obj.mal_id ,title: obj.title_english,year: obj.year};
//   // });
//   // console.log(filterList,filterList)
//   switch (action.type) {
//     case TOTAL_ANIME:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//         totalanime: data,
//       };
//     case FETCH_TOTAL_ANIME_DATA_REQUEST:
//         return {
//             ...state,
//             loading: true,
//             error: null,
//           };
//     default:
//       return state;
//   }
// };

// export default totalAnime;
