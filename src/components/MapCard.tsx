import React from 'react';
import { MapPin } from 'lucide-react';

const MapCard: React.FC = () => {
  // Google Maps API key
  const GOOGLE_MAPS_API_KEY = 'AIzaSyDLvDNOOGWSkSvUsbYANjNDu3sFmFrNepQ';
  
  // Default location: Assam, India
  const defaultLocation = {
    lat: 26.2006,
    lng: 92.9376,
    zoom: 8
  };

  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_API_KEY}&center=${defaultLocation.lat},${defaultLocation.lng}&zoom=${defaultLocation.zoom}`;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Regional Map - Assam</h3>
        <MapPin className="h-6 w-6 text-blue-600" />
      </div>

      <div className="relative">
        {/* Google Maps embed */}
        <iframe
          src={mapUrl}
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-sm"
          title="Assam Regional Map"
        />
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>High Risk Areas</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span>Medium Risk</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Low Risk</span>
          </div>
        </div>
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          View Full Map →
        </button>
      </div>
    </div>
  );
};

export default MapCard;