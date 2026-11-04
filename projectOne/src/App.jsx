import { useState } from 'react';
import { FORTUNES } from "./fortune.js";

function App() {
  // 1. Initialize state with the first fortune in our array
  const [currentFortune, setCurrentFortune] = useState(FORTUNES[0]);

  // 2. Function to pick a random fortune
  function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * FORTUNES.length);
    setCurrentFortune(FORTUNES[randomIndex]);
  }

  return (
    <div className="app-container">
      <h1>The Unreliable Oracle</h1>
      <p>Consult the mystic forces... at your own risk.</p>

      {/* 3. Display current fortune card */}
      <div className="fortune-card">
        <span className="category-badge">{currentFortune.category}</span>
        <p className="fortune-text">"{currentFortune.text}"</p>
      </div>

      {/* 4. Button to trigger the state update */}
      <button onClick={getRandomFortune}>
        Consult the Oracle
      </button>
    </div>
  );
}

export default App;