
export type Language = 'en' | 'ar';

export interface Client {
  name: string;
  logoUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  category: string;
  location: string;
  image: string;
  status?: 'ongoing' | 'finished';
  description?: string;
  date?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
