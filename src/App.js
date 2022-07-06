import './App.css';
import React from 'react';
import Bingo from './components/Bingo';
import Buttons from './components/Buttons';
import NumberBar from './components/NumberBar';

function App() {
  return (
    <div className="App">
   This is app
   <NumberBar />
   <Bingo />
   <Buttons />
    </div>
  );
}

export default App;
