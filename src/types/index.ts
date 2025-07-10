export interface Experience {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface Project {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Contribution {
  id: string;
  title: string;
  description: string;
  type: 'contribution' | 'recognition';
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  time: string;
  interests: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
