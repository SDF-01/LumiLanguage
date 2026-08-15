import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.lumi.japanese",
  appName: "LUMI",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
  android: {
    allowMixedContent: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 400,
      backgroundColor: "#eaf7fb",
    },
  },
};

export default config;
