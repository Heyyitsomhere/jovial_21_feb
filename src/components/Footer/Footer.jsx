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
              <Link to="/products/sewage-treatment-plant">Our Products</Link>
            </li>
            <li>
              <Link to="/services/operations-maintenance">Services</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="footer-section">
          <h4>Our Products</h4>
          <ul className="footer-links">
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
              <Link to="/products/reverse-osmosis">Reverse Osmosis</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="footer-contact">
            <p>
              <strong>Address:</strong><br />
              36 South Anarkali<br />
              Som Bazar Main Road ,Krishna Nagar<br />
              Delhi= 110051
            </p>
            <p>
              <strong>Phone:</strong><br />
              +91-9217148601
            </p>
            <p>
              <strong>Email:</strong><br />
              Jovialwater@outlook.com
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

