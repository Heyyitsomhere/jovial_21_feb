import { Link } from 'react-router-dom';
import './Projects.css';

/**
 * Services Page Component
 * - Displays all key services offered by the company
 * - Each service card links to its dedicated service page
 */
function Services() {
  // Service data - the four key services
  const services = [
    {
      id: 1,
      name: 'Operations and Maintenance',
      description: 'Comprehensive O&M services for optimal plant performance',
      route: '/services/operations-maintenance'
    },
    {
      id: 2,
      name: 'Annual Maintenance Contract',
      description: 'Comprehensive AMC services for reliable plant operation',
      route: '/services/annual-maintenance-contract'
    },
    {
      id: 3,
      name: 'Spares',
      description: 'Genuine spare parts and components for water treatment systems',
      route: '/services/spares'
    },
    {
      id: 4,
      name: 'Consumables and Chemicals',
      description: 'High-quality chemicals and consumables for water treatment',
      route: '/services/consumables-chemicals'
    }
  ];

  return (
    <div className="projects">
      <div className="projects-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="projects-hero-subtitle">
            Comprehensive support services for your water treatment systems
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="projects-intro">
            <p>
              We provide comprehensive support services to ensure your water and wastewater 
              treatment plants operate at peak efficiency. Our experienced team offers 
              maintenance, spare parts, and consumables to keep your systems running smoothly.
            </p>
          </div>
        </div>
      </section>

      <section className="section projects-gallery-section">
        <div className="container">
          <div className="projects-grid">
            {services.map((service) => (
              <Link key={service.id} to={service.route} className="service-card-link">
                <div className="project-card">
                  <div className="project-info">
                    <h3>{service.name}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;

