export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  rainfall: number;
  sunrise: string;
  sunset: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export interface Alert {
  id: string;
  type: 'disease' | 'water' | 'weather';
  title: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  location: string;
  timestamp: string;
  affectedCount?: number;
}

export interface PatientData {
  today: number;
  trend: 'up' | 'down' | 'stable';
  percentage: number;
}

export interface AffectedArea {
  id: string;
  name: string;
  cases: number;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
}

export interface HealthConcern {
  id: string;
  name: string;
  priority: 'low' | 'medium' | 'high';
  cases: number;
  trend: number;
}

export interface Facility {
  id: string;
  name: string;
  type: 'hospital' | 'medical_store' | 'testing';
  distance: string;
  availability: 'available' | 'limited' | 'unavailable';
  contact: string;
}

export interface FacilityReadiness {
  hospitals: number;
  beds: number;
  ventilators: number;
  staff: number;
  readinessScore: number;
}