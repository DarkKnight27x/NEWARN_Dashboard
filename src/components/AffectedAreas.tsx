import React from 'react';
import { MapPin } from 'lucide-react';
import { AffectedArea } from '../types/dashboard';
import { formatDistanceToNow } from 'date-fns';

interface AffectedAreasProps {
  areas: AffectedArea[];
}

const AffectedAreas: React.FC<AffectedAreasProps> = ({ areas }) => {
  const getSeverityColor = (severity: AffectedArea['severity']) => {
    switch (severity) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-orange-600 bg-orange-50';
      case 'low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Most Affected Areas</h3>
        <MapPin className="h-6 w-6 text-red-600" />
      </div>

      <div className="space-y-3">
        {areas.map((area) => (
          <div key={area.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-medium text-gray-900">{area.name}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(area.severity)}`}>
                  {area.severity}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(area.timestamp), { addSuffix: true })}
              </p>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-900">{area.cases}</div>
              <div className="text-xs text-gray-500">cases</div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg transition-colors text-sm font-medium">
        View All Areas
      </button>
    </div>
  );
};

export default AffectedAreas;