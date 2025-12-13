import SolutionPage from '../SolutionPage';

/**
 * Ultra Filtration System Page
 */
function UltraFiltrationSystem() {
  const solutionData = {
    title: 'Ultra Filtration System',
    subtitle: 'Advanced membrane filtration technology for superior water quality',
    intro: 'Our Ultra Filtration (UF) Systems utilize advanced membrane technology to remove suspended solids, bacteria, viruses, and other contaminants from water. UF systems provide excellent pretreatment for reverse osmosis and other downstream processes.',
    features: [
      'Hollow fiber membrane technology',
      'High removal efficiency',
      'Low energy consumption',
      'Automated backwashing system',
      'Compact footprint',
      'Easy maintenance',
      'Chemical-free operation',
      'Long membrane life'
    ],
    applications: [
      'Pre-treatment for RO systems',
      'Drinking water treatment',
      'Wastewater reuse',
      'Food and beverage industry',
      'Pharmaceutical water',
      'Swimming pool filtration',
      'Industrial process water',
      'Municipal water treatment'
    ],
    benefits: [
      {
        title: 'Superior Filtration',
        description: 'Removes particles as small as 0.01 microns, ensuring high-quality water.'
      },
      {
        title: 'Cost Effective',
        description: 'Lower operating costs compared to traditional filtration methods.'
      },
      {
        title: 'Environmentally Friendly',
        description: 'Chemical-free operation reduces environmental impact.'
      },
      {
        title: 'Reliable Performance',
        description: 'Consistent water quality with minimal maintenance requirements.'
      }
    ]
  };

  return <SolutionPage solutionData={solutionData} />;
}

export default UltraFiltrationSystem;

