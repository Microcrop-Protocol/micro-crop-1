import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MicroCrop — Parametric Crop & Livestock Insurance Infrastructure",
    short_name: "MicroCrop",
    description:
      "Infrastructure for insurers, cooperatives, agri-lenders, and NGOs to launch automated parametric crop and livestock insurance.",
    start_url: "/",
    display: "standalone",
    background_color: "#047857",
    theme_color: "#047857",
    icons: [
      {
        src: "/icon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
