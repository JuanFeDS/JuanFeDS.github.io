import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
    layout: z.enum(["post", "magazine"]).optional().default("post"),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    domain: z.enum(["data-engineering", "machine-learning", "ai", "analytics", "web", "mobile"]),
    level: z.number().int().min(1).max(5),
    level_name: z.enum([
      "Standalone Script",
      "Static App",
      "Basic Backend",
      "Distributed System",
      "Complex Platform",
    ]),
    flags: z.array(z.enum([
      "ai-ml",
      "multiplatform",
      "advanced-security",
      "realtime",
      "data-intensive",
      "cloud-native",
      "payments",
      "high-concurrency",
    ])).optional().default([]),
    stack: z.array(z.string()),
    score: z.number().int().min(0).max(12),
    complexity_breakdown: z.object({
      data: z.number().int().min(0).max(3),
      infra: z.number().int().min(0).max(3),
      ml: z.number().int().min(0).max(3),
      integration: z.number().int().min(0).max(3),
    }),
    image: z.string().optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    draft: z.boolean().optional().default(false),
    layout: z.enum(["post", "magazine"]).optional().default("post"),
  }),
});

export const collections = { blog, projects };
