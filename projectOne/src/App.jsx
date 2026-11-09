import { useState, useEffect } from 'react';
import { FORTUNES } from './fortune';
import './App.css';

function App() {
  const [currentFortune, setCurrentFortune] = useState(FORTUNES[0]);
  const [favorites, setFavorites] = useState([]);
  // 1. New state to track prediction history
  const [history, setHistory] = useState([FORTUNES[0]]);
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setIsCurtainOpen(true);
      } else {
        setIsCurtainOpen(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * FORTUNES.length);
    const nextFortune = FORTUNES[randomIndex];

    setCurrentFortune(nextFortune);

    // 2. Prepend the new draw to the top of our history
    setHistory(prevHistory => [nextFortune, ...prevHistory]);
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

  // 3. Clear all recorded history
  function handleClearHistory() {
    setHistory([]);
  }

  const isCurrentFavorite = favorites.some(fav => fav.id === currentFortune.id);

  return (
    <div className={`theatre-stage ${isCurtainOpen ? 'curtains-open' : ''}`}>
      {/* Top Valance */}
      <div className="curtain-valance">
        <div className="valance-drape left-drape"></div>
        <div className="valance-drape center-drape">
          <span className="peeking-eye">👁</span>
        </div>
        <div className="valance-drape right-drape"></div>
      </div>

      {/* Velvet Curtains */}
      <div className="curtain-panel curtain-left"></div>
      <div className="curtain-panel curtain-right"></div>

      {/* Hero Cover */}
      <header className={`hero-cover ${isCurtainOpen ? 'faded' : ''}`}>
        <span className="hero-symbol">✦ ☽ ✦</span>
        <h1 className="hero-title">The Unreliable Oracle</h1>
        <p className="scroll-indicator">↓ Scroll down to part the velvet veil ↓</p>
      </header>

      {/* Main Content */}
      <main className="oracle-wrapper">
        <div className="oracle-container">

          {/* Harmonic Dusty-Rose Mystic Orb */}
          <div className="mystic-orb-container">
            <div className="mystic-orb">
              <div className="orb-sparkle sparkle-top">✧</div>
              <div className="orb-sparkle sparkle-left">✦</div>
            </div>
          </div>

          {/* Tarot Card */}
          <div className="tarot-card">
            <div className="tarot-inner-border">
              <div className="tarot-header">
                <span className="tarot-number">NO. 0{currentFortune.id}</span>
                <span className="tarot-category">{currentFortune.category}</span>
              </div>

              <div className="tarot-art">
                <span className="tarot-symbol">⚔ ♡ ⚔</span>
              </div>

              <p className="tarot-prophecy">"{currentFortune.text}"</p>

              <button
                className="save-btn"
                onClick={handleSaveFavorite}
                disabled={isCurrentFavorite}
              >
                {isCurrentFavorite ? '★ Preserved' : '☆ Save Prophecy'}
              </button>
            </div>
          </div>

          {/* Action button */}
          <button className="consult-btn" onClick={getRandomFortune}>
            ✦ Draw Another Card ✦
          </button>

          {/* Saved Favourites */}
          <section className="drawer-section">
            <div className="section-header">
              <h2>Preserved Cards ({favorites.length})</h2>
            </div>
            {favorites.length === 0 ? (
              <p className="empty-text">No prophecies preserved yet.</p>
            ) : (
              <ul className="drawer-list">
                {favorites.map(fav => (
                  <li key={fav.id} className="drawer-item">
                    <div>
                      <span className="item-category">[{fav.category}]</span>
                      <span className="item-text">"{fav.text}"</span>
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

          {/* 4. Prediction History Section */}
          <section className="drawer-section">
            <div className="section-header">
              <h2>The Chronicle of Draws ({history.length})</h2>
              {history.length > 0 && (
                <button className="clear-btn" onClick={handleClearHistory}>
                  Clear
                </button>
              )}
            </div>
            {history.length === 0 ? (
              <p className="empty-text">The chronicle is silent.</p>
            ) : (
              <ul className="drawer-list history-list">
                {history.map((item, index) => (
                  <li key={index} className="drawer-item history-item">
                    <div>
                      <span className="item-category">[{item.category}]</span>
                      <span className="item-text">"{item.text}"</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

        </div>
      </main>
    </div>
  );
}

export default App;