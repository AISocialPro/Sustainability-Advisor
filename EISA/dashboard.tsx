import React from 'react';
import SustainabilityScore from '../components/dashboard/SustainabilityScore';
import UsageGraph from '../components/dashboard/UsageGraph';
import PersonalizedFeedback from '../components/dashboard/PersonalizedFeedback';
import { useUser } from '../context/UserContext';

const Dashboard = () => {
  const { metrics, profile } = useUser();

  if (!metrics || !profile) {
    return null;
  }

  const mockUsageData = [
    { date: 'Mon', ac: 6, lights: 0.5, fans: 1.5, vehicles: 4, mobile: 0.2, computers: 1 },
    { date: 'Tue', ac: 5.5, lights: 0.5, fans: 1.5, vehicles: 3.5, mobile: 0.2, computers: 1 },
    { date: 'Wed', ac: 5, lights: 0.5, fans: 1.5, vehicles: 4, mobile: 0.2, computers: 1 },
    { date: 'Thu', ac: 5.8, lights: 0.5, fans: 1.5, vehicles: 3.8, mobile: 0.2, computers: 1 },
    { date: 'Fri', ac: 6, lights: 0.5, fans: 1.5, vehicles: 4, mobile: 0.2, computers: 1 },
    { date: 'Sat', ac: 4.5, lights: 0.5, fans: 1.5, vehicles: 2, mobile: 0.2, computers: 1 },
    { date: 'Sun', ac: 4, lights: 0.5, fans: 1.5, vehicles: 2, mobile: 0.2, computers: 1 },
  ];

  const feedback = [
    "Your AC usage peaks at 6 hours/day. Try setting temperature to 24°C for optimal efficiency.",
    "Vehicle usage is high on weekdays. Consider carpooling to reduce emissions.",
    "Great job on minimal lighting usage! You're saving ₹200/month on lighting.",
    "Computer usage is efficient. Keep devices on power-saving mode when idle.",
    "Weekend energy patterns show 25% reduction - maintain these habits!"
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Energy Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SustainabilityScore metrics={metrics} />
        <UsageGraph data={mockUsageData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PersonalizedFeedback feedback={feedback} />
      </div>
    </div>
  );
};

export default Dashboard;