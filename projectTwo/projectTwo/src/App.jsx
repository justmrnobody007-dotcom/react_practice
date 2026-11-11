import { useState } from 'react';
import Navbar from './components/Navbar';
import Pizza from './pages/Pizza';
import PizzaBuilder from './pages/PizzaBuilder';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(pizza) {
    setCartItems((prev) => [...prev, { ...pizza, id: Date.now() }]);
    setCurrentPage('cart');
  }

  const cartTotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="app-container">
      <Navbar onNavigate={(page) => setCurrentPage(page)} cartCount={cartItems.length} />

      {/* Pass a function to Pizza so the start button switches to 'build' */}
      {currentPage === 'home' && (
        <Pizza onStart={() => setCurrentPage('build')} />
      )}

      {currentPage === 'build' && (
        <PizzaBuilder onAddToCart={handleAddToCart} />
      )}

      {currentPage === 'cart' && (
        <div className="cart-page">
          <div className="cart-card">
            <h2>your cart</h2>
            {cartItems.length === 0 ? (
              <>
                <p className="cart-empty">your cart is empty.</p>
                <button
                  type="button"
                  className="cart-action-btn"
                  onClick={() => setCurrentPage('build')}
                >
                  build pizza →
                </button>
              </>
            ) : (
              <>
                <ul className="cart-items">
                  {cartItems.map((item) => (
                    <li key={item.id} className="cart-item">
                      <div className="cart-item-left">
                        <img src={item.crust.image} alt={item.crust.name} className="cart-item-img" />
                        <div>
                          <p className="cart-item-title">
                            {item.crust.name} + {item.sauce.name}
                          </p>
                          <p className="cart-item-meta">
                            {item.toppings.length > 0
                              ? item.toppings.map((t) => t.name).join(', ')
                              : 'no extra toppings'}
                          </p>
                        </div>
                      </div>
                      <span className="cart-item-price">₹{item.totalPrice}</span>
                    </li>
                  ))}
                </ul>
                <div className="cart-total-row">
                  <span>total</span>
                  <span>₹{cartTotal}</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
