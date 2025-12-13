import SolutionPage from '../SolutionPage';

/**
 * RO (Reverse Osmosis) Page
 */
function RO() {
  const solutionData = {
    title: 'Reverse Osmosis (RO) Plant',
    subtitle: 'High-quality water purification systems',
    intro: 'Our Reverse Osmosis (RO) plants are designed to remove impurities, contaminants, and dissolved solids from water, producing high-quality purified water. We offer RO systems suitable for various applications, from small-scale residential to large-scale industrial requirements.',
    features: [
      'Advanced membrane technology',
      'Multi-stage filtration process',
      'Pre-treatment and post-treatment systems',
      'Automated operation and control',
      'Low energy consumption',
      'High recovery rates',
      'TDS reduction up to 99%',
      'Compact and space-efficient design'
    ],
    applications: [
      'Drinking Water Purification',
      'Pharmaceutical Industry',
      'Food & Beverage Industry',
      'Boiler Feed Water',
      'Laboratories',
      'Hospitals',
      'Hotels & Restaurants',
      'Residential Complexes'
    ],
    benefits: [
      {
        title: 'Pure Water Quality',
        description: 'Produces high-purity water by removing dissolved salts, minerals, and contaminants.'
      },
      {
        title: 'Versatile Applications',
        description: 'Suitable for various applications including drinking, industrial processes, and medical use.'
      },
      {
        title: 'Cost Effective',
        description: 'Reduces costs associated with bottled water and provides continuous supply of pure water.'
      },
      {
        title: 'Health Benefits',
        description: 'Removes harmful contaminants, ensuring safe and healthy water for consumption.'
      }
    ]
  };

  return <SolutionPage solutionData={solutionData} />;
}

export default RO;

