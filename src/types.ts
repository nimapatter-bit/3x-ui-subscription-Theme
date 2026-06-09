export interface AppInfo {
  id: string;
  name: string;
  recommended?: boolean;
  icon?: string;
  letterIcon?: string;
  os: 'windows' | 'mac' | 'linux' | 'android' | 'ios' | 'tv';
  downloadLinks: {
    label: string;
    url: string;
  }[];
  mainAction?: {
    label: string;
    url: string;
  };
}

export interface ConfigInfo {
  id: string;
  name: string;
  protocol: string;
  flag?: string;
  date?: string;
  isCustom?: boolean;
}
