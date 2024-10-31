export interface SustainabilityMetrics {
    score: number;
    energySaved: number;
    carbonFootprint: number;
    dailyImpact: number;
  }
  
  export interface UserProfile {
    name: string;
    email: string;
    sustainabilityScore: number;
    badges: string[];
    streakDays: number;
  }
  
  export interface UsageData {
    date: string;
    ac: number;
    lights: number;
    fans: number;
    vehicles: number;
    mobile: number;
    computers: number;
  }
  
  export interface EcoTip {
    id: string;
    category: 'energy' | 'water' | 'transportation' | 'waste';
    title: string;
    description: string;
    potentialSavings: string;
    environmentalImpact: string;
  }
  
  export interface OnboardingData {
    name: string;
    email: string;
    usage: {
      fans: number;
      ac: number;
      lights: number;
      vehicles: number;
      mobile: number;
      computers: number;
    };
  }
  
  // Energy consumption constants (kWh per hour)
  export const ENERGY_CONSTANTS = {
    fans: 0.06,
    ac: 1.5,
    lights: 0.06,
    vehicles: 2.5,
    mobile: 0.005,
    computers: 0.1,
  } as const;
  
  // CO2 emissions per kWh (kg)
  export const CO2_PER_KWH = 0.42;