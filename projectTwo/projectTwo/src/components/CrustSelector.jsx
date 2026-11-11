import { CRUST_OPTIONS } from '../data/pizzaOptions';

function CrustSelector({ selectedCrust, onSelectCrust }) {
  return (
    <section className="selector-section crust-selector">
      <h2 className="selector-heading">choose your crust</h2>
      <div className="option-grid">
        {CRUST_OPTIONS.map((crust) => {
          const isSelected = selectedCrust === crust.id;
          return (
            <button
              key={crust.id}
              type="button"
              className={`option-card${isSelected ? ' selected' : ''}`}
              onClick={() => onSelectCrust(crust.id)}
            >
              <img src={crust.image} alt={crust.name} className="option-img" />
              <span className="option-name">{crust.name}</span>
              <span className="option-price">₹{crust.price}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CrustSelector;
