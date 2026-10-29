
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? 'text-yellow-300 font-bold'
      : 'hover:text-yellow-300 transition-colors';

  return (
    <nav className="bg-gray-600 text-white px-6 md:px-10 lg:px-20 py-5">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">OMICAB</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <NavLink to="/services" className={linkStyle}>
            Services
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>

        {/* Desktop Shop Button */}
        <div className="hidden lg:block">
          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md transition-colors">
            Shop Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-3xl focus:outline-none"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden flex flex-col gap-5 mt-6 pb-2"
        >
          <NavLink
            to="/"
            className={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md w-full sm:w-fit transition-colors">
            Shop Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
