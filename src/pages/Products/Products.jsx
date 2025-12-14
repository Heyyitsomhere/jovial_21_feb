import { Link } from 'react-router-dom';
import './Products.css';

/**
 * Products Page Component
 * - Displays all products offered by the company
 * - Each product card links to its dedicated product details page
 */
function Products() {
  // All products data
  // Note: Image URLs are placeholder images from Unsplash - easy to replace with actual product images later
  const products = [
    {
      id: 1,
      name: 'Sewage Treatment Plant',
      description: 'Advanced STP systems for treating domestic and commercial sewage, ensuring compliance with environmental standards.',
      route: '/products/sewage-treatment-plant',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Effluent Treatment Plant',
      description: 'Customized ETP solutions for industrial wastewater treatment, designed to meet specific industry requirements.',
      route: '/products/effluent-treatment-plant',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Water Treatment Plant',
      description: 'Complete water treatment solutions for potable water supply, ensuring safe and clean water for communities.',
      route: '/products/water-treatment-plant',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Reverse Osmosis',
      description: 'High-quality RO systems for water purification, removing impurities and dissolved solids to produce pure water.',
      route: '/products/reverse-osmosis',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      name: 'Ultra Filtration System',
      description: 'Advanced membrane filtration technology for superior water quality and pretreatment for RO systems.',
      route: '/products/ultra-filtration-system',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'Zero Liquid Discharge',
      description: 'Complete water recovery and zero discharge solutions combining multiple treatment technologies.',
      route: '/products/zero-liquid-discharge',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      name: 'De Mineralisation Plant',
      description: 'Ion exchange technology for demineralized water production suitable for various industrial applications.',
      route: '/products/de-mineralisation-plant',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      name: 'Mixed Bed Plant',
      description: 'Ultra-pure water production through mixed bed ion exchange for applications requiring highest purity levels.',
      route: '/products/mixed-bed-plant',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 9,
      name: 'Water Softener Plant',
      description: 'Ion exchange technology for hard water treatment, preventing scale formation and extending equipment life.',
      route: '/products/water-softener-plant',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="products">
      <div className="products-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p className="products-hero-subtitle">
            Comprehensive water and wastewater treatment solutions for all your needs
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="products-intro">
            <p>
              We offer a comprehensive range of water and wastewater treatment solutions designed 
              to meet diverse industrial and commercial requirements. Our products are engineered 
              for reliability, efficiency, and compliance with environmental standards.
            </p>
          </div>
        </div>
      </section>

      <section className="section products-gallery-section">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <Link key={product.id} to={product.route} className="product-card-link">
                <div className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
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

export default Products;

