import SolutionPage from '../SolutionPage';

/**
 * Reverse Osmosis Page
 */
function ReverseOsmosis() {
  const solutionData = {
    title: 'Reverse Osmosis',
    subtitle: 'Advanced RO systems for pure water production',
    intro: 'Our Reverse Osmosis (RO) systems utilize semi-permeable membrane technology to remove dissolved salts, minerals, and contaminants from water. We provide RO systems for various applications, from small-scale domestic units to large industrial installations.',
    features: [
      'High-quality RO membranes',
      'Multi-stage filtration',
      'Automated operation',
      'Energy recovery systems',
      'Low maintenance requirements',
      'Compact design',
      'Customizable configurations',
      'Expert installation and support'
    ],
    applications: [
      'Drinking water treatment',
      'Industrial process water',
      'Pharmaceutical water',
      'Food and beverage industry',
      'Boiler feed water',
      'Cooling tower makeup',
      'Desalination',
      'Wastewater reuse'
    ],
    benefits: [
      {
        title: 'Pure Water Quality',
        description: 'Produces high-purity water by removing up to 99% of dissolved salts and contaminants.'
      },
      {
        title: 'Cost Effective',
        description: 'Lower operating costs compared to traditional water treatment methods.'
      },
      {
        title: 'Versatile Applications',
        description: 'Suitable for various industries and water treatment requirements.'
      },
      {
        title: 'Reliable Performance',
        description: 'Consistent water quality with automated operation and monitoring.'
      }
    ]
  };

  return <SolutionPage solutionData={solutionData} />;
}

export default ReverseOsmosis;

