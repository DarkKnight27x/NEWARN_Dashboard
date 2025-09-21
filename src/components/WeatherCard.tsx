import React from 'react';
import { Cloud, Droplets, Wind, Eye, Sunrise, Sunset } from 'lucide-react';
import { WeatherData } from '../types/dashboard';

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Weather - {weather.location}</h3>
        <Cloud className="h-6 w-6 text-gray-600" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Temperature */}
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">{weather.temperature}°C</div>
          <div className="text-sm text-gray-600">{weather.condition}</div>
        </div>

        {/* Rainfall */}
        <div className="flex items-center space-x-2">
          <Droplets className="h-5 w-5 text-blue-500" />
          <div>
            <div className="font-semibold">{weather.rainfall}%</div>
            <div className="text-xs text-gray-600">Rainfall</div>
          </div>
        </div>

        {/* Humidity */}
        <div className="flex items-center space-x-2">
          <Eye className="h-5 w-5 text-green-500" />
          <div>
            <div className="font-semibold">{weather.humidity}%</div>
            <div className="text-xs text-gray-600">Humidity</div>
          </div>
        </div>

        {/* Wind */}
        <div className="flex items-center space-x-2">
          <Wind className="h-5 w-5 text-gray-500" />
          <div>
            <div className="font-semibold">{weather.windSpeed} km/h</div>
            <div className="text-xs text-gray-600">Wind</div>
          </div>
        </div>

        {/* Sunrise */}
        <div className="flex items-center space-x-2">
          <Sunrise className="h-5 w-5 text-orange-500" />
          <div>
            <div className="font-semibold">{weather.sunrise}</div>
            <div className="text-xs text-gray-600">Sunrise</div>
          </div>
        </div>

        {/* Sunset */}
        <div className="flex items-center space-x-2">
          <Sunset className="h-5 w-5 text-orange-600" />
          <div>
            <div className="font-semibold">{weather.sunset}</div>
            <div className="text-xs text-gray-600">Sunset</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;