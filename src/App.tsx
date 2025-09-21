import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import MapCard from './components/MapCard';
import AlertsSection from './components/AlertsSection';
import PatientsCard from './components/PatientsCard';
import AffectedAreas from './components/AffectedAreas';
import HealthConcerns from './components/HealthConcerns';
import {
  weatherData,
  alerts,
  patientsData,
  affectedAreas,
  healthConcerns,
} from './data/mockData';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // TODO: Replace with actual API calls
  /*
  useEffect(() => {
    // TODO: fetch weather data from API
    // fetchWeatherData(import.meta.env.VITE_WEATHER_API_KEY);
    
    // TODO: fetch health alerts from API
    // fetchHealthAlerts(import.meta.env.VITE_HEALTH_API_KEY);
    
    // TODO: fetch patients data from API
    // fetchPatientsData(import.meta.env.VITE_API_BASE_URL);
    
    // TODO: fetch facility readiness data from API
    // fetchFacilityReadiness(import.meta.env.VITE_API_BASE_URL);
  }, []);
  */

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Dashboard Grid */}
        <main className="flex-1 p-4 lg:p-6">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Left Column - Weather, Map & Alerts */}
            <div className="xl:col-span-2 space-y-6">
              {/* Weather Card */}
              <WeatherCard weather={weatherData} />

              {/* Map Card */}
              <MapCard />

              {/* Alerts Section */}
              <AlertsSection alerts={alerts} />

              {/* Health Concerns - Desktop Only */}
              <div className="hidden xl:block space-y-6">
                <HealthConcerns concerns={healthConcerns} />
              </div>
            </div>

            {/* Right Column - Patients & Areas */}
            <div className="xl:col-span-2 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-6">
                {/* Patients Card */}
                <PatientsCard data={patientsData} />

                {/* Affected Areas */}
                <AffectedAreas areas={affectedAreas} />
              </div>

              {/* Health Concerns - Mobile/Tablet */}
              <div className="xl:hidden space-y-6">
                <HealthConcerns concerns={healthConcerns} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;