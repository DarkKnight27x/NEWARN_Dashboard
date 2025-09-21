import { WeatherData, Alert, PatientData, AffectedArea, HealthConcern, Facility, FacilityReadiness } from '../types/dashboard';

export const weatherData: WeatherData = {
  location: 'Assam, India',
  temperature: 28,
  condition: 'Partly Cloudy',
  rainfall: 65,
  sunrise: '05:42',
  sunset: '17:28',
  humidity: 82,
  windSpeed: 12,
  icon: 'cloud-sun'
};

export const alerts: Alert[] = [
  {
    id: '1',
    type: 'disease',
    title: 'Dengue Outbreak Alert',
    severity: 'high',
    description: 'Significant increase in dengue cases reported in Guwahati district',
    location: 'Guwahati',
    timestamp: '2025-01-20T10:30:00Z',
    affectedCount: 147
  },
  {
    id: '2',
    type: 'water',
    title: 'Water Quality Warning',
    severity: 'critical',
    description: 'Contamination detected in main water supply',
    location: 'Dibrugarh',
    timestamp: '2025-01-20T09:15:00Z',
    affectedCount: 2300
  },
  {
    id: '3',
    type: 'weather',
    title: 'Heavy Rainfall Alert',
    severity: 'medium',
    description: 'Expected heavy rainfall for next 48 hours',
    location: 'Upper Assam',
    timestamp: '2025-01-20T08:00:00Z'
  }
];

export const patientsData: PatientData = {
  today: 245,
  trend: 'up',
  percentage: 12
};

export const affectedAreas: AffectedArea[] = [
  {
    id: '1',
    name: 'Guwahati',
    cases: 147,
    severity: 'high',
    timestamp: '2025-01-20T11:00:00Z'
  },
  {
    id: '2',
    name: 'Dibrugarh',
    cases: 89,
    severity: 'medium',
    timestamp: '2025-01-20T10:45:00Z'
  },
  {
    id: '3',
    name: 'Jorhat',
    cases: 56,
    severity: 'low',
    timestamp: '2025-01-20T10:30:00Z'
  },
  {
    id: '4',
    name: 'Tezpur',
    cases: 34,
    severity: 'low',
    timestamp: '2025-01-20T10:15:00Z'
  }
];

export const healthConcerns: HealthConcern[] = [
  {
    id: '1',
    name: 'Dengue Fever',
    priority: 'high',
    cases: 147,
    trend: 15
  },
  {
    id: '2',
    name: 'Malaria',
    priority: 'medium',
    cases: 89,
    trend: -5
  },
  {
    id: '3',
    name: 'Cholera',
    priority: 'high',
    cases: 67,
    trend: 8
  },
  {
    id: '4',
    name: 'Typhoid',
    priority: 'low',
    cases: 23,
    trend: -2
  }
];

export const localityFacilities: Facility[] = [
  {
    id: '1',
    name: 'Gauhati Medical College',
    type: 'hospital',
    distance: '2.3 km',
    availability: 'available',
    contact: '+91-361-2xxx'
  },
  {
    id: '2',
    name: 'Apollo Pharmacy',
    type: 'medical_store',
    distance: '0.8 km',
    availability: 'available',
    contact: '+91-361-3xxx'
  },
  {
    id: '3',
    name: 'PathLab Diagnostics',
    type: 'testing',
    distance: '1.2 km',
    availability: 'limited',
    contact: '+91-361-4xxx'
  },
  {
    id: '4',
    name: 'City Hospital',
    type: 'hospital',
    distance: '3.1 km',
    availability: 'available',
    contact: '+91-361-5xxx'
  }
];

export const facilityReadiness: FacilityReadiness = {
  hospitals: 12,
  beds: 456,
  ventilators: 34,
  staff: 289,
  readinessScore: 87
};

export const chartData = [
  { name: 'Jan', cases: 65, alerts: 12 },
  { name: 'Feb', cases: 59, alerts: 15 },
  { name: 'Mar', cases: 80, alerts: 8 },
  { name: 'Apr', cases: 81, alerts: 20 },
  { name: 'May', cases: 120, alerts: 25 },
  { name: 'Jun', cases: 147, alerts: 18 }
];