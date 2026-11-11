import { TOPPING_OPTIONS } from '../data/pizzaOptions';

function ToppingSelector({ selectedToppings, onToggleTopping }) {
  return (
    <section className="selector-section topping-selector">
      <h2 className="selector-heading">choose your toppings</h2>
      <div className="option-grid">
        {TOPPING_OPTIONS.map((topping) => {
          const isSelected = selectedToppings.includes(topping.id);
          return (
            <button
              key={topping.id}
              type="button"
              className={`option-card${isSelected ? ' selected' : ''}`}
              onClick={() => onToggleTopping(topping.id)}
            >
              <img src={topping.image} alt={topping.name} className="option-img" />
              <span className="option-name">{topping.name}</span>
              <span className="option-price">+₹{topping.price}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default ToppingSelector;
