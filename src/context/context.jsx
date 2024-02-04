import React, { createContext, useEffect, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [currentTopAnime, setTopAnime] = useState(true);
  const [onDetails, setOnDetails] = useState(false);

  const updateValue = (newValue) => {
    setTopAnime(newValue);
  };

  const updateOnDetails = (newValue) => {
    setOnDetails(newValue);
  };


  return (
    <MyContext.Provider
      value={{ currentTopAnime, updateValue, onDetails, updateOnDetails }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
