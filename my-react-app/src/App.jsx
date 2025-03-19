import React from 'react';
import { GlobalStateProvider } from './GlobalStateContext';
import Bai1 from './Bai1';
import Bai3 from './Bai3';
import Bai2 from './Bai2';

function App() {
  return (
    <GlobalStateProvider>
      <Bai1 />
      <Bai2 />
      <Bai3 />
    </GlobalStateProvider>
  );
}

export default App;