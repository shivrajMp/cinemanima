import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [currentTopAnime, setTopAnime] = useState(true);

  const updateValue = (newValue) => {
    setTopAnime(newValue);
  };

  return (
    <MyContext.Provider value={{ currentTopAnime, updateValue }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
