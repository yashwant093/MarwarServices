import { useState } from 'react';
import './Header.css';
// Sahi path se logo import kiya hai
import logo from '../assets/marwar_logo_4.png'; 

function Header({ city, setCity }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-content">

        {/* LOGO IMAGE SETTING */}
        <div className="logo-box">
          <a href="#home" onClick={closeMenu} className="logo-link">
            <img 
              src={logo} 
              alt="Marwar Services" 
              className="header-logo-img" 
            />
          </a>
        </div>

        {/* MENU BUTTON */}
        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAV */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>

          <ul className="nav-links">
            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>

          {/* DROPDOWN (FIXED DESIGN) */}
          <div className="dropdown-wrapper">
            <select
              className="city-select"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                closeMenu();
              }}
            >
              <option value="Sojat City">📍 Sojat City</option>
              <option value="Bilara">📍 Bilara</option>
            </select>
          </div>

        </nav>

      </div>
    </header>
  );
}

export default Header;