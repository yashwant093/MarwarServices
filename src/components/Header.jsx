import { useState } from 'react';
import './Header.css';

function Header({ city, setCity }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-content">

        {/* WAPAS TEXT LOGO & TAGLINE SET KAR DIYA HAI */}
        <div className="logo-box">
          <a href="#home" onClick={closeMenu} className="logo-link">
            <h1>Marwar Services</h1>
            <p>Trusted local experts for your daily needs</p>
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

          {/* DROPDOWN */}
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