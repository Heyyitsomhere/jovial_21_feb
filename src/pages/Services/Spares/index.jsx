import '../../About/About.css';

/**
 * Spares Page
 */
function Spares() {
  return (
    <div className="about">
      <div className="about-hero">
        <div className="container">
          <h1>Spares</h1>
          <p className="about-hero-subtitle">
            Genuine spare parts and components for water treatment systems
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Spare Parts and Components</h2>
            <div className="content-block">
              <p>
                We provide genuine spare parts and components for all types of water and 
                wastewater treatment systems. Our extensive inventory ensures quick availability 
                of parts, minimizing downtime and ensuring continuous plant operation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Spares;

