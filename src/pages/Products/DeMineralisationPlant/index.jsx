import SolutionPage from '../SolutionPage';

/**
 * De Mineralisation Plant Page
 */
function DeMineralisationPlant() {
  const solutionData = {
    title: 'De Mineralisation Plant',
    subtitle: 'Ion exchange technology for demineralized water production',
    intro: 'Our De Mineralisation (DM) Plants use ion exchange technology to remove dissolved minerals and salts from water, producing high-purity demineralized water suitable for various industrial applications.',
    features: [
      'Ion exchange resin technology',
      'Two-bed or mixed-bed systems',
      'Automated regeneration',
      'High-quality demineralized water',
      'Low operating costs',
      'Easy maintenance',
      'Customizable capacity',
      'Reliable performance'
    ],
    applications: [
      'Boiler feed water',
      'Cooling tower makeup',
      'Pharmaceutical industry',
      'Chemical processing',
      'Power generation',
      'Laboratory water',
      'Electronics manufacturing',
      'Food and beverage industry'
    ],
    benefits: [
      {
        title: 'High Purity Water',
        description: 'Produces demineralized water with very low TDS and conductivity.'
      },
      {
        title: 'Cost Effective',
        description: 'Efficient ion exchange process with economical operation.'
      },
      {
        title: 'Reliable Operation',
        description: 'Consistent water quality with automated regeneration cycles.'
      },
      {
        title: 'Versatile Applications',
        description: 'Suitable for various industrial processes requiring pure water.'
      }
    ]
  };

  return <SolutionPage solutionData={solutionData} />;
}

export default DeMineralisationPlant;

