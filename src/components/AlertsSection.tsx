import React from 'react';
import { AlertTriangle, Droplets, Cloud, Bug } from 'lucide-react';
import { Alert } from '../types/dashboard';
import { formatDistanceToNow } from 'date-fns';

interface AlertsSectionProps {
  alerts: Alert[];
}

const AlertsSection: React.FC<AlertsSectionProps> = ({ alerts }) => {
  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'disease':
        return <Bug className="h-5 w-5" />;
      case 'water':
        return <Droplets className="h-5 w-5" />;
      case 'weather':
        return <Cloud className="h-5 w-5" />;
      default:
        return <AlertTriangle className="h-5 w-5" />;
    }
  };

  const getSeverityColor = (severity: Alert['severity']) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Early Warning Alerts</h3>
        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
          {alerts.length} Active
        </span>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`border rounded-lg p-4 ${getSeverityColor(alert.severity)}`}
          >
            <div className="flex items-start space-x-3">
              <div className="mt-1">
                {getAlertIcon(alert.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{alert.title}</h4>
                  <span className="text-xs capitalize bg-white px-2 py-1 rounded">
                    {alert.severity}
                  </span>
                </div>
                <p className="text-sm mt-1">{alert.description}</p>
                <div className="flex items-center justify-between mt-2 text-xs">
                  <span>📍 {alert.location}</span>
                  <span>{formatDistanceToNow(new Date(alert.timestamp), { addSuffix: true })}</span>
                </div>
                {alert.affectedCount && (
                  <div className="mt-2 text-sm font-medium">
                    Affected: {alert.affectedCount.toLocaleString()} people
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsSection;