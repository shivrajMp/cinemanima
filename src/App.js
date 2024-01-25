
import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from './action/animeAction';
import { Button, Typography } from '@mui/material';
import Card from './component/dashboard/card/animeCard';
import Dashboard from './component/dashboard/dashboard';
import AnimeCard from './component/dashboard/card/animeCard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AnimeDetails from './component/animedetails/animedetails';

function App() {



  return (
    <Router>
    <Routes>
    <Route path="/anime" element={<Dashboard />} />
        <Route path="/anime/:animeName/:animeId" element={<AnimeDetails />} />
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

    </Routes>
  </Router>
  );
}

export default App;
