import React from 'react';
import TipCard from '../components/eco-tips/TipCard';
import { EcoTip } from '../types';

const mockTips: EcoTip[] = [
  {
    id: '1',
    category: 'energy',
    title: 'Smart Power Strip Usage',
    description: 'Use smart power strips to eliminate phantom energy consumption from devices in standby mode.',
    potentialSavings: 'Save up to 80 kWh/year',
    environmentalImpact: 'Reduce CO2 emissions by 60 kg annually',
  },
  {
    id: '2',
    category: 'water',
    title: 'Efficient Water Usage',
    description: 'Install water-efficient fixtures and fix leaks promptly to conserve water.',
    potentialSavings: 'Save up to 10,000 gallons/year',
    environmentalImpact: 'Reduce water waste and energy used for heating',
  },
  {
    id: '3',
    category: 'transportation',
    title: 'Eco-friendly Commuting',
    description: 'Consider carpooling or using public transportation to reduce your carbon footprint.',
    potentialSavings: 'Save up to $2,000/year on fuel',
    environmentalImpact: 'Reduce CO2 emissions by 2.5 tons annually',
  },
  {
    id: '4',
    category: 'energy',
    title: 'Seasonal HVAC Maintenance',
    description: 'Regular maintenance of your HVAC system can improve efficiency and reduce energy consumption.',
    potentialSavings: 'Save up to 15% on heating/cooling costs',
    environmentalImpact: 'Extend equipment life and reduce waste',
  },
  {
    id: '5',
    category: 'waste',
    title: 'Community Composting',
    description: 'Join or start a community composting program to reduce organic waste in landfills.',
    potentialSavings: 'Reduce waste by 30%',
    environmentalImpact: 'Lower methane emissions from landfills',
  },
  {
    id: '6',
    category: 'transportation',
    title: 'Electric Vehicle Transition',
    description: 'Consider switching to an electric vehicle for your next car purchase.',
    potentialSavings: 'Save up to 60% on fuel costs',
    environmentalImpact: 'Reduce transportation emissions by up to 50%',
  },
];

const EcoTips = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const categories = ['all', 'energy', 'water', 'transportation', 'waste'];
  
  const filteredTips = selectedCategory === 'all' 
    ? mockTips 
    : mockTips.filter(tip => tip.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Eco-Tips</h1>
        
        <div className="flex gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTips.map((tip) => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </div>
    </div>
  );
};

export default EcoTips;