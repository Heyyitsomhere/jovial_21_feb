import { Link } from 'react-router-dom';
import './Footer.css';

/**
 * Footer Component
 * - Company information
 * - Quick links
 * - Contact information
 * - Copyright notice
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-section">
          <h3>Jovial Water Technologies</h3>
          <p>
            Leading provider of integrated water and wastewater treatment solutions 
            across India. We specialize in manufacturing and supplying top-quality 
            treatment plants for industries and communities.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/solutions">Solutions</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Solutions Section */}
        <div className="footer-section">
          <h4>Our Solutions</h4>
          <ul className="footer-links">
            <li>
              <Link to="/solutions/stp">Sewage Treatment Plant</Link>
            </li>
            <li>
              <Link to="/solutions/etp">Effluent Treatment Plant</Link>
            </li>
            <li>
              <Link to="/solutions/wtp">Water Treatment Plant</Link>
            </li>
            <li>
              <Link to="/solutions/ro">Reverse Osmosis</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="footer-contact">
            <p>
              <strong>Address:</strong><br />
              Plot No. 3, 3rd Floor<br />
              100 ft Road, Ghitorni<br />
              New Delhi, India - 110030
            </p>
            <p>
              <strong>Phone:</strong><br />
              +91-8851165175
            </p>
            <p>
              <strong>Email:</strong><br />
              info@jovialwater.com
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Jovial Water Technologies Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

