import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/**
 * Home Page Component
 * - Hero section with slider (3 images) and CTA button
 * - Key services section (STP, ETP, WTP, RO)
 * - Why Choose Us section
 * - Industries We Serve section
 * - Projects preview section
 */
function Home() {
  // Array of hero slides - each with image and title
  // Using royalty-free placeholder water/wastewater images - easy to replace later
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Wastewater Solutions'
    },
    {
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Water Sustainability'
    },
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'End-to-End Water Solutions'
    }
  ];

  // State to track current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality - changes slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 6000); // 6 second interval (between 5-7 seconds as requested)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Handle manual slide change when dot is clicked
  const handleDotClick = (index) => {
    setCurrentSlide(index);
    // Auto-slide will continue from the newly selected slide
  };

  // Handle "Enquire Now" button click - scroll to contact or navigate
  const handleEnquireClick = () => {
    // Scroll to contact section or navigate to contact page
    window.location.href = '/contact';
  };

  return (
    <div className="home">
      {/* Hero Section with Slider */}
      <section className="hero">
        {/* Background images - all rendered, only current one visible */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-background ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`
            }}
          ></div>
        ))}
        
        {/* Dark overlay for text readability - different tone per slide */}
        <div className={`hero-overlay slide-${currentSlide}`}></div>
        
        {/* Hero content */}
        <div className="hero-content">
          <h1 className="hero-title">{heroSlides[currentSlide].title}</h1>
          <p className="hero-tagline">
            Reduce, Reuse, Recycle - Transforming Waste to Resource
          </p>
          <p className="hero-description">
            Leading provider of water and wastewater treatment solutions across India. 
            We specialize in manufacturing top-quality treatment plants for industries and communities.
          </p>
          <button className="btn-primary" onClick={handleEnquireClick}>
            Enquire Now
          </button>
        </div>

        {/* Slider indicators (dots) on the right side */}
        <div className="hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Key Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Comprehensive water and wastewater treatment solutions for all your needs
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image stp-image"></div>
              <div className="service-content">
                <h3>Sewage Treatment Plant (STP)</h3>
                <p>
                  Advanced STP systems for treating domestic and commercial sewage, 
                  ensuring compliance with environmental standards.
                </p>
                
                <Link to="products/sewage-treatment-plant" className="btn-link">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image etp-image"></div>
              <div className="service-content">
                <h3>Effluent Treatment Plant (ETP)</h3>
                <p>
                  Customized ETP solutions for industrial wastewater treatment, 
                  designed to meet specific industry requirements.
                </p>
                <Link to="products/effluent-treatment-plant" className="btn-link">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image wtp-image"></div>
              <div className="service-content">
                <h3>Water Treatment Plant (WTP)</h3>
                <p>
                  Complete water treatment solutions for potable water supply, 
                  ensuring safe and clean water for communities.
                </p>
                <Link to="/products/water-treatment-plant" className="btn-link">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image ro-image"></div>
              <div className="service-content">
                <h3>Reverse Osmosis (RO)</h3>
                <p>
                  High-quality RO systems for water purification, removing impurities 
                  and dissolved solids to produce pure water.
                </p>
                <Link to="/products/reverse-osmosis" className="btn-link">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We are committed to delivering excellence in every project
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>Expert Engineering</h3>
              <p>
                Our certified engineers bring years of experience and expertise 
                to design and implement optimal solutions.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>Quality Assurance</h3>
              <p>
                We maintain the highest quality standards in manufacturing and 
                installation, ensuring reliable performance.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>Environmental Focus</h3>
              <p>
                Committed to environmental sustainability, we help industries 
                reduce their environmental impact responsibly.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>24/7 Support</h3>
              <p>
                Comprehensive after-sales support and maintenance services to 
                keep your systems running efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="section industries-section">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">
            Providing water treatment solutions across diverse industries
          </p>
          <div className="industries-grid">
            <div className="industry-item">Pharmaceuticals</div>
            <div className="industry-item">Food & Beverage</div>
            <div className="industry-item">Textile</div>
            <div className="industry-item">Automobile</div>
            <div className="industry-item">Chemical</div>
            <div className="industry-item">Hospitality</div>
            <div className="industry-item">Hospitals</div>
            <div className="industry-item">Education</div>
            <div className="industry-item">Infrastructure</div>
            <div className="industry-item">Pulp & Paper</div>
            <div className="industry-item">Paint & Coating</div>
            <div className="industry-item">Oil & Gas</div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="section projects-preview-section">
        <div className="container">
          <h2 className="section-title">Our Recent Projects</h2>
          <p className="section-subtitle">
            Delivering successful water treatment solutions across India
          </p>
          <div className="projects-preview-grid">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div key={project} className="project-preview-card">
                <div className="project-image-placeholder">
                  <span>Project {project}</span>
                </div>
                <h3>Water Treatment Project {project}</h3>
                <p>Industrial water treatment solution</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

