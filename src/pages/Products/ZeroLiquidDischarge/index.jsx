import SolutionPage from '../SolutionPage';

/**
 * Zero Liquid Discharge Page
 */
function ZeroLiquidDischarge() {
  const solutionData = {
    title: 'Zero Liquid Discharge',
    subtitle: 'Complete water recovery and zero discharge solutions',
    intro: 'Our Zero Liquid Discharge (ZLD) systems ensure complete recovery of water from wastewater, leaving zero liquid discharge. ZLD systems combine multiple treatment technologies to achieve maximum water recovery and minimize environmental impact.',
    features: [
      'Complete water recovery',
      'Multi-stage evaporation',
      'Crystallization technology',
      'Energy-efficient design',
      'Automated control systems',
      'Compliance with zero discharge norms',
      'Recovery of valuable salts',
      'Minimal waste generation'
    ],
    applications: [
      'Textile Industries',
      'Chemical Manufacturing',
      'Pharmaceutical Plants',
      'Power Plants',
      'Mining Operations',
      'Food Processing',
      'Paper Industries',
      'Regions with strict discharge regulations'
    ],
    benefits: [
      {
        title: 'Zero Discharge',
        description: 'Complete elimination of liquid discharge, ensuring environmental compliance.'
      },
      {
        title: 'Water Conservation',
        description: 'Maximum water recovery reduces freshwater consumption significantly.'
      },
      {
        title: 'Resource Recovery',
        description: 'Recovery of valuable salts and chemicals from wastewater.'
      },
      {
        title: 'Regulatory Compliance',
        description: 'Meets strict environmental regulations and discharge standards.'
      }
    ]
  };

  return <SolutionPage solutionData={solutionData} />;
}

export default ZeroLiquidDischarge;

