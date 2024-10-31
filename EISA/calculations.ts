import { OnboardingData, ENERGY_CONSTANTS, CO2_PER_KWH } from '../types';

export const calculateDailyEnergy = (usage: OnboardingData['usage']): number => {
  const total = Object.entries(usage).reduce((total, [device, hours]) => {
    return total + (ENERGY_CONSTANTS[device as keyof typeof ENERGY_CONSTANTS] * hours);
  }, 0);
  return Number(total.toFixed(2));
};

export const calculateSustainabilityScore = (usage: OnboardingData['usage']): number => {
  const dailyEnergy = calculateDailyEnergy(usage);
  const baselineEnergy = 30;
  const score = 100 - ((dailyEnergy / baselineEnergy) * 100);
  return Number(Math.max(0, Math.min(100, score)).toFixed(2));
};

export const calculateCarbonFootprint = (usage: OnboardingData['usage']): number => {
  const dailyEnergy = calculateDailyEnergy(usage);
  return Number((dailyEnergy * CO2_PER_KWH).toFixed(2));
};

export const calculateEnergySavings = (usage: OnboardingData['usage']): number => {
  const dailyEnergy = calculateDailyEnergy(usage);
  const baselineEnergy = 30;
  return Number(Math.max(0, baselineEnergy - dailyEnergy).toFixed(2));
};

export const generatePersonalizedFeedback = (usage: OnboardingData['usage']): string[] => {
  const feedback: string[] = [];
  
  // AC usage feedback
  if (usage.ac > 8) {
    feedback.push('Consider reducing AC usage by setting a higher temperature. Every degree increase saves about 3% energy.');
  }
  
  // Lighting feedback
  if (usage.lights > 12) {
    feedback.push('Switch to LED bulbs and use natural light when possible to reduce lighting energy consumption.');
  }
  
  // Transportation feedback
  if (usage.vehicles > 2) {
    feedback.push('Try carpooling or using public transport to reduce your carbon footprint from transportation.');
  }
  
  // Device usage feedback
  const totalScreenTime = usage.mobile + usage.computers;
  if (totalScreenTime > 12) {
    feedback.push('Consider taking regular breaks from devices to reduce energy consumption and eye strain.');
  }
  
  return feedback;
};