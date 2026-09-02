export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
  idealFor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'treatment' | 'appointments';
}

export interface JourneyStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface ClinicImage {
  id: string;
  title: string;
  category: string;
  description: string;
  tag: string;
}

export interface AppointmentFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  preferredDate: string;
  preferredTimeSlot: string;
  conditionOrGoal: string;
  notes: string;
}
