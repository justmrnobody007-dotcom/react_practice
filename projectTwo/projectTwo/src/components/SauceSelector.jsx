import { SAUCE_OPTIONS } from '../data/pizzaOptions';

function SauceSelector({ selectedSauce, onSelectSauce }) {
  return (
    <section className="selector-section sauce-selector">
      <h2 className="selector-heading">choose your sauce</h2>
      <div className="option-grid">
        {SAUCE_OPTIONS.map((sauce) => {
          const isSelected = selectedSauce === sauce.id;
          return (
            <button
              key={sauce.id}
              type="button"
              className={`option-card${isSelected ? ' selected' : ''}`}
              onClick={() => onSelectSauce(sauce.id)}
            >
              <img src={sauce.image} alt={sauce.name} className="option-img" />
              <span className="option-name">{sauce.name}</span>
              <span className="option-price">₹{sauce.price}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default SauceSelector;
