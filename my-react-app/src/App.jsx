import React from 'react';
import { GlobalStateProvider } from './GlobalStateContext';
import Bai1 from './Bai1';

function App() {
  return (
    <GlobalStateProvider>
      <Bai1 />
    </GlobalStateProvider>
  );
}

export default App;