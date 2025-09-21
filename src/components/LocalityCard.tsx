import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Facility } from '../types/dashboard';

interface LocalityCardProps {
  facilities: Facility[];
}

const LocalityCard: React.FC<LocalityCardProps> = ({ facilities }) => {
  const getAvailabilityColor = (availability: Facility['availability']) => {
    switch (availability) {
      case 'available':
        return 'text-green-600 bg-green-50';
      case 'limited':
        return 'text-orange-600 bg-orange-50';
      case 'unavailable':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getFacilityIcon = (type: Facility['type']) => {
    switch (type) {
      case 'hospital':
        return '🏥';
      case 'medical_store':
        return '💊';
      case 'testing':
        return '🧪';
      default:
        return '📍';
    }
  };

  const groupedFacilities = facilities.reduce((acc, facility) => {
    if (!acc[facility.type]) {
      acc[facility.type] = [];
    }
    acc[facility.type].push(facility);
    return acc;
  }, {} as Record<string, Facility[]>);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Your Locality</h3>
        <MapPin className="h-6 w-6 text-blue-600" />
      </div>

      <div className="space-y-4">
        {Object.entries(groupedFacilities).map(([type, typeFacilities]) => (
          <div key={type} className="space-y-2">
            <h4 className="font-medium text-gray-700 capitalize border-b border-gray-200 pb-1">
              {type.replace('_', ' ')}s
            </h4>
            <div className="space-y-2">
              {typeFacilities.map((facility) => (
                <div key={facility.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{getFacilityIcon(facility.type)}</span>
                    <div>
                      <h5 className="font-medium text-gray-900">{facility.name}</h5>
                      <div className="flex items-center space-x-2 text-xs text-gray-600">
                        <MapPin className="h-3 w-3" />
                        <span>{facility.distance}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded-full ${getAvailabilityColor(facility.availability)}`}>
                      {facility.availability}
                    </span>
                    <div className="flex items-center space-x-1 mt-1">
                      <Phone className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-600">{facility.contact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalityCard;