export interface Lead {
  id?: number;
  nom: string;
  email: string;
  telephone?: string;
  commerce_type?: string;
  message?: string;
  created_at?: string;
}

export interface Service {
  name: string;
  price: number;
  monthly: number;
  description: string;
  features: string[];
  recommended?: boolean;
  cta: string;
}

export interface PortfolioItem {
  id: number;
  name: string;
  type: string;
  description: string;
  tags: string[];
  emoji: string;
}

export interface Testimonial {
  id: number;
  name: string;
  business: string;
  location: string;
  quote: string;
  rating: number;
}

export interface ContactFormData {
  nom: string;
  email: string;
  telephone: string;
  commerce_type: string;
  message: string;
}
