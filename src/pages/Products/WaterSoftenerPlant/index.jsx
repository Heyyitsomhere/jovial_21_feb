import SolutionPage from '../SolutionPage';

/**
 * Water Softener Plant Page
 */
function WaterSoftenerPlant() {
  const solutionData = {
    title: 'Water Softener Plant',
    subtitle: 'Ion exchange technology for hard water treatment',
    intro: 'Our Water Softener Plants use ion exchange technology to remove hardness-causing calcium and magnesium ions from water. Softened water prevents scale formation, improves efficiency, and extends equipment life.',
    features: [
      'Cation exchange resin',
      'Automated regeneration',
      'Salt-based softening',
      'High flow rates',
      'Low maintenance',
      'Compact design',
      'Easy installation',
      'Cost-effective operation'
    ],
    applications: [
      'Boiler feed water pretreatment',
      'Cooling tower makeup',
      'Laundry and cleaning',
      'Hot water systems',
      'Textile industry',
      'Food processing',
      'Hotels and hospitality',
      'Residential complexes'
    ],
    benefits: [
      {
        title: 'Scale Prevention',
        description: 'Eliminates scale formation in pipes, boilers, and equipment.'
      },
      {
        title: 'Energy Savings',
        description: 'Reduces energy consumption by preventing scale buildup.'
      },
      {
        title: 'Extended Equipment Life',
        description: 'Protects equipment from scale-related damage and corrosion.'
      },
      {
        title: 'Cost Effective',
        description: 'Low operating costs with automated regeneration cycles.'
      }
    ]
  };

  return <SolutionPage solutionData={solutionData} />;
}

export default WaterSoftenerPlant;

