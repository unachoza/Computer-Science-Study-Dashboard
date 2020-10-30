import React from 'react';
import ProgressBar from './ProgressBar';
// import AlgoPractice from './AlgoPractice';
import '../styles/globals.css';
import Link from 'next/link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="blue-text">Arianna, Learn Data Structures and Algorithms and how to make money, like now.</div>
      </header>
      <main className="main">
        <ProgressBar />
        <h2>
          <Link href="https://arianna-dev.vercel.app/">
            <a>Back to home</a>
          </Link>
        </h2>
        {/* <AlgoPractice /> */}
      </main>
    </div>
  );
}

export default App;
