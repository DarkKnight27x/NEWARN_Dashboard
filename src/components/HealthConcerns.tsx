import React from 'react';
import { Activity, TrendingUp, TrendingDown } from 'lucide-react';
import { HealthConcern } from '../types/dashboard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

interface HealthConcernsProps {
  concerns: HealthConcern[];
}

const HealthConcerns: React.FC<HealthConcernsProps> = ({ concerns }) => {
  const getPriorityColor = (priority: HealthConcern['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'medium':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'low':
        return 'text-green-600 bg-green-50 border-green-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Priority Health Concerns</h3>
        <Activity className="h-6 w-6 text-blue-600" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {concerns.map((concern) => (
          <div
            key={concern.id}
            className={`border rounded-lg p-4 ${getPriorityColor(concern.priority)}`}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">{concern.name}</h4>
              <span className="text-xs px-2 py-1 rounded-full bg-white capitalize">
                {concern.priority}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{concern.cases}</div>
                <div className="text-xs">active cases</div>
              </div>
              <div className="flex items-center space-x-1">
                {concern.trend > 0 ? (
                  <TrendingUp className="h-4 w-4 text-red-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-green-500" />
                )}
                <span
                  className={`text-sm font-medium ${
                    concern.trend > 0 ? 'text-red-600' : 'text-green-600'
                  }`}
                >
                  {concern.trend > 0 ? '+' : ''}{concern.trend}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={concerns}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" fontSize={12} />
            <YAxis fontSize={12} />
            <Bar dataKey="cases" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HealthConcerns;