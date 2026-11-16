import type { MetadataRoute } from "next"
import { news } from "@/lib/content"
import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/record", "/agenda", "/news", "/gallery", "/get-involved", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }))
  const articles = news
    .filter((n) => n.body)
    .map((n) => ({
      url: `${site.url}/news/${n.slug}`,
      lastModified: n.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  return [...pages, ...articles]
}
