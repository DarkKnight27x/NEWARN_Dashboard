import React from 'react';
import { MapPin } from 'lucide-react';

const MapCard: React.FC = () => {
  // TODO: Replace with actual Google Maps API key
  const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY_HERE';
  
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
        {GOOGLE_MAPS_API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY_HERE' ? (
          // Placeholder when API key is not set
          <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 font-medium">Map View</p>
              <p className="text-sm text-gray-500 mt-1">Assam, India</p>
              <p className="text-xs text-gray-400 mt-2">
                Add Google Maps API key to display interactive map
              </p>
            </div>
          </div>
        ) : (
          // Actual Google Maps embed when API key is provided
          <iframe
            src={mapUrl}
            width="100%"
            height="256"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
            title="Assam Regional Map"
          />
        )}
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