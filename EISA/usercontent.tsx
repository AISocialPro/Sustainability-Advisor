import React, { createContext, useContext, useState } from 'react';
import { OnboardingData, SustainabilityMetrics, UserProfile } from '../types';
import { 
  calculateSustainabilityScore, 
  calculateCarbonFootprint, 
  calculateEnergySavings 
} from '../utils/calculations';

interface UserContextType {
  isOnboarded: boolean;
  profile: UserProfile | null;
  metrics: SustainabilityMetrics | null;
  completeOnboarding: (data: OnboardingData) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [metrics, setMetrics] = useState<SustainabilityMetrics | null>(null);

  const completeOnboarding = (data: OnboardingData) => {
    const sustainabilityScore = calculateSustainabilityScore(data.usage);
    const carbonFootprint = calculateCarbonFootprint(data.usage);
    const energySaved = calculateEnergySavings(data.usage);

    setProfile({
      name: data.name,
      email: data.email,
      sustainabilityScore,
      badges: [],
      streakDays: 0,
    });

    setMetrics({
      score: sustainabilityScore,
      energySaved,
      carbonFootprint,
      dailyImpact: energySaved * 0.42, // CO2 saved
    });

    setIsOnboarded(true);
  };

  return (
    <UserContext.Provider value={{ isOnboarded, profile, metrics, completeOnboarding }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};