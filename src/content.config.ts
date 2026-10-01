import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    client: z.string().optional(),
    year: z.string().optional(),
    tags: z.array(z.string()).default([]),
    metrics: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    coverImage: z.string().optional(),
    // Homepage/listing card copy; falls back to title and summary.
    category: z.string().optional(),
    cardTitle: z.string().optional(),
    cardBlurb: z.string().optional(),
    stat: z.string().optional(),
    statLabel: z.string().optional(),
  }),
});

const lab = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/lab" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    type: z.enum(["app", "article", "note", "github"]).default("note"),
    demoUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { work, lab };
