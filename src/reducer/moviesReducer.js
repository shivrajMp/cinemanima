import {
  FETCH_API_DATA_REQUEST,
  FETCH_API_DATA_SUCCESS,
  FETCH_API_DATA_FAILURE,
} from "../action/animeAction";

const initialState = {
  anime: {
    data: [
      {
        mal_id: 0,
        url: "",
        images: {
          jpg: {
            image_url: "",
            small_image_url: "",
            large_image_url: "",
          },
          webp: {
            image_url: "",
            small_image_url: "",
            large_image_url: "",
          },
        },
        trailer: {
          youtube_id: "",
          url: "",
          embed_url: "",
        },
        approved: true,
        titles: [
          {
            type: "",
            title: "",
          },
        ],
        title: "",
        title_english: "",
        title_japanese: "",
        title_synonyms: [""],
        type: "TV",
        source: "",
        episodes: 0,
        status: "Finished Airing",
        airing: true,
        aired: {
          from: "",
          to: "",
          prop: {
            from: {
              day: 0,
              month: 0,
              year: 0,
            },
            to: {
              day: 0,
              month: 0,
              year: 0,
            },
            string: "",
          },
        },
        duration: "",
        rating: "G - All Ages",
        score: 0,
        scored_by: 0,
        rank: 0,
        popularity: 0,
        members: 0,
        favorites: 0,
        synopsis: "",
        background: "",
        season: "summer",
        year: 0,
        broadcast: {
          day: "",
          time: "",
          timezone: "",
          string: "",
        },
        producers: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        licensors: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        studios: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        genres: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        explicit_genres: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        themes: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        demographics: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
      },
      {
        mal_id: 1,
        url: "",
        images: {
          jpg: {
            image_url: "",
            small_image_url: "",
            large_image_url: "",
          },
          webp: {
            image_url: "",
            small_image_url: "",
            large_image_url: "",
          },
        },
        trailer: {
          youtube_id: "",
          url: "",
          embed_url: "",
        },
        approved: true,
        titles: [
          {
            type: "",
            title: "",
          },
        ],
        title: "",
        title_english: "",
        title_japanese: "",
        title_synonyms: [""],
        type: "TV",
        source: "",
        episodes: 1,
        status: "Finished Airing",
        airing: true,
        aired: {
          from: "",
          to: "",
          prop: {
            from: {
              day: 0,
              month: 0,
              year: 0,
            },
            to: {
              day: 0,
              month: 0,
              year: 0,
            },
            string: "",
          },
        },
        duration: "",
        rating: "G - All Ages",
        score: 0,
        scored_by: 0,
        rank: 0,
        popularity: 0,
        members: 0,
        favorites: 0,
        synopsis: "",
        background: "",
        season: "summer",
        year: 0,
        broadcast: {
          day: "",
          time: "",
          timezone: "",
          string: "",
        },
        producers: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        licensors: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        studios: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        genres: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        explicit_genres: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        themes: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        demographics: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
      },
      {
        mal_id: 2,
        url: "",
        images: {
          jpg: {
            image_url: "",
            small_image_url: "",
            large_image_url: "",
          },
          webp: {
            image_url: "",
            small_image_url: "",
            large_image_url: "",
          },
        },
        trailer: {
          youtube_id: "",
          url: "",
          embed_url: "",
        },
        approved: true,
        titles: [
          {
            type: "",
            title: "",
          },
        ],
        title: "",
        title_english: "",
        title_japanese: "",
        title_synonyms: [""],
        type: "TV",
        source: "",
        episodes: 1,
        status: "Finished Airing",
        airing: true,
        aired: {
          from: "",
          to: "",
          prop: {
            from: {
              day: 0,
              month: 0,
              year: 0,
            },
            to: {
              day: 0,
              month: 0,
              year: 0,
            },
            string: "",
          },
        },
        duration: "",
        rating: "G - All Ages",
        score: 0,
        scored_by: 0,
        rank: 0,
        popularity: 0,
        members: 0,
        favorites: 0,
        synopsis: "",
        background: "",
        season: "summer",
        year: 0,
        broadcast: {
          day: "",
          time: "",
          timezone: "",
          string: "",
        },
        producers: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        licensors: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        studios: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        genres: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        explicit_genres: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        themes: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        demographics: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
      },
      {
        mal_id: 3,
        url: "",
        images: {
          jpg: {
            image_url: "",
            small_image_url: "",
            large_image_url: "",
          },
          webp: {
            image_url: "",
            small_image_url: "",
            large_image_url: "",
          },
        },
        trailer: {
          youtube_id: "",
          url: "",
          embed_url: "",
        },
        approved: true,
        titles: [
          {
            type: "",
            title: "",
          },
        ],
        title: "",
        title_english: "",
        title_japanese: "",
        title_synonyms: [""],
        type: "TV",
        source: "",
        episodes: 1,
        status: "Finished Airing",
        airing: true,
        aired: {
          from: "",
          to: "",
          prop: {
            from: {
              day: 0,
              month: 0,
              year: 0,
            },
            to: {
              day: 0,
              month: 0,
              year: 0,
            },
            string: "",
          },
        },
        duration: "",
        rating: "G - All Ages",
        score: 0,
        scored_by: 0,
        rank: 0,
        popularity: 0,
        members: 0,
        favorites: 0,
        synopsis: "",
        background: "",
        season: "summer",
        year: 0,
        broadcast: {
          day: "",
          time: "",
          timezone: "",
          string: "",
        },
        producers: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        licensors: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        studios: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        genres: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        explicit_genres: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        themes: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        demographics: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
      },
      {
        mal_id: 4,
        url: "",
        images: {
          jpg: {
            image_url: "",
            small_image_url: "",
            large_image_url: "",
          },
          webp: {
            image_url: "",
            small_image_url: "",
            large_image_url: "",
          },
        },
        trailer: {
          youtube_id: "",
          url: "",
          embed_url: "",
        },
        approved: true,
        titles: [
          {
            type: "",
            title: "",
          },
        ],
        title: "",
        title_english: "",
        title_japanese: "",
        title_synonyms: [""],
        type: "TV",
        source: "",
        episodes: 1,
        status: "Finished Airing",
        airing: true,
        aired: {
          from: "",
          to: "",
          prop: {
            from: {
              day: 0,
              month: 0,
              year: 0,
            },
            to: {
              day: 0,
              month: 0,
              year: 0,
            },
            string: "",
          },
        },
        duration: "",
        rating: "G - All Ages",
        score: 0,
        scored_by: 0,
        rank: 0,
        popularity: 0,
        members: 0,
        favorites: 0,
        synopsis: "",
        background: "",
        season: "summer",
        year: 0,
        broadcast: {
          day: "",
          time: "",
          timezone: "",
          string: "",
        },
        producers: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        licensors: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        studios: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        genres: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        explicit_genres: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        themes: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        demographics: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
      },
      {
        mal_id: 5,
        url: "",
        images: {
          jpg: {
            image_url: "",
            small_image_url: "",
            large_image_url: "",
          },
          webp: {
            image_url: "",
            small_image_url: "",
            large_image_url: "",
          },
        },
        trailer: {
          youtube_id: "",
          url: "",
          embed_url: "",
        },
        approved: true,
        titles: [
          {
            type: "",
            title: "",
          },
        ],
        title: "",
        title_english: "",
        title_japanese: "",
        title_synonyms: [""],
        type: "TV",
        source: "",
        episodes: 1,
        status: "Finished Airing",
        airing: true,
        aired: {
          from: "",
          to: "",
          prop: {
            from: {
              day: 0,
              month: 0,
              year: 0,
            },
            to: {
              day: 0,
              month: 0,
              year: 0,
            },
            string: "",
          },
        },
        duration: "",
        rating: "G - All Ages",
        score: 0,
        scored_by: 0,
        rank: 0,
        popularity: 0,
        members: 0,
        favorites: 0,
        synopsis: "",
        background: "",
        season: "summer",
        year: 0,
        broadcast: {
          day: "",
          time: "",
          timezone: "",
          string: "",
        },
        producers: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        licensors: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        studios: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        genres: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        explicit_genres: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        themes: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
        demographics: [
          {
            mal_id: 0,
            type: "",
            name: "",
            url: "",
          },
        ],
      },
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
  console.log(action.payload,"payload")
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
    default:
      return state;
  }
};

export default dataReducer;
