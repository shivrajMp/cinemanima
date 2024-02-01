import React, { Suspense, useEffect, useState } from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import ErrorPage from "../error-page/errorpage";
const MyLazyLoadedAnimeDetails = React.lazy(() =>
  import("../animedetails/animedetails")
);
const MyLazyLoadedDashboard = React.lazy(() =>
  import("../dashboard/dashboard")
);
function AnimeHome() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleClick = () => {
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

    const isBottom = scrollTop + clientHeight >= scrollHeight;
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
            <Route
              path="/anime/:animeName/:animeId"
              element={<MyLazyLoadedAnimeDetails />}
            />
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
          </Routes>
        </Suspense>
      </Router>
      <button className="floating-icon" onClick={handleClick}>
        {isAtBottom ? "▲" : "▼"} {/* Change icon based on state */}
      </button>
    </>
  );
}

export default AnimeHome;
