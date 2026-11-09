import { useState, useEffect } from 'react';
import { FORTUNES } from './fortune';
import './App.css';

function App() {
  const [currentFortune, setCurrentFortune] = useState(FORTUNES[0]);
  const [favorites, setFavorites] = useState([]);
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);

  // Listen to window scroll to smoothly push curtains open/closed
  useEffect(() => {
    function handleScroll() {
      // If scrolled down more than 40px, part the curtains
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
      {/* Top Valance with Subtle Eye */}
      <div className="curtain-valance">
        <div className="valance-drape left-drape"></div>
        <div className="valance-drape center-drape">
          <span className="peeking-eye">👁</span>
        </div>
        <div className="valance-drape right-drape"></div>
      </div>

      {/* Velvet Curtains (Left & Right) */}
      <div className="curtain-panel curtain-left"></div>
      <div className="curtain-panel curtain-right"></div>

      {/* Hero Welcome (Fades out when scrolled) */}
      <header className={`hero-cover ${isCurtainOpen ? 'faded' : ''}`}>
        <span className="hero-symbol">✦ ☽ ✦</span>
        <h1 className="hero-title">The Unreliable Oracle</h1>
      </header>

      {/* Revealed Sanctuary: Tarot Card & Glowing Orb (Image 2) */}
      <main className="oracle-wrapper">
        <div className="oracle-container">

          {/* Glowing Crystal Orb Behind the Card */}
          <div className="mystic-orb-container">
            <div className="mystic-orb">
              <div className="orb-sparkle sparkle-top">✧</div>
              <div className="orb-sparkle sparkle-left">✦</div>
            </div>
          </div>

          {/* Aesthetic Tarot Card */}
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

          {/* Favourites list */}
          <section className="favorites-section">
            <h2>Preserved Cards ({favorites.length})</h2>
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
      </main>
    </div>
  );
}

export default App;