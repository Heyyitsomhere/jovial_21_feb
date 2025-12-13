import '../About/About.css';

/**
 * Career Page
 */
function Career() {
  return (
    <div className="about">
      <div className="about-hero">
        <div className="container">
          <h1>Career</h1>
          <p className="about-hero-subtitle">
            Join our team and build your career with Jovial Water Technologies
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Career Opportunities</h2>
            <div className="content-block">
              <p>
                At Jovial Water Technologies, we are always looking for talented and motivated 
                individuals to join our team. We offer exciting career opportunities in various 
                fields including engineering, project management, sales, operations, and 
                technical support.
              </p>
              <p>
                If you are passionate about water treatment technology and want to be part of 
                a growing company, we would love to hear from you. Please contact us for 
                current openings and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Career;

