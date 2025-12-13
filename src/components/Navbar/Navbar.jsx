import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

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

  // Handle scroll effect - change navbar style when scrolled past 80px
  // Uses useState and useEffect as per typical React navbar scroll examples
  useEffect(() => {
    const handleScroll = () => {
      // Toggle scrolled state when user scrolls past 80px
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup: remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Check if we're on the About page
  const isAboutPage = location.pathname === '/about';

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isAboutPage ? 'navbar-about' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Jovial Water Technologies</span>
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

