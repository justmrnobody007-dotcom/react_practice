import CrustSelector from '../components/CrustSelector';
import SauceSelector from '../components/SauceSelector';
import ToppingSelector from '../components/ToppingSelector';
import PizzaPreview from '../components/PizzaPreview';

function PizzaBuilder() {
  return (
    <div className="pizza-builder">
      <CrustSelector />
      <SauceSelector />
      <ToppingSelector />
      <PizzaPreview />
    </div>
  );
}

export default PizzaBuilder;
