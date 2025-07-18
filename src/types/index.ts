export interface Experience {
  id: string;
  year: string;
  title: string;
  location?: string;
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
  year?: string;
  title: string;
  url?: string;
  description: string;
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

export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
    tz_id: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    is_day: number;
  };
}
