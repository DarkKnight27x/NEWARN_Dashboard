import React from 'react';
import { Users, TrendingUp, TrendingDown } from 'lucide-react';
import { PatientData } from '../types/dashboard';

interface PatientsCardProps {
  data: PatientData;
}

const PatientsCard: React.FC<PatientsCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Patients Today</h3>
        <Users className="h-6 w-6 text-blue-600" />
      </div>

      <div className="space-y-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600">{data.today}</div>
          <div className="text-sm text-gray-600">Total patients today</div>
        </div>

        <div className="flex items-center justify-center space-x-2">
          {data.trend === 'up' ? (
            <TrendingUp className="h-4 w-4 text-red-500" />
          ) : data.trend === 'down' ? (
            <TrendingDown className="h-4 w-4 text-green-500" />
          ) : null}
          <span
            className={`text-sm font-medium ${
              data.trend === 'up' ? 'text-red-600' : 'text-green-600'
            }`}
          >
            {data.trend === 'up' ? '+' : data.trend === 'down' ? '-' : ''}{data.percentage}%
          </span>
          <span className="text-sm text-gray-600">vs yesterday</span>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          View More Details
        </button>
      </div>
    </div>
  );
};

export default PatientsCard;