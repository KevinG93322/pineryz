import type { MetadataRoute } from "next";

import { roles } from "@/app/careers/roles";
import { siteUrl } from "@/lib/site";

const pages: ReadonlyArray<{ path: string; priority: number }> = [
  { path: "", priority: 1 },
  { path: "/vaultos", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/careers", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/privacy", priority: 0.4 },
  ...roles.map((role) => ({ path: `/careers/${role.slug}`, priority: 0.6 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
