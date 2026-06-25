export interface Objective {
  id: number;
  title: string;
  description: string;
}

export type GalleryCategory = 'ALL' | 'ROYAL' | 'EVENTS' | 'DOCUMENTS' | 'BANQUETS';

export interface GalleryImage {
  index: number;
  filename: string;
  title: string;
  category: GalleryCategory;
  description: string;
  tagline?: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  objectives: string[];
  keyEventCode?: string;
  bannerImageIndex: number;
}

export interface Patron {
  id: string;
  name: string;
  title: string;
  achievements: string[];
  imageIndex: number;
  imageUrl?: string;
}
