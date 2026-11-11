import { useState } from 'react';
import Navbar from './components/Navbar';
import Pizza from './pages/Pizza';
import CrustSelector from './components/CrustSelector';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartCount] = useState(0);

  return (
    <div className="app-container">
      <Navbar onNavigate={(page) => setCurrentPage(page)} cartCount={cartCount} />

      {/* Pass a function to Pizza so the start button switches to 'build' */}
      {currentPage === 'home' && (
        <Pizza onStart={() => setCurrentPage('build')} />
      )}

      {currentPage === 'build' && (
        <CrustSelector />
      )}

      {currentPage === 'cart' && (
        <div className="cart-page">
          <h2>Your Cart</h2>
          <p>{cartCount === 0 ? 'Your cart is empty.' : `${cartCount} item(s) in cart.`}</p>
        </div>
      )}
    </div>
  );
}
