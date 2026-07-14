/**
 * Core type system for Apex Plumbing & Drain.
 * Everything that flows from /data into UI is strictly typed here.
 */

export type UrgencyLevel = "routine" | "priority" | "emergency";

export interface BrandMetadata {
  legalName: string;
  displayName: string;
  tagline: string;
  foundedYear: number;
  stateLicenseKey: string;
  stateLicenseLabel: string;
  insuredValue: string;
  insuredCarrier: string;
  headquarters: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hoursLine: string;
}

export interface EmergencyCoordinates {
  livePhoneDisplay: string;
  livePhoneHref: string;
  smsNumberDisplay: string;
  smsNumberHref: string;
  dispatchEmail: string;
  averageResponseMinutes: number;
  crewsOnShift: number;
  crewsAvailable: number;
  dispatchAreaLabel: string;
  status: "operational" | "high-volume" | "critical";
  statusNote: string;
}

export interface CoverageArea {
  name: string;
  type: "neighborhood" | "city" | "zip-cluster";
  zips: string[];
  averageArrivalMinutes: number;
}

export interface ServiceItem {
  id: string;
  category: string;
  name: string;
  description: string;
  startingPrice: number;
  endingPrice: number;
  priceUnit: string;
  averageDurationMinutes: number;
  urgency: UrgencyLevel;
  signs: string[];
  warrantyMonths: number;
  iconHint: string;
}

export interface TrustFactors {
  certifiedTechs: number;
  yearsInBusiness: number;
  jobsCompleted: string;
  googleRating: number;
  googleReviewCount: number;
  bbbAccredited: boolean;
  bbbGrade: string;
  awards: { title: string; issuer: string; year: number }[];
}

export interface ReviewItem {
  id: string;
  author: string;
  neighborhood: string;
  rating: number;
  date: string;
  body: string;
  serviceTag: string;
  highlight: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface GuaranteeItem {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export interface PlumbingConfig {
  brand: BrandMetadata;
  emergency: EmergencyCoordinates;
  coverage: CoverageArea[];
  services: ServiceItem[];
  trust: TrustFactors;
  guarantees: GuaranteeItem[];
  reviews: ReviewItem[];
  faqs: FaqItem[];
}
