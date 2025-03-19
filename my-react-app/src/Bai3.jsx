import React, { useEffect, useContext, useRef, useCallback, useMemo } from 'react';
import { GlobalStateContext } from './GlobalStateContext';
import './Bai3.css';

const Bai3 = React.memo(() => {
  const { count, setCount, inputValue, setInputValue, imageUrl, setImageUrl } = useContext(GlobalStateContext);
  const inputRef = useRef(null);

  useEffect(() => {
    fetch('https://cataas.com/cat')
      .then(response => response.blob())
      .then(imageBlob => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImageUrl(imageObjectURL);
      })
      .catch(error => console.error('Error fetching image:', error));
  }, [setImageUrl]);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [setCount]);

  const handleDecrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, [setCount]);

  const handleShowInput = useCallback(() => {
    setInputValue(inputRef.current.value);
  }, [setInputValue]);

  const memoizedImage = useMemo(() => {
    return imageUrl ? <img src={imageUrl} alt="Cat" /> : <p>Loading...</p>;
  }, [imageUrl]);

  return (
    <div className="bai3">
        <hr />
        <h1>Bài 3</h1>
      <p>Count: {count}</p>
      <div className="button-container">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <hr />
      <input type="text" ref={inputRef} placeholder="Type something..." />
      <button className="show-input-button" onClick={handleShowInput}>Show Input</button>
      <p>Input Value: {inputValue}</p>
      <hr />
      <div>
        <h2>Fetched Image:</h2>
        {memoizedImage}
      </div>
    </div>
  );
});

export default Bai3;