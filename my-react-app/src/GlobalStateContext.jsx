import React, { createContext, useState } from 'react';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  return (
    <GlobalStateContext.Provider value={{ count, setCount, inputValue, setInputValue, imageUrl, setImageUrl }}>
      {children}
    </GlobalStateContext.Provider>
  );
};