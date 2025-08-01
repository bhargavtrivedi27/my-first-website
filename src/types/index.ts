export interface Testimonial {
  id: number;
  name: string;
  location: string;
  message: string;
  avatar: string;
  rating: number;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  details: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface SocialProof {
  rating: number;
  totalUsers: number;
  trustedFamilies: number;
}