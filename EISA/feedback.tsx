import React from 'react';
import { MessageSquare } from 'lucide-react';

const Feedback = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Feedback</h1>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="h-6 w-6 text-green-600" />
          <h2 className="text-xl font-semibold">Today's Insights</h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-800">Great Progress!</h3>
            <p className="text-green-600">You've reduced your energy consumption by 15% compared to last week.</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-800">Suggestion</h3>
            <p className="text-blue-600">Reducing AC usage by 1 hour could save 5% more energy daily.</p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-medium text-purple-800">Achievement Unlocked!</h3>
            <p className="text-purple-600">You're on a 15-day streak of meeting your sustainability goals!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;