import type { NextConfig } from "next";
import path from "path";

const androidExport = process.env.ANDROID_EXPORT === "1";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  ...(androidExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        async headers() {
          return [
            {
              source: "/downloads/:path*.apk",
              headers: [
                {
                  key: "Content-Type",
                  value: "application/vnd.android.package-archive",
                },
                {
                  key: "Content-Disposition",
                  value: 'attachment; filename="lumi-japanese.apk"',
                },
              ],
            },
          ];
        },
      }),
};

export default nextConfig;
