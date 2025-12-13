import SolutionPage from './SolutionPage';

/**
 * WTP (Water Treatment Plant) Page
 */
function WTP() {
  const solutionData = {
    title: 'Water Treatment Plant (WTP)',
    subtitle: 'Complete solutions for potable water supply',
    intro: 'Our Water Treatment Plants (WTPs) provide complete water treatment solutions for potable water supply, ensuring safe and clean water for communities and industries. We design and manufacture WTP systems that effectively remove contaminants and produce high-quality drinking water.',
    features: [
      'Multi-stage filtration processes',
      'Coagulation and flocculation systems',
      'Sedimentation and clarification',
      'Sand and activated carbon filtration',
      'Disinfection systems (Chlorination/UV)',
      'Automated control and monitoring',
      'Scalable design for various capacities',
      'Quality assurance and testing'
    ],
    applications: [
      'Municipal Water Supply',
      'Industrial Water Supply',
      'Residential Complexes',
      'Commercial Buildings',
      'Hospitals',
      'Educational Institutions',
      'Hotels & Resorts',
      'Manufacturing Facilities'
    ],
    benefits: [
      {
        title: 'Safe Drinking Water',
        description: 'Produces safe, clean, and potable water meeting quality standards and regulations.'
      },
      {
        title: 'Health Protection',
        description: 'Removes harmful contaminants, bacteria, and viruses, protecting public health.'
      },
      {
        title: 'Reliable Supply',
        description: 'Ensures consistent and reliable supply of treated water for various applications.'
      },
      {
        title: 'Cost Efficiency',
        description: 'Optimized processes reduce operational costs while maintaining high quality standards.'
      }
    ]
  };

  return <SolutionPage solutionData={solutionData} />;
}

export default WTP;

