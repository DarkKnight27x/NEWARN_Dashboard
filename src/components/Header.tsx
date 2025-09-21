import React from 'react';
import { Search, Bell, User, Settings, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-4 lg:px-6">
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-4 lg:mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search alerts, locations, or health data..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings */}
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Settings className="h-5 w-5" />
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-full">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-900">Niraj Phukan</p>
              <p className="text-xs text-gray-500">Health Officer</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
