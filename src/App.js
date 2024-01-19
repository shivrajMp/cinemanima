
import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from './action/animeAction';
import { Button, Typography } from '@mui/material';
import Card from './component/dashboard/card/animeCard';
import Dashboard from './component/dashboard/dashboard';
import AnimeCard from './component/dashboard/card/animeCard';
import styled from 'styled-components';

const ParentDiv = styled.div`
  width: 50%; // Adjust as needed
  position: relative;
  border: 1px solid #333;
  height: 200px; 
`;

// Child div styles
const ChildDiv = styled.div`
  width: 100%; // Relative to the parent div
  height: 100%; // Relative to the parent div
  background-color: red; // Example background color
`;
function App() {

const json = {
  "mal_id": 820,
  "url": "https://myanimelist.net/anime/820/Ginga_Eiyuu_Densetsu",
  "images": {
      "jpg": {
          "image_url": "https://cdn.myanimelist.net/images/anime/13/13225.jpg",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/13/13225t.jpg",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/13/13225l.jpg"
      },
      "webp": {
          "image_url": "https://cdn.myanimelist.net/images/anime/13/13225.webp",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/13/13225t.webp",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/13/13225l.webp"
      }
  },
  "trailer": {
      "youtube_id": "Ou37P25tjJY",
      "url": "https://www.youtube.com/watch?v=Ou37P25tjJY",
      "embed_url": "https://www.youtube.com/embed/Ou37P25tjJY?enablejsapi=1&wmode=opaque&autoplay=1",
      "images": {
          "image_url": "https://img.youtube.com/vi/Ou37P25tjJY/default.jpg",
          "small_image_url": "https://img.youtube.com/vi/Ou37P25tjJY/sddefault.jpg",
          "medium_image_url": "https://img.youtube.com/vi/Ou37P25tjJY/mqdefault.jpg",
          "large_image_url": "https://img.youtube.com/vi/Ou37P25tjJY/hqdefault.jpg",
          "maximum_image_url": "https://img.youtube.com/vi/Ou37P25tjJY/maxresdefault.jpg"
      }
  },
  "approved": true,
  "titles": [
      {
          "type": "Default",
          "title": "Ginga Eiyuu Densetsu"
      },
      {
          "type": "Synonym",
          "title": "LoGH"
      },
      {
          "type": "Synonym",
          "title": "LotGH"
      },
      {
          "type": "Synonym",
          "title": "Gin'eiden"
      },
      {
          "type": "Synonym",
          "title": "GinEiDen"
      },
      {
          "type": "Synonym",
          "title": "Heldensagen Vom Kosmosinsel"
      },
      {
          "type": "Japanese",
          "title": "銀河英雄伝説"
      },
      {
          "type": "English",
          "title": "Legend of the Galactic Heroes"
      },
      {
          "type": "French",
          "title": "Les Héros de la Galaxie"
      }
  ],
  "title": "Ginga Eiyuu Densetsu",
  "title_english": "Legend of the Galactic Heroes",
  "title_japanese": "銀河英雄伝説",
  "title_synonyms": [
      "LoGH",
      "LotGH",
      "Gin'eiden",
      "GinEiDen",
      "Heldensagen Vom Kosmosinsel"
  ],
  "type": "OVA",
  "source": "Novel",
  "episodes": 110,
  "status": "Finished Airing",
  "airing": false,
  "aired": {
      "from": "1988-01-08T00:00:00+00:00",
      "to": "1997-03-17T00:00:00+00:00",
      "prop": {
          "from": {
              "day": 8,
              "month": 1,
              "year": 1988
          },
          "to": {
              "day": 17,
              "month": 3,
              "year": 1997
          }
      },
      "string": "Jan 8, 1988 to Mar 17, 1997"
  },
  "duration": "26 min per ep",
  "rating": "R - 17+ (violence & profanity)",
  "score": 9.02,
  "scored_by": 77877,
  "rank": 11,
  "popularity": 741,
  "members": 316115,
  "favorites": 16093,
  "synopsis": "The 150-year-long stalemate between the two interstellar superpowers, the Galactic Empire and the Free Planets Alliance, comes to an end when a new generation of leaders arises: the idealistic military genius Reinhard von Lohengramm, and the FPA's reserved historian, Yang Wenli.\n\nWhile Reinhard climbs the ranks of the Empire with the aid of his childhood friend, Siegfried Kircheis, he must fight not only the war, but also the remnants of the crumbling Goldenbaum Dynasty in order to free his sister from the Kaiser and unify humanity under one genuine ruler. Meanwhile, on the other side of the galaxy, Yang—a strong supporter of democratic ideals—has to stand firm in his beliefs, despite the struggles of the FPA, and show his pupil, Julian Mintz, that autocracy is not the solution.\n\nAs ideologies clash amidst the war's many casualties, the two strategic masterminds must ask themselves what the real reason behind their battle is.\n\n[Written by MAL Rewrite]",
  "background": "Legend of the Galactic Heroes was adapted from a series of ten novels, published 1982–87, by Yoshiki Tanaka. The novels won the Seiun Award for the best long-form Japanese science fiction in 1988. At the start of its production the anime was distributed through a subscription system in which episodes were mailed to existing fans of the novels. It was made in four separate tranches over nearly a decade, with the production of side-stories continuing for several further years. The main series has the largest voice cast of any anime, with well over 300 voice actors, and it is the longest OVA series ever made. The novels have also been adapted into a manga, a stage musical by the Takarazuka Revue and a number of games.",
  "season": null,
  "year": null,
  "broadcast": {
      "day": null,
      "time": null,
      "timezone": null,
      "string": null
  },
  "producers": [
      {
          "mal_id": 16,
          "type": "anime",
          "name": "TV Tokyo",
          "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
      },
      {
          "mal_id": 99,
          "type": "anime",
          "name": "Kitty Films",
          "url": "https://myanimelist.net/anime/producer/99/Kitty_Films"
      },
      {
          "mal_id": 382,
          "type": "anime",
          "name": "Tokuma Shoten",
          "url": "https://myanimelist.net/anime/producer/382/Tokuma_Shoten"
      },
      {
          "mal_id": 1493,
          "type": "anime",
          "name": "Tokuma Japan Communications",
          "url": "https://myanimelist.net/anime/producer/1493/Tokuma_Japan_Communications"
      },
      {
          "mal_id": 2434,
          "type": "anime",
          "name": "Wright Staff",
          "url": "https://myanimelist.net/anime/producer/2434/Wright_Staff"
      }
  ],
  "licensors": [
      {
          "mal_id": 376,
          "type": "anime",
          "name": "Sentai Filmworks",
          "url": "https://myanimelist.net/anime/producer/376/Sentai_Filmworks"
      }
  ],
  "studios": [
      {
          "mal_id": 1269,
          "type": "anime",
          "name": "K-Factory",
          "url": "https://myanimelist.net/anime/producer/1269/K-Factory"
      },
      {
          "mal_id": 2256,
          "type": "anime",
          "name": "Kitty Film Mitaka Studio",
          "url": "https://myanimelist.net/anime/producer/2256/Kitty_Film_Mitaka_Studio"
      }
  ],
  "genres": [
      {
          "mal_id": 8,
          "type": "anime",
          "name": "Drama",
          "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
          "mal_id": 24,
          "type": "anime",
          "name": "Sci-Fi",
          "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      }
  ],
  "explicit_genres": [],
  "themes": [
      {
          "mal_id": 50,
          "type": "anime",
          "name": "Adult Cast",
          "url": "https://myanimelist.net/anime/genre/50/Adult_Cast"
      },
      {
          "mal_id": 38,
          "type": "anime",
          "name": "Military",
          "url": "https://myanimelist.net/anime/genre/38/Military"
      },
      {
          "mal_id": 29,
          "type": "anime",
          "name": "Space",
          "url": "https://myanimelist.net/anime/genre/29/Space"
      }
  ],
  "demographics": []
}

  return (
      // <Dashboard/>
    //   <div style={{width:'1000px' ,height:'500px'}}>
    //   <AnimeCard
    //   anime={json}
    //   key={"movie?.mal_id"}
    //   isLoading={false}
    // />
    // </div>
  
    <ParentDiv>
   
    <ChildDiv ></ChildDiv>
  </ParentDiv>   );
}

export default App;
