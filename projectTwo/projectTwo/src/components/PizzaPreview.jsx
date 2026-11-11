import { CRUST_OPTIONS, SAUCE_OPTIONS, TOPPING_OPTIONS } from '../data/pizzaOptions';

function PizzaPreview({ selectedCrust, selectedSauce, selectedToppings, onAddToCart }) {
  const crust = CRUST_OPTIONS.find((item) => item.id === selectedCrust) || CRUST_OPTIONS[0];
  const sauce = SAUCE_OPTIONS.find((item) => item.id === selectedSauce) || SAUCE_OPTIONS[0];
  const toppings = TOPPING_OPTIONS.filter((item) => selectedToppings.includes(item.id));

  const totalPrice =
    crust.price +
    sauce.price +
    toppings.reduce((sum, item) => sum + item.price, 0);

  return (
    <aside className="pizza-preview">
      <h2 className="selector-heading">your pizza</h2>

      <div className="preview-stage">
        <img src={crust.image} alt={crust.name} className="preview-base-img" />
        <div className="preview-sauce-glow" style={{ backgroundColor: sauce.tint }} />
      </div>

      <div className="preview-ingredients">
        <span className="preview-chip">
          <img src={sauce.image} alt={sauce.name} className="preview-chip-img" />
          {sauce.name}
        </span>
        {toppings.map((topping) => (
          <span key={topping.id} className="preview-chip">
            <img src={topping.image} alt={topping.name} className="preview-chip-img" />
            {topping.name}
          </span>
        ))}
      </div>

      <div className="preview-summary">
        <div className="preview-summary-row">
          <span>crust: {crust.name}</span>
          <span>₹{crust.price}</span>
        </div>
        <div className="preview-summary-row">
          <span>sauce: {sauce.name}</span>
          <span>₹{sauce.price}</span>
        </div>
        <div className="preview-summary-row">
          <span>toppings ({toppings.length})</span>
          <span>₹{toppings.reduce((sum, item) => sum + item.price, 0)}</span>
        </div>
        <div className="preview-summary-row preview-total">
          <span>total</span>
          <span>₹{totalPrice}</span>
        </div>
      </div>

      <button
        type="button"
        className="add-cart-btn"
        onClick={() => onAddToCart({ crust, sauce, toppings, totalPrice })}
      >
        add to cart →
      </button>
    </aside>
  );
}

export default PizzaPreview;
