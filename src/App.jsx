import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import STP from './pages/STP';
import ETP from './pages/ETP';
import WTP from './pages/WTP';
import RO from './pages/RO';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

/**
 * Main App Component
 * - Sets up React Router with all routes
 * - Includes Navbar and Footer on all pages
 * - Routes to different pages based on URL
 */
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar appears on all pages */}
        <Navbar />
        
        {/* Main content area - different pages based on route */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/stp" element={<STP />} />
            <Route path="/solutions/etp" element={<ETP />} />
            <Route path="/solutions/wtp" element={<WTP />} />
            <Route path="/solutions/ro" element={<RO />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
