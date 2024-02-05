import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "./action/animeAction";
import { Button, Typography } from "@mui/material";
import Card from "./component/dashboard/card/animeCard";
import Dashboard from "./component/dashboard/dashboard";
import AnimeCard from "./component/dashboard/card/animeCard";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import './styles/tailwind.css';
import AnimeDetails from "./component/animedetails/animedetails";
import ErrorPage from "./component/error-page/errorpage";
import {clickScroll} from  './utils/sound';
const MyLazyLoadedAnimeDetails = React.lazy(() => import('./component/animedetails/animedetails'));
const MyLazyLoadedDashboard = React.lazy(() => import('./component/dashboard/dashboard'));
function App() {

  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleClick = () => {
    clickScroll.play()
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
    setIsAtBottom(!isAtBottom);
  };
  useEffect(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
  
    const isBottom =  scrollTop + clientHeight >= scrollHeight
    // if (isBottom)
    // setIsAtBottom(isBottom)
  //  else if(scrollTop <= 0)
  //  setIsAtBottom(scrollTop <= 0)

  }, []);
  return (
    <>
   
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/anime" element={<MyLazyLoadedDashboard />} />
          <Route path="/anime/details/:animeName/:animeId" element={<MyLazyLoadedAnimeDetails />} />
          {/* Redirect any unmatched paths to the home page */}
          <Route
            path="*"
            element={
              <Navigate
                to="/anime"
                replace // Use replace to avoid adding a new entry to the history stack
              />
            }
          />
          <Route path="/anime/error-page" element={<ErrorPage />} />
          <Route path="/anime/error-page" element={<ErrorPage />} />
        </Routes>
        </Suspense>
      </Router>
      <button className="floating-icon" onClick={handleClick}>
        {isAtBottom ? "▲" : "▼"} {/* Change icon based on state */}
      </button>
    </>
  );
}

export default App;
