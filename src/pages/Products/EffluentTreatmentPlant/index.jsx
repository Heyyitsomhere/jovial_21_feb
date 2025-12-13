import SolutionPage from '../SolutionPage';

/**
 * Effluent Treatment Plant Page
 */
function EffluentTreatmentPlant() {
  const solutionData = {
    title: 'Effluent Treatment Plant',
    subtitle: 'Comprehensive treatment solutions for industrial wastewater',
    intro: 'Our Effluent Treatment Plants (ETPs) are designed to treat industrial wastewater, removing contaminants and ensuring compliance with discharge standards. We provide customized ETP solutions tailored to specific industry requirements.',
    features: [
      'Multi-stage treatment processes',
      'Chemical and biological treatment',
      'Automated monitoring and control',
      'Sludge dewatering systems',
      'Compliance with pollution control norms',
      'Energy-efficient design',
      'Modular and scalable solutions',
      'Expert technical support'
    ],
    applications: [
      'Chemical Industries',
      'Pharmaceutical Companies',
      'Textile Mills',
      'Food Processing Units',
      'Paper and Pulp Industries',
      'Automotive Manufacturing',
      'Paint and Coating Industries',
      'Petrochemical Plants'
    ],
    benefits: [
      {
        title: 'Regulatory Compliance',
        description: 'Ensures compliance with CPCB and state pollution control board regulations.'
      },
      {
        title: 'Environmental Protection',
        description: 'Protects water bodies and environment from industrial pollution.'
      },
      {
        title: 'Resource Recovery',
        description: 'Enables recovery of valuable resources from wastewater.'
      },
      {
        title: 'Cost Optimization',
        description: 'Reduces disposal costs and potential penalties for non-compliance.'
      }
    ]
  };

  return <SolutionPage solutionData={solutionData} />;
}

export default EffluentTreatmentPlant;

