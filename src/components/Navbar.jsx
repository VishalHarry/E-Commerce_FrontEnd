import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/01.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';


// color-> #FB8C00
//hover->#E65100

function Navbar() {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false); // Toggle for Main Menu
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // Toggle for Sign-In/Login Menu
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false); // Toggle for Social Menu

  return (
    <header className="w-full bg-white/20 backdrop-blur-lg fixed top-0 left-0 z-50 shadow-md ">
     

      {/* Header Bottom */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-25" />
        </Link>

        {/* Desktop Main Menu */}
        <nav className="hidden md:flex items-center gap-6 font-semibold ">
          <ul className="flex gap-6 text-gray-700">
            <li>
              <Link to="/" className="hover:text-[#FB8C00]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-[#FB8C00]">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#FB8C00]">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#FB8C00]">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#FB8C00]">
                Contact
              </Link>
            </li>
          </ul>
          {/* Sign-In/Login (Visible on Full-Screen) */}
          <div className="flex gap-4 ml-6 mr-3">
            <Link to="/signup" className="text-sm font-semibold text-[#FB8C00] hover:text-[#E65100]">
              Create Account
            </Link>
            <Link to="/login" className="text-sm font-semibold text-[#FB8C00] hover:text-[#E65100]">
              Login
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggles */}
        <div className="md:hidden flex items-center gap-4 text-[#E65100]">
          {/* Main Menu Toggle */}
          <button
            onClick={() => setIsMainMenuOpen(!isMainMenuOpen)}
            className="text-[#E65100] text-2xl focus:outline-none"
          >
            {isMainMenuOpen ? '✕' : '☰'} {/* Hamburger and Cross */}
          </button>

          {/* User Menu Toggle */}
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="text-[#E65100] text-2xl focus:outline-none"
          >
            {isUserMenuOpen ? '✕' : '👤'} {/* Icon for Sign-In */}
          </button>

          {/* Social Menu Toggle */}
          <button
            onClick={() => setIsSocialMenuOpen(!isSocialMenuOpen)}
            className="text-[#E65100] text-2xl focus:outline-none"
          >
            {isSocialMenuOpen ? '✕' : '⚙️'} {/* Icon for Social Menu */}
          </button>
        </div>
      </div>

      {/* Mobile Menus */}
      {isMainMenuOpen && (
        <div className="md:hidden bg-gray-400 text-[#E65100]">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link to="/" className="hover:" onClick={() => setIsMainMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-[#E65100]" onClick={() => setIsMainMenuOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#E65100]" onClick={() => setIsMainMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#E65100]" onClick={() => setIsMainMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#E65100]" onClick={() => setIsMainMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      {isUserMenuOpen && (
        <div className="md:hidden bg-gray-400 text-white">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link to="/signup" className="hover:text-gray-300" onClick={() => setIsUserMenuOpen(false)}>
                Create Account
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-300" onClick={() => setIsUserMenuOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}

      {isSocialMenuOpen && (
        <div className="md:hidden bg-green-500 text-white">
   <ul className="flex items-center justify-center gap-4 py-4">
  <li>
    <Link to="#" className="text-blue-600 text-2xl hover:text-gray-300">
      <FontAwesomeIcon icon={faFacebookF} />
    </Link>
  </li>
  <li>
    <Link to="#" className="text-blue-400 text-2xl hover:text-gray-300">
      <FontAwesomeIcon icon={faTwitter} />
    </Link>
  </li>
  <li>
    <Link to="https://www.linkedin.com/in/vishal-tomar-687a96250/" className="text-pink-500 text-2xl hover:text-gray-300">
      <FontAwesomeIcon icon={faInstagram} />
    </Link>
  </li>
  <li>
    <Link to="#" className="text-red-500 text-2xl hover:text-gray-300">
      <FontAwesomeIcon icon={faPinterestP} />
    </Link>
  </li>
</ul>


        </div>
      )}
    </header>
  );
}

export default Navbar;
