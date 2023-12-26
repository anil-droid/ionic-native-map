import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.maps',
  appName: 'maps',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
