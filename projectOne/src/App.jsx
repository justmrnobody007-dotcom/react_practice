import { useState } from 'react';
import { FORTUNES } from './fortune';

const CATEGORIES = ['All', 'Love', 'Chaos', 'Academics', 'Destiny'];

function App() {
  const [currentFortune, setCurrentFortune] = useState(FORTUNES[0]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 1. New state: list of saved favourite fortunes
  const [favorites, setFavorites] = useState([]);

  const filteredFortunes = selectedCategory === 'All'
    ? FORTUNES
    : FORTUNES.filter(fortune => fortune.category === selectedCategory);

  function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * filteredFortunes.length);
    setCurrentFortune(filteredFortunes[randomIndex]);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
    const relevant = category === 'All'
      ? FORTUNES
      : FORTUNES.filter(fortune => fortune.category === category);
    const randomIndex = Math.floor(Math.random() * relevant.length);
    setCurrentFortune(relevant[randomIndex]);
  }

  // 2. Function to save the current fortune
  function handleSaveFavorite() {
    const isAlreadySaved = favorites.some(fav => fav.id === currentFortune.id);

    if (!isAlreadySaved) {
      // Add to favorites without mutating the existing array
      setFavorites([...favorites, currentFortune]);
    }
  }

  // Helper boolean to check if current fortune is already favorited
  const isCurrentFavorite = favorites.some(fav => fav.id === currentFortune.id);

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

        {/* 3. Button to favorite the current fortune */}
        <button
          onClick={handleSaveFavorite}
          disabled={isCurrentFavorite}
        >
          {isCurrentFavorite ? '★ Saved to Favourites' : '☆ Save to Favourites'}
        </button>
      </div>

      {/* Consult button */}
      <button onClick={getRandomFortune}>
        Consult the Oracle ({selectedCategory})
      </button>

      {/* 4. Display list of saved favourites */}
      <section className="favorites-section">
        <h2>Your Favourite Prophecies ({favorites.length})</h2>
        {favorites.length === 0 ? (
          <p>No favourites saved yet. Consult and save the ones you fear most.</p>
        ) : (
          <ul>
            {favorites.map(fav => (
              <li key={fav.id}>
                <strong>[{fav.category}]</strong> "{fav.text}"
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;