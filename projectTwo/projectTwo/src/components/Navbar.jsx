import cartIcon from '../assets/cart.png';
import '../Navbar.css';

function Navbar({ onNavigate, cartCount }) {
  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>idk</a>
      <ul className="nav-babies">
        <li>
          <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
        </li>
        <li>
          <a href="#build" onClick={(e) => { e.preventDefault(); onNavigate('build'); }}>build pizza</a>
        </li>
        <li>
          <a href="#cart" onClick={(e) => { e.preventDefault(); onNavigate('cart'); }} className="cart-link">
            <img src={cartIcon} alt="Cart" className="cart-icon" /> cart
            {/* Badge is now safely inside the link container */}
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;