import { useState } from 'react';
import { FORTUNES } from './fortune';

const CATEGORIES = ['All', 'Love', 'Chaos', 'Academics', 'Destiny'];

function App() {
  // 1. Existing state for current fortune
  const [currentFortune, setCurrentFortune] = useState(FORTUNES[0]);

  // 2. New state for tracking the active category filter
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 3. Filter fortunes based on selected category
  const filteredFortunes = selectedCategory === 'All'
    ? FORTUNES
    : FORTUNES.filter(fortune => fortune.category === selectedCategory);

  // 4. Pick random fortune from the FILTERED list
  function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * filteredFortunes.length);
    setCurrentFortune(filteredFortunes[randomIndex]);
  }

  // 5. When user switches category, update category and optionally pick a fortune right away
  function handleCategoryChange(category) {
    setSelectedCategory(category);

    const relevant = category === 'All'
      ? FORTUNES
      : FORTUNES.filter(fortune => fortune.category === category);

    const randomIndex = Math.floor(Math.random() * relevant.length);
    setCurrentFortune(relevant[randomIndex]);
  }

  return (
    <div className="app-container">
      <h1>The Unreliable Oracle</h1>
      <p>Consult the mystic forces... at your own risk.</p>

      {/* Category selector buttons */}
      <div className="category-filters">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            style={{
              fontWeight: selectedCategory === category ? 'bold' : 'normal',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Fortune Display Card */}
      <div className="fortune-card">
        <span className="category-badge">{currentFortune.category}</span>
        <p className="fortune-text">"{currentFortune.text}"</p>
      </div>

      {/* Consult button */}
      <button onClick={getRandomFortune}>
        Consult the Oracle ({selectedCategory})
      </button>
    </div>
  );
}

export default App;