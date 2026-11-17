import type { MetadataRoute } from "next"
import { news } from "@/lib/content"
import { projects } from "@/lib/platform"
import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/agenda", "/record", "/team", "/projects", "/constituency", "/election-2027", "/news", "/events", "/gallery", "/get-involved", "/support", "/contact", "/privacy"].map((path) => ({
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
  const projectPages = projects.map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))
  return [...pages, ...projectPages, ...articles]
}
