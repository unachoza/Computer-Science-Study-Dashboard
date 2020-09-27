import React from 'react';
import ProgressBar from './Components/ProgressBar';
import AlgoPractice from './Components/AlgoPractice';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="blue-text">Arianna, Learn Data Structures and Algorithms and how to make money, like now.</div>
      </header>
      <main className="main">
        <ProgressBar />
        <AlgoPractice />
        <AlgoPractice />
      </main>
    </div>
  );
}

export default App;
