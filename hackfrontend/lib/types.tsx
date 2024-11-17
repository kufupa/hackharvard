export interface Alert {
  datetime: Date;
  description: string;
  severity: 'Low' | 'Medium' | 'High';
}

export interface Patient {
  user_id: number;
  phone_number: string;
  name: string;
  health_goal: string;
  created_at: Date;
  meals: { meal_id: number; user_id: number; timestamp: Date; meal_name: string; image_url: string; estimated_calories: number; glycemic_index: number; health_rating: number; created_at: Date; }[]
  ;
}
