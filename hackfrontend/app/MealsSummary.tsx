import React from "react";

interface MealRecord {
  date: string; // ISO format: e.g., "2024-11-17"
  time: string; // 24-hour format: e.g., "14:30"
  summary: string;
  calories: number;
  health_score: number; // Scale: 0-100
  user_input: string;
}

interface MealsSummaryProps {
  meals: MealRecord[];
}

const MealsSummary: React.FC<MealsSummaryProps> = ({ meals }) => {
  return (
    <div className="w-full p-6 bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg">
      <h2 className="text-white text-2xl mb-4">Meal Summary</h2>
      <table className="w-full text-left border-collapse">
        <thead className="bg-white/10">
          <tr>
            <th className="py-2 px-4 border-b border-white/20 text-white/80">Date</th>
            <th className="py-2 px-4 border-b border-white/20 text-white/80">Time</th>
            <th className="py-2 px-4 border-b border-white/20 text-white/80">Meal Summary</th>
            <th className="py-2 px-4 border-b border-white/20 text-white/80">Calories</th>
            <th className="py-2 px-4 border-b border-white/20 text-white/80">Health Score</th>
            <th className="py-2 px-4 border-b border-white/20 text-white/80">User Input</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal, index) => (
            <tr key={index} className="hover:bg-white/10">
              <td className="py-2 px-4 border-b border-white/20 text-white/60">
                {new Date(meal.date).toLocaleDateString()}
              </td>
              <td className="py-2 px-4 border-b border-white/20 text-white/60">
                {meal.time}
              </td>
              <td className="py-2 px-4 border-b border-white/20 text-white/60">
                {meal.summary}
              </td>
              <td className="py-2 px-4 border-b border-white/20 text-white/60">
                {meal.calories}
              </td>
              <td className="py-2 px-4 border-b border-white/20 text-white/60">
                {meal.health_score}
              </td>
              <td className="py-2 px-4 border-b border-white/20 text-white/60">
                {meal.user_input}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MealsSummary;
