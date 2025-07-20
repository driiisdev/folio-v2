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
  img: string;
  title: string;
  githubUrl?: string;
  liveUrl?: string;
  description: string;
  tools?: string[];
}

export interface Contribution {
  id: string;
  year?: string;
  title: string;
  liveUrl?: string;
  summary: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ResumeLink {
  platform: string;
  url: string;
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
