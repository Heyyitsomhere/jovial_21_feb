import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Products/Solutions';
import STP from './pages/Products/STP';
import ETP from './pages/Products/ETP';
import WTP from './pages/Products/WTP';
import RO from './pages/Products/RO';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// New product pages
import SewageTreatmentPlant from './pages/Products/SewageTreatmentPlant';
import EffluentTreatmentPlant from './pages/Products/EffluentTreatmentPlant';
import WaterTreatmentPlant from './pages/Products/WaterTreatmentPlant';
import UltraFiltrationSystem from './pages/Products/UltraFiltrationSystem';
import ZeroLiquidDischarge from './pages/Products/ZeroLiquidDischarge';
import ReverseOsmosis from './pages/Products/ReverseOsmosis';
import DeMineralisationPlant from './pages/Products/DeMineralisationPlant';
import MixedBedPlant from './pages/Products/MixedBedPlant';
import WaterSoftenerPlant from './pages/Products/WaterSoftenerPlant';
// New service pages
import OperationsMaintenance from './pages/Services/OperationsMaintenance';
import AnnualMaintenanceContract from './pages/Services/AnnualMaintenanceContract';
import Spares from './pages/Services/Spares';
import ConsumablesChemicals from './pages/Services/ConsumablesChemicals';
// Career page
import Career from './pages/Career';
import './styles/App.css';

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
            {/* Legacy routes - keeping for backward compatibility */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/stp" element={<STP />} />
            <Route path="/solutions/etp" element={<ETP />} />
            <Route path="/solutions/wtp" element={<WTP />} />
            <Route path="/solutions/ro" element={<RO />} />
            <Route path="/projects" element={<Projects />} />
            {/* New product routes */}
            <Route path="/products/sewage-treatment-plant" element={<SewageTreatmentPlant />} />
            <Route path="/products/effluent-treatment-plant" element={<EffluentTreatmentPlant />} />
            <Route path="/products/water-treatment-plant" element={<WaterTreatmentPlant />} />
            <Route path="/products/ultra-filtration-system" element={<UltraFiltrationSystem />} />
            <Route path="/products/zero-liquid-discharge" element={<ZeroLiquidDischarge />} />
            <Route path="/products/reverse-osmosis" element={<ReverseOsmosis />} />
            <Route path="/products/de-mineralisation-plant" element={<DeMineralisationPlant />} />
            <Route path="/products/mixed-bed-plant" element={<MixedBedPlant />} />
            <Route path="/products/water-softener-plant" element={<WaterSoftenerPlant />} />
            {/* New service routes */}
            <Route path="/services/operations-maintenance" element={<OperationsMaintenance />} />
            <Route path="/services/annual-maintenance-contract" element={<AnnualMaintenanceContract />} />
            <Route path="/services/spares" element={<Spares />} />
            <Route path="/services/consumables-chemicals" element={<ConsumablesChemicals />} />
            {/* Career route */}
            <Route path="/career" element={<Career />} />
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
