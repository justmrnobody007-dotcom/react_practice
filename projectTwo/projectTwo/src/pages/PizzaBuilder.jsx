import { useState } from 'react';
import CrustSelector from '../components/CrustSelector';
import SauceSelector from '../components/SauceSelector';
import ToppingSelector from '../components/ToppingSelector';
import PizzaPreview from '../components/PizzaPreview';
import './PizzaBuilder.css';

function PizzaBuilder({ onAddToCart }) {
  const [selectedCrust, setSelectedCrust] = useState('circle');
  const [selectedSauce, setSelectedSauce] = useState('marinara');
  const [selectedToppings, setSelectedToppings] = useState([]);

  function handleToggleTopping(toppingId) {
    setSelectedToppings((prev) =>
      prev.includes(toppingId)
        ? prev.filter((id) => id !== toppingId)
        : [...prev, toppingId]
    );
  }

  return (
    <div className="pizza-builder">
      <div className="builder-controls">
        <CrustSelector
          selectedCrust={selectedCrust}
          onSelectCrust={setSelectedCrust}
        />
        <SauceSelector
          selectedSauce={selectedSauce}
          onSelectSauce={setSelectedSauce}
        />
        <ToppingSelector
          selectedToppings={selectedToppings}
          onToggleTopping={handleToggleTopping}
        />
      </div>

      <PizzaPreview
        selectedCrust={selectedCrust}
        selectedSauce={selectedSauce}
        selectedToppings={selectedToppings}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}

export default PizzaBuilder;
