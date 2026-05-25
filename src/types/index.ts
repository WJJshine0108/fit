export interface UserInfo {
  id: string;
  height: number;
  weight: number;
  age: number;
  gender: 'male' | 'female';
  createdAt: string;
}

export interface Muscle {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  location: string;
  function: string;
  image: string;
  group: string;
}

export interface Exercise {
  id: string;
  muscleId: string;
  name: string;
  description: string;
  instructions: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  videoUrl: string;
  sets: number;
  reps: number;
}

export interface MuscleGroup {
  id: string;
  name: string;
}