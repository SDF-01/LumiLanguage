import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${brand.name} Japanese`,
    short_name: brand.name,
    description: brand.description,
    start_url: "/japanese",
    display: "standalone",
    orientation: "portrait",
    background_color: "#eaf7fb",
    theme_color: "#40c8c8",
    lang: "en",
    categories: ["education"],
    icons: [
      {
        src: "/icons/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
