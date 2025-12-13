import { Link } from 'react-router-dom';
import './Solutions.css';

/**
 * Solutions Overview Page
 * - Introduction to all solutions
 * - Cards linking to individual solution pages
 */
function Solutions() {
  const solutions = [
    {
      id: 'stp',
      title: 'Sewage Treatment Plant (STP)',
      description: 'Advanced STP systems for treating domestic and commercial sewage, ensuring compliance with environmental standards.',
      icon: '💧',
      link: '/solutions/stp'
    },
    {
      id: 'etp',
      title: 'Effluent Treatment Plant (ETP)',
      description: 'Customized ETP solutions for industrial wastewater treatment, designed to meet specific industry requirements.',
      icon: '🏭',
      link: '/solutions/etp'
    },
    {
      id: 'wtp',
      title: 'Water Treatment Plant (WTP)',
      description: 'Complete water treatment solutions for potable water supply, ensuring safe and clean water for communities.',
      icon: '🚰',
      link: '/solutions/wtp'
    },
    {
      id: 'ro',
      title: 'Reverse Osmosis (RO)',
      description: 'High-quality RO systems for water purification, removing impurities and dissolved solids to produce pure water.',
      icon: '🔬',
      link: '/solutions/ro'
    }
  ];

  return (
    <div className="solutions">
      <div className="solutions-hero">
        <div className="container">
          <h1>Our Solutions</h1>
          <p className="solutions-hero-subtitle">
            Comprehensive water and wastewater treatment solutions for all your needs
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="solutions-intro">
            <p>
              At Jovial Water Technologies, we offer a comprehensive range of water and 
              wastewater treatment solutions designed to meet the diverse needs of industries 
              and communities. Our solutions are engineered for efficiency, reliability, and 
              environmental compliance.
            </p>
            <p>
              Whether you need to treat sewage, industrial effluent, or require clean potable 
              water, we have the expertise and technology to deliver the right solution for your 
              specific requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section solutions-grid-section">
        <div className="container">
          <div className="solutions-grid">
            {solutions.map((solution) => (
              <div key={solution.id} className="solution-card">
                <div className="solution-icon">{solution.icon}</div>
                <h2>{solution.title}</h2>
                <p>{solution.description}</p>
                <Link to={solution.link} className="btn-primary">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;

