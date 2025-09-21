import React, { useState } from 'react';
import { Home, Database, Users, Settings, Activity, ChevronDown, ChevronRight } from 'lucide-react';
import LocalityCard from './LocalityCard';
import FacilityReadiness from './FacilityReadiness';
import { localityFacilities, facilityReadiness } from '../data/mockData';

const navigationItems = [
  { name: 'Dashboard', icon: Home, active: true },
  { name: 'Data', icon: Database, active: false },
  { name: 'Community', icon: Users, active: false },
  { name: 'Settings', icon: Settings, active: false }
];

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [dataExpanded, setDataExpanded] = useState(false);

  return (
    <div className={`bg-blue-900 text-white w-64 min-h-screen flex flex-col fixed left-0 top-0 z-30 lg:relative lg:z-0 transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    }`}>
      {/* Logo and Title */}
      <div className="p-6 border-b border-blue-800">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Activity className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-xl font-bold">NE-WARN</h1>
            <p className="text-blue-300 text-sm">Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isDataItem = item.name === 'Data';
            
            return (
              <li key={item.name} className="space-y-2">
                {isDataItem ? (
                  <>
                    <button
                      onClick={() => setDataExpanded(!dataExpanded)}
                      className={`w-full flex items-center justify-between px-6 py-3 text-sm font-medium transition-colors ${
                        dataExpanded
                          ? 'bg-blue-800 text-white border-r-2 border-blue-400'
                          : 'text-blue-300 hover:bg-blue-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center">
                        <Icon className="h-5 w-5 mr-3" />
                        {item.name}
                      </div>
                      {dataExpanded ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                    
                    {dataExpanded && (
                      <div className="px-4 pb-4 space-y-4">
                        {/* Your Locality Section */}
                        <div className="bg-blue-800 rounded-lg p-4">
                          <h4 className="text-sm font-semibold text-blue-200 mb-3">Your Locality</h4>
                          <div className="space-y-2">
                            {localityFacilities.slice(0, 3).map((facility) => (
                              <div key={facility.id} className="flex items-center justify-between text-xs">
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm">
                                    {facility.type === 'hospital' ? '🏥' : 
                                     facility.type === 'medical_store' ? '💊' : '🧪'}
                                  </span>
                                  <span className="text-blue-100 truncate">{facility.name}</span>
                                </div>
                                <span className="text-blue-300">{facility.distance}</span>
                              </div>
                            ))}
                            <button className="w-full text-xs text-blue-300 hover:text-white mt-2 py-1">
                              View All →
                            </button>
                          </div>
                        </div>

                        {/* Facility Readiness Section */}
                        <div className="bg-blue-800 rounded-lg p-4">
                          <h4 className="text-sm font-semibold text-blue-200 mb-3">Facility Readiness</h4>
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            <div className="text-center">
                              <div className="text-lg font-bold text-white">{facilityReadiness.hospitals}</div>
                              <div className="text-xs text-blue-300">Hospitals</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-white">{facilityReadiness.beds}</div>
                              <div className="text-xs text-blue-300">Beds</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-white">{facilityReadiness.ventilators}</div>
                              <div className="text-xs text-blue-300">Ventilators</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-white">{facilityReadiness.staff}</div>
                              <div className="text-xs text-blue-300">Staff</div>
                            </div>
                          </div>
                          <div className="bg-blue-700 rounded p-2">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-blue-200">Readiness</span>
                              <span className="text-white font-medium">{facilityReadiness.readinessScore}%</span>
                            </div>
                            <div className="w-full bg-blue-600 rounded-full h-1.5">
                              <div
                                className="bg-green-400 h-1.5 rounded-full transition-all duration-500"
                                style={{ width: `${facilityReadiness.readinessScore}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href="#"
                    className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                      item.active
                        ? 'bg-blue-800 text-white border-r-2 border-blue-400'
                        : 'text-blue-300 hover:bg-blue-800 hover:text-white'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-blue-800 mt-auto">
        <div className="text-xs text-blue-300">
          <p>Version 2.1.0</p>
          <p>© 2025 NE-WARN</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;