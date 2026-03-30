export type TabType = 'dashboard' | 'progress' | 'goals' | 'exercise' | 'nutrition' | 'hydration' | 'profile';

export interface WeightData {
  day: string;
  weight: number;
}

export interface HydrationLog {
  id: string;
  type: string;
  amount: number;
  time: string;
}

export interface NutritionData {
  day: string;
  calories: number;
  target: number;
}
