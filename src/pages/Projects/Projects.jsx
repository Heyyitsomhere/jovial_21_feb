import './Projects.css';

/**
 * Projects Page Component
 * - Responsive gallery of project cards
 * - Placeholder images and project information
 */
function Projects() {
  // Sample project data - in real app, this would come from an API or database
  const projects = [
    {
      id: 1,
      title: 'Industrial ETP Project - Delhi',
      type: 'ETP Plant',
      capacity: '500 KLD',
      industry: 'Pharmaceutical'
    },
    {
      id: 2,
      title: 'Residential STP Project - Mumbai',
      type: 'STP Plant',
      capacity: '200 KLD',
      industry: 'Residential'
    },
    {
      id: 3,
      title: 'Commercial RO Plant - Bangalore',
      type: 'RO Plant',
      capacity: '1000 LPH',
      industry: 'Hospitality'
    },
    {
      id: 4,
      title: 'Municipal WTP Project - Chennai',
      type: 'WTP Plant',
      capacity: '1000 KLD',
      industry: 'Municipal'
    },
    {
      id: 5,
      title: 'Textile Industry ETP - Surat',
      type: 'ETP Plant',
      capacity: '800 KLD',
      industry: 'Textile'
    },
    {
      id: 6,
      title: 'Hospital STP Project - Pune',
      type: 'STP Plant',
      capacity: '150 KLD',
      industry: 'Healthcare'
    },
    {
      id: 7,
      title: 'Food Processing WTP - Hyderabad',
      type: 'WTP Plant',
      capacity: '300 KLD',
      industry: 'Food & Beverage'
    },
    {
      id: 8,
      title: 'Automobile Industry RO - Gurgaon',
      type: 'RO Plant',
      capacity: '2000 LPH',
      industry: 'Automobile'
    },
    {
      id: 9,
      title: 'Educational Institution STP - Kolkata',
      type: 'STP Plant',
      capacity: '100 KLD',
      industry: 'Education'
    }
  ];

  return (
    <div className="projects">
      <div className="projects-hero">
        <div className="container">
          <h1>Our Projects</h1>
          <p className="projects-hero-subtitle">
            Delivering successful water treatment solutions across India
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="projects-intro">
            <p>
              We have successfully completed numerous water and wastewater treatment projects 
              across various industries and regions in India. Our projects demonstrate our 
              commitment to quality, innovation, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="section projects-gallery-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image-placeholder">
                  <span>{project.type}</span>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <div className="project-details">
                    <p><strong>Type:</strong> {project.type}</p>
                    <p><strong>Capacity:</strong> {project.capacity}</p>
                    <p><strong>Industry:</strong> {project.industry}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h2>1800+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h2>475+</h2>
              <p>STP Plants</p>
            </div>
            <div className="stat-item">
              <h2>750+</h2>
              <p>ETP Plants</p>
            </div>
            <div className="stat-item">
              <h2>395+</h2>
              <p>RO Plants</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;

