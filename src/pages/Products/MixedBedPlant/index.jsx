import SolutionPage from '../SolutionPage';

/**
 * Mixed Bed Plant Page
 */
function MixedBedPlant() {
  const solutionData = {
    title: 'Mixed Bed Plant',
    subtitle: 'Ultra-pure water production through mixed bed ion exchange',
    intro: 'Our Mixed Bed Plants combine cation and anion exchange resins in a single vessel to produce ultra-pure water with extremely low conductivity. Mixed bed systems are ideal for applications requiring the highest water purity levels.',
    features: [
      'Mixed cation and anion resins',
      'Ultra-low conductivity output',
      'Automated regeneration system',
      'High-quality resin materials',
      'Compact design',
      'Low maintenance',
      'Precise control systems',
      'Long resin life'
    ],
    applications: [
      'High-pressure boiler feed',
      'Pharmaceutical water',
      'Electronics manufacturing',
      'Laboratory ultrapure water',
      'Power plant steam generation',
      'Chemical processing',
      'Semiconductor industry',
      'Research facilities'
    ],
    benefits: [
      {
        title: 'Ultra-Pure Water',
        description: 'Produces water with conductivity as low as 0.1 µS/cm.'
      },
      {
        title: 'Single Vessel Design',
        description: 'Compact design with cation and anion resins in one unit.'
      },
      {
        title: 'High Efficiency',
        description: 'Efficient removal of all dissolved ions in a single pass.'
      },
      {
        title: 'Reliable Quality',
        description: 'Consistent ultra-pure water quality for critical applications.'
      }
    ]
  };

  return <SolutionPage solutionData={solutionData} />;
}

export default MixedBedPlant;

