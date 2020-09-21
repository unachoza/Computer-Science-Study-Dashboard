import React from 'react';
import Nav from './Components/Nav';
import PrpgressBar from './Components/ProgressBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        {/* <Nav /> */}
        <PrpgressBar />
      </div>

      <header className="App-header">
        <div className="blue-text">Arianna, Learn Typescript and how to make money, like now.</div>
      </header>
    </div>
  );
}

export default App;
