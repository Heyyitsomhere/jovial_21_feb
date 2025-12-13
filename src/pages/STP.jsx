import SolutionPage from './SolutionPage';

/**
 * STP (Sewage Treatment Plant) Page
 */
function STP() {
  const solutionData = {
    title: 'Sewage Treatment Plant (STP)',
    subtitle: 'Advanced solutions for treating domestic and commercial sewage',
    intro: 'Our Sewage Treatment Plants (STPs) play a vital role in managing wastewater from various sources and transforming it into clean, reusable water. We design and manufacture STP systems that effectively treat sewage while ensuring compliance with environmental regulations.',
    features: [
      'Advanced biological treatment processes',
      'Automated control systems for optimal performance',
      'Compact design suitable for various spaces',
      'Energy-efficient operation',
      'Compliance with CPCB and local regulations',
      'Low maintenance requirements',
      'Odor control mechanisms',
      'Sludge management systems'
    ],
    applications: [
      'Residential Complexes',
      'Commercial Buildings',
      'Hotels & Restaurants',
      'Hospitals',
      'Educational Institutions',
      'Shopping Malls',
      'Airports',
      'Industrial Facilities'
    ],
    benefits: [
      {
        title: 'Environmental Compliance',
        description: 'Ensures compliance with environmental standards and regulations, protecting the environment.'
      },
      {
        title: 'Water Reuse',
        description: 'Treated water can be reused for non-potable purposes like gardening, flushing, and cooling.'
      },
      {
        title: 'Cost Effective',
        description: 'Reduces water consumption costs and minimizes environmental impact fees.'
      },
      {
        title: 'Sustainable Solution',
        description: 'Promotes sustainable water management practices and reduces water footprint.'
      }
    ]
  };

  return <SolutionPage solutionData={solutionData} />;
}

export default STP;

