import React, { createContext, useState } from 'react';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <GlobalStateContext.Provider value={{ count, setCount, inputValue, setInputValue, imageUrl, setImageUrl, todos, setTodos }}>
      {children}
    </GlobalStateContext.Provider>
  );
};