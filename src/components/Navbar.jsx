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
 * - Mobile: hamburger menu
 */
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  }, [location]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
          </li>
          <li className="dropdown">
            <span className="dropdown-toggle">
              Solutions
              <span className="dropdown-arrow">▼</span>
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/solutions">Overview</Link>
              </li>
              <li>
                <Link to="/solutions/stp">STP</Link>
              </li>
              <li>
                <Link to="/solutions/etp">ETP</Link>
              </li>
              <li>
                <Link to="/solutions/wtp">WTP</Link>
              </li>
              <li>
                <Link to="/solutions/ro">RO</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
              Projects
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
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/solutions">Solutions Overview</Link>
        </li>
        <li>
          <Link to="/solutions/stp">STP</Link>
        </li>
        <li>
          <Link to="/solutions/etp">ETP</Link>
        </li>
        <li>
          <Link to="/solutions/wtp">WTP</Link>
        </li>
        <li>
          <Link to="/solutions/ro">RO</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

