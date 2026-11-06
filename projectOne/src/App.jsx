import { useState } from 'react';
import { FORTUNES } from './fortune';
import './App.css';

function App() {
  const [currentFortune, setCurrentFortune] = useState(FORTUNES[0]);
  const [favorites, setFavorites] = useState([]);

  // 1. State to control whether the purple stage curtains are open
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);

  function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * FORTUNES.length);
    setCurrentFortune(FORTUNES[randomIndex]);
  }

  function handleSaveFavorite() {
    const isAlreadySaved = favorites.some(fav => fav.id === currentFortune.id);
    if (!isAlreadySaved) {
      setFavorites([...favorites, currentFortune]);
    }
  }

  function handleRemoveFavorite(id) {
    setFavorites(favorites.filter(fav => fav.id !== id));
  }

  const isCurrentFavorite = favorites.some(fav => fav.id === currentFortune.id);

  return (
    <div className={`theatre-stage ${isCurtainOpen ? 'curtains-open' : ''}`}>
      {/* Ornate Arch & Draped Top Curtains (Image 1) */}
      <div className="curtain-valance">
        <div className="valance-drape left-drape"></div>
        <div className="valance-drape center-drape">
          <span className="peeking-eye" title="The Oracle watches...">👁️</span>
        </div>
        <div className="valance-drape right-drape"></div>
      </div>

      {/* Left & Right Sliding Purple Velvet Curtains */}
      <div className="curtain-panel curtain-left"></div>
      <div className="curtain-panel curtain-right"></div>

      {/* Prompt shown only while curtains are closed */}
      {!isCurtainOpen && (
        <div className="curtain-overlay">
          <h1 className="hero-curtain-title">The Unreliable Oracle</h1>
          <button
            className="enter-stage-btn"
            onClick={() => setIsCurtainOpen(true)}
          >
            ✦ Part the Velvet Veil ✦
          </button>
        </div>
      )}

      {/* Main Content Revealed Behind the Curtains */}
      <div className="oracle-wrapper">
        <div className="oracle-container">
          <header className="oracle-header">
            <div className="crystal-ball">🔮</div>
            <h1 className="oracle-title">The Unreliable Oracle</h1>
            <p className="oracle-subtitle">Consult the mystic shadows... at your own peril.</p>
          </header>

          {/* Fortune Display Card */}
          <div className="fortune-card">
            <span className="category-badge">{currentFortune.category}</span>
            <p className="fortune-text">"{currentFortune.text}"</p>

            <button
              className="save-btn"
              onClick={handleSaveFavorite}
              disabled={isCurrentFavorite}
            >
              {isCurrentFavorite ? '★ Saved to Favourites' : '☆ Save to Favourites'}
            </button>
          </div>

          {/* Consult button */}
          <button className="consult-btn" onClick={getRandomFortune}>
            ✦ Consult the Oracle ✦
          </button>

          {/* Favourites list */}
          <section className="favorites-section">
            <h2>Recorded Prophecies ({favorites.length})</h2>
            {favorites.length === 0 ? (
              <p className="empty-text">No prophecies preserved yet.</p>
            ) : (
              <ul className="favorites-list">
                {favorites.map(fav => (
                  <li key={fav.id} className="favorite-item">
                    <div>
                      <span className="fav-category">[{fav.category}]</span>
                      <span className="fav-text">"{fav.text}"</span>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveFavorite(fav.id)}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;