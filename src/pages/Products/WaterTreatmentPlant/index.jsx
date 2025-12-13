import SolutionPage from '../SolutionPage';

/**
 * Water Treatment Plant Page
 */
function WaterTreatmentPlant() {
  const solutionData = {
    title: 'Water Treatment Plant',
    subtitle: 'Comprehensive solutions for treating raw water to meet quality standards',
    intro: 'Our Water Treatment Plants (WTPs) are designed to treat raw water from various sources, removing impurities and contaminants to produce clean, safe water suitable for industrial and commercial use. We provide customized WTP solutions tailored to specific water quality requirements.',
    features: [
      'Multi-stage filtration processes',
      'Chemical treatment systems',
      'Automated monitoring and control',
      'Compact and modular design',
      'Compliance with water quality standards',
      'Energy-efficient operation',
      'Low maintenance requirements',
      'Expert technical support'
    ],
    applications: [
      'Industrial Process Water',
      'Commercial Buildings',
      'Hospitals',
      'Hotels & Resorts',
      'Educational Institutions',
      'Manufacturing Units',
      'Food & Beverage Industry',
      'Pharmaceutical Industry'
    ],
    benefits: [
      {
        title: 'Quality Assurance',
        description: 'Ensures consistent water quality meeting industry standards and requirements.'
      },
      {
        title: 'Cost Effective',
        description: 'Reduces water treatment costs and ensures reliable supply of treated water.'
      },
      {
        title: 'Customized Solutions',
        description: 'Tailored designs to meet specific water quality and capacity requirements.'
      },
      {
        title: 'Reliable Operation',
        description: 'Consistent performance with automated controls and monitoring systems.'
      }
    ]
  };

  return <SolutionPage solutionData={solutionData} />;
}

export default WaterTreatmentPlant;

