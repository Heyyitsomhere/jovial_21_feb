import SolutionPage from '../SolutionPage';

/**
 * ETP (Effluent Treatment Plant) Page
 */
function ETP() {
  const solutionData = {
    title: 'Effluent Treatment Plant (ETP)',
    subtitle: 'Customized solutions for industrial wastewater treatment',
    intro: 'Our Effluent Treatment Plants (ETPs) are meticulously designed to effectively treat industrial effluents, ensuring compliance with environmental regulations. We provide customized ETP solutions tailored to meet specific industry requirements and wastewater characteristics.',
    features: [
      'Customized design for specific industries',
      'Multi-stage treatment processes',
      'Chemical and biological treatment options',
      'Advanced filtration systems',
      'Real-time monitoring and control',
      'Automated pH and chemical dosing',
      'Sludge dewatering systems',
      'Zero liquid discharge (ZLD) options'
    ],
    applications: [
      'Pharmaceutical Industry',
      'Textile Industry',
      'Chemical Industry',
      'Food & Beverage',
      'Paint & Coating',
      'Automobile Manufacturing',
      'Paper & Pulp',
      'Leather Industry'
    ],
    benefits: [
      {
        title: 'Regulatory Compliance',
        description: 'Ensures compliance with pollution control board regulations and environmental standards.'
      },
      {
        title: 'Customized Solutions',
        description: 'Tailored designs to handle specific industrial wastewater characteristics and requirements.'
      },
      {
        title: 'Resource Recovery',
        description: 'Enables recovery and reuse of treated water, reducing freshwater consumption.'
      },
      {
        title: 'Environmental Protection',
        description: 'Protects water bodies and environment from industrial pollution and contamination.'
      }
    ]
  };

  return <SolutionPage solutionData={solutionData} />;
}

export default ETP;

