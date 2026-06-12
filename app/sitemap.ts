import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vinayakshukla.dev",
      lastModified: new Date()
    }
  ];
}

