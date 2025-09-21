import React from 'react';
import { Building, Bed, Heart, Users } from 'lucide-react';
import { FacilityReadiness as FacilityReadinessType } from '../types/dashboard';

interface FacilityReadinessProps {
  readiness: FacilityReadinessType;
}

const FacilityReadiness: React.FC<FacilityReadinessProps> = ({ readiness }) => {
  const getReadinessColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50';
    if (score >= 60) return 'text-orange-600 bg-orange-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Facility Readiness</h3>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getReadinessColor(readiness.readinessScore)}`}>
          {readiness.readinessScore}% Ready
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <Building className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600">{readiness.hospitals}</div>
          <div className="text-sm text-gray-600">Hospitals</div>
        </div>

        <div className="text-center p-4 bg-green-50 rounded-lg">
          <Bed className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600">{readiness.beds}</div>
          <div className="text-sm text-gray-600">Available Beds</div>
        </div>

        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-600">{readiness.ventilators}</div>
          <div className="text-sm text-gray-600">Ventilators</div>
        </div>

        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-orange-600">{readiness.staff}</div>
          <div className="text-sm text-gray-600">Medical Staff</div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex justify-between text-sm mb-2">
          <span>Overall Readiness</span>
          <span className="font-medium">{readiness.readinessScore}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              readiness.readinessScore >= 80
                ? 'bg-green-600'
                : readiness.readinessScore >= 60
                ? 'bg-orange-600'
                : 'bg-red-600'
            }`}
            style={{ width: `${readiness.readinessScore}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FacilityReadiness;