import React, { useEffect, useContext, useRef } from 'react';
import { GlobalStateContext } from './GlobalStateContext';
import './Bai1.css';

function Bai1() {
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

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleShowInput = () => {
    setInputValue(inputRef.current.value);
  };

  return (
    <div className="bai1">
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
        {imageUrl ? (
          <img src={imageUrl} alt="Cat" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Bai1;