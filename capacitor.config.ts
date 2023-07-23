import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.JCCoaching.tracker',
  appName: 'JCCApp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
