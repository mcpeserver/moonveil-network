export interface DeveloperData {
  name: string;
  contact: {
    phone: string;
    whatsapp: string;
  };
  community: {
    name: string;
    website: string;
    discord: string;
  };
  website: {
    portfolio: string;
  };
}

export interface FeatureItem {
  name: string;
  description: string;
  iconName: string;
}
