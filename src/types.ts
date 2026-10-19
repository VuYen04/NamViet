export type Language = 'EN' | 'VI';

export type TransportMode = 'sea' | 'road' | 'rail' | 'air';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  subservices: string[];
  icon: string;
  highlights: string[];
  leadTime: string;
}

export interface SolutionCategory {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  suitableFor: string;
  image: string;
}

export interface TrackingCheckpoint {
  title: string;
  location: string;
  timestamp: string;
  status: 'completed' | 'in-progress' | 'pending';
  details: string;
}

export interface TrackingShipment {
  trackingNumber: string;
  origin: string;
  destination: string;
  mode: TransportMode;
  cargoType: string;
  weight: string;
  eta: string;
  currentStatus: string;
  currentStepIndex: number; // 0 to 5
  history: TrackingCheckpoint[];
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  origin: string;
  destination: string;
  mode: TransportMode;
  cargoDescription: string;
  weightKg: string;
  volumeCbm: string;
  notes?: string;
}
