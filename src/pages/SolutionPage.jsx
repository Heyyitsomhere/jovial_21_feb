import './SolutionPage.css';

/**
 * Generic Solution Page Component
 * - Used for STP, ETP, WTP, RO pages
 * - Displays title, intro, features, applications, and benefits
 */
function SolutionPage({ solutionData }) {
  return (
    <div className="solution-page">
      <div className="solution-hero">
        <div className="container">
          <h1>{solutionData.title}</h1>
          <p className="solution-hero-subtitle">{solutionData.subtitle}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="solution-intro">
            <p>{solutionData.intro}</p>
          </div>
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <ul className="features-list">
            {solutionData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section applications-section">
        <div className="container">
          <h2 className="section-title">Applications</h2>
          <div className="applications-grid">
            {solutionData.applications.map((application, index) => (
              <div key={index} className="application-item">
                {application}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <h2 className="section-title">Benefits</h2>
          <div className="benefits-grid">
            {solutionData.benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolutionPage;

