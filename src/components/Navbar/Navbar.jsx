import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo_2.png';
import './Navbar.css';

// Logo URL - placeholder from free icon service (easy to replace later)
// const LOGO_URL = 'https://cdn-icons-png.flaticon.com/512/2933/2933245.png';
const LOGO_URL = logo;

/**
 * Navbar Component
 * - Fixed at the top, full-width
 * - Transparent/semi-transparent background on home page hero
 * - Changes to solid background when scrolled (scrollY > 80)
 * - Smooth transitions for background, padding, and shadow
 * - Desktop: logo left, menu right
 * - Mobile: hamburger menu with dropdowns
 */
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const location = useLocation();


  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [location]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setOpenMobileDropdown(null);
    }
  };

  // Toggle mobile dropdown
  const toggleMobileDropdown = (dropdownName) => {
    setOpenMobileDropdown(openMobileDropdown === dropdownName ? null : dropdownName);
  };

  // Check if we're on the Home page (keeps current behavior)
  const isHomePage = location.pathname === '/';
  
  // Check if we're on pages that should have the same navbar behavior as About page
  // These pages: About, Products (and subroutes), Services (and subroutes), Career, Contact
  const shouldUseAboutNavbarStyle = 
    location.pathname === '/about' ||
    location.pathname.startsWith('/products') ||
    location.pathname.startsWith('/services') ||
    location.pathname === '/career' ||
    location.pathname === '/contact';

  // Disable scroll behavior on pages that use About-style navbar
  // These pages should always have solid background (no scroll transitions)
  useEffect(() => {
    if (shouldUseAboutNavbarStyle) {
      // Set scrolled to false and disable scroll listener for About-style pages
      setIsScrolled(false);
      return; // Don't add scroll listener
    }

    // Only add scroll listener on Home page
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldUseAboutNavbarStyle]);

  return (
    <nav className={`navbar ${isScrolled && !shouldUseAboutNavbarStyle ? 'navbar-scrolled' : ''} ${shouldUseAboutNavbarStyle ? 'navbar-about' : ''} ${isHomePage ? 'navbar-home' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Jovial Water Technologies Logo" className="navbar-logo-img" />
          <div className="navbar-brand-text">
            <span className="brand-name-top">JOVIAL</span>
            <span className="brand-name-bottom">Water Technologies</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="navbar-menu">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li className="dropdown">
            <span className="dropdown-toggle">
              About
              <span className="dropdown-arrow">▼</span>
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/about">Company Overview</Link>
              </li>
              <li>
                <Link to="/about#vision">Vision & Mission</Link>
              </li>
              <li>
                <Link to="/about#values">Our Values</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <span className="dropdown-toggle">
              Our Products
              <span className="dropdown-arrow">▼</span>
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/products">All Products</Link>
              </li>
              <li>
                <Link to="/products/sewage-treatment-plant">Sewage Treatment Plant</Link>
              </li>
              <li>
                <Link to="/products/effluent-treatment-plant">Effluent Treatment Plant</Link>
              </li>
              <li>
                <Link to="/products/mixed-bed-plant">Water Treatment Plant</Link>
              </li>
              <li>
                <Link to="/products/ultra-filtration-system">Ultra Filtration System</Link>
              </li>
              <li>
                <Link to="/products/zero-liquid-discharge">Zero Liquid Discharge</Link>
              </li>
              <li>
                <Link to="/products/reverse-osmosis">Reverse Osmosis</Link>
              </li>
              <li>
                <Link to="/products/de-mineralisation-plant">De Mineralisation Plant</Link>
              </li>
              <li>
                <Link to="/products/mixed-bed-plant">Mixed Bed Plant</Link>
              </li>
              <li>
                <Link to="/products/water-softener-plant">Water Softener Plant</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <span className="dropdown-toggle">
              Services
              <span className="dropdown-arrow">▼</span>
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/services/operations-maintenance">Operations and Maintenance</Link>
              </li>
              <li>
                <Link to="/services/annual-maintenance-contract">Annual Maintenance Contract</Link>
              </li>
              <li>
                <Link to="/services/spares">Spares</Link>
              </li>
              <li>
                <Link to="/services/consumables-chemicals">Consumables and Chemicals</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/career" className={location.pathname === '/career' ? 'active' : ''}>
              Career
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="mobile-dropdown">
          <span 
            className="mobile-dropdown-toggle"
            onClick={() => toggleMobileDropdown('about')}
          >
            About
            <span className={`mobile-dropdown-arrow ${openMobileDropdown === 'about' ? 'open' : ''}`}>▼</span>
          </span>
          <ul className={`mobile-dropdown-menu ${openMobileDropdown === 'about' ? 'open' : ''}`}>
            <li>
              <Link to="/about">Company Overview</Link>
            </li>
            <li>
              <Link to="/about#vision">Vision & Mission</Link>
            </li>
            <li>
              <Link to="/about#values">Our Values</Link>
            </li>
          </ul>
        </li>
        <li className="mobile-dropdown">
          <span 
            className="mobile-dropdown-toggle"
            onClick={() => toggleMobileDropdown('products')}
          >
            Our Products
            <span className={`mobile-dropdown-arrow ${openMobileDropdown === 'products' ? 'open' : ''}`}>▼</span>
          </span>
          <ul className={`mobile-dropdown-menu ${openMobileDropdown === 'products' ? 'open' : ''}`}>
            <li>
              <Link to="/products">All Products</Link>
            </li>
            <li>
              <Link to="/products/sewage-treatment-plant">Sewage Treatment Plant</Link>
            </li>
            <li>
              <Link to="/products/effluent-treatment-plant">Effluent Treatment Plant</Link>
            </li>
            <li>
              <Link to="/products/ultra-filtration-system">Ultra Filtration System</Link>
            </li>
            <li>
              <Link to="/products/zero-liquid-discharge">Zero Liquid Discharge</Link>
            </li>
            <li>
              <Link to="/products/reverse-osmosis">Reverse Osmosis</Link>
            </li>
            <li>
              <Link to="/products/de-mineralisation-plant">De Mineralisation Plant</Link>
            </li>
            <li>
              <Link to="/products/mixed-bed-plant">Mixed Bed Plant</Link>
            </li>
            <li>
              <Link to="/products/water-softener-plant">Water Softener Plant</Link>
            </li>
          </ul>
        </li>
        <li className="mobile-dropdown">
          <span 
            className="mobile-dropdown-toggle"
            onClick={() => toggleMobileDropdown('services')}
          >
            Services
            <span className={`mobile-dropdown-arrow ${openMobileDropdown === 'services' ? 'open' : ''}`}>▼</span>
          </span>
          <ul className={`mobile-dropdown-menu ${openMobileDropdown === 'services' ? 'open' : ''}`}>
            <li>
              <Link to="/services/operations-maintenance">Operations and Maintenance</Link>
            </li>
            <li>
              <Link to="/services/annual-maintenance-contract">Annual Maintenance Contract</Link>
            </li>
            <li>
              <Link to="/services/spares">Spares</Link>
            </li>
            <li>
              <Link to="/services/consumables-chemicals">Consumables and Chemicals</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

