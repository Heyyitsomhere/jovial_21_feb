import './About.css';

/**
 * About Page Component
 * - Company overview
 * - Vision statement
 * - Mission statement
 * - Core values
 */
function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <div className="container">
          <h1>About Jovial Water Technologies</h1>
          <p className="about-hero-subtitle">
            Leading provider of integrated water and wastewater treatment solutions
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Who We Are</h2>
            <div className="content-block">
              <p>
                Welcome to Jovial Water Technologies Pvt. Ltd., a trusted name in the realm 
                of water and wastewater treatment solutions. With a high reputation for excellence, 
                we specialize in the manufacturing and supply of top-quality Effluent Treatment 
                Plants (ETP), Sewage Treatment Plants (STP), Water Treatment Plants (WTP), 
                Reverse Osmosis (RO) plants, and related water treatment systems.
              </p>
              <p>
                We have been serving industries such as Food and Beverage, Pharmaceutical, 
                Automobile, Chemical, Paint and Coating, Education, Hospitality, Oil and Gas, 
                Textile, Pulp and Paper, and many more. Our commitment to quality, innovation, 
                and customer satisfaction has made us a preferred partner for water treatment 
                solutions across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-mission-card">
              <h2>Our Vision</h2>
              <p>
                At Jovial Water Technologies Pvt. Ltd., our vision is to be the leading provider 
                of innovative and sustainable water treatment solutions globally. We aspire to be 
                the preferred choice for clients seeking reliable and efficient ETP, STP, WTP, 
                and RO plants, delivering exceptional value through our commitment to quality, 
                integrity, and customer satisfaction.
              </p>
            </div>
            <div className="vision-mission-card">
              <h2>Our Mission</h2>
              <p>
                Our mission is to revolutionize the water treatment industry by providing innovative, 
                reliable, and sustainable solutions that exceed our clients' expectations. We are 
                dedicated to leveraging our expertise and experience to design, manufacture, and 
                deliver treatment plants that optimize resource utilization, minimize environmental 
                impact, and ensure compliance with regulatory standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Quality Excellence</h3>
              <p>
                We maintain the highest standards in manufacturing, installation, and service delivery, 
                ensuring reliable and long-lasting solutions.
              </p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>
                We continuously invest in research and development to bring cutting-edge technologies 
                and solutions to our clients.
              </p>
            </div>
            <div className="value-item">
              <h3>Environmental Responsibility</h3>
              <p>
                We are committed to environmental stewardship, helping industries reduce their 
                environmental footprint through sustainable water treatment solutions.
              </p>
            </div>
            <div className="value-item">
              <h3>Customer Focus</h3>
              <p>
                Our customers are at the heart of everything we do. We strive to understand their 
                needs and deliver solutions that exceed expectations.
              </p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>
                We conduct our business with honesty, transparency, and ethical practices, building 
                trust with our clients and partners.
              </p>
            </div>
            <div className="value-item">
              <h3>Team Excellence</h3>
              <p>
                Our certified engineers and skilled professionals work together to deliver excellence 
                in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

