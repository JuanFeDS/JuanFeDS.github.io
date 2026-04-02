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
    complexity_breakdown: z.object({
      architecture: z.number().int().min(0).max(3),
      data: z.number().int().min(0).max(3),
      infrastructure: z.number().int().min(0).max(3),
      ai: z.number().int().min(0).max(3),
    }),
    summary: z.string().optional(),
    image: z.string().optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    draft: z.boolean().optional().default(false),
    layout: z.enum(["post", "magazine"]).optional().default("post"),
  }),
});

const makeover_monday = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/makeover-monday" }),
  schema: z.object({
    title: z.string(),
    week: z.number().int().min(1).max(53),
    year: z.number().int().min(2020),
    image: z.string().optional(),
    tool: z.string().optional(),
    size: z.enum(["sm", "md", "lg", "wide", "tall"]).optional().default("sm"),
    source_url: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog, projects, makeover_monday };
