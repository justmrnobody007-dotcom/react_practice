import './Pizza.css'; 
import mainPizza from './assets/mainPizza.png';

function Pizza({ onStart }) {
  return (
    <div className="pizza-hero-container">
      <div className="hero-left">
        <h1 className="main-title">make your own perfect pizza!</h1>
        <button className="start-btn" onClick={onStart}>
          start <span>→</span>
        </button>
      </div>

      <div className="hero-right">
        <img
          src={mainPizza}
          alt="Delicious customized pizza"
          className="hero-pizza-img"
        />
      </div>
    </div>
  );
}

export default Pizza;