import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    category: z.string(),
    date: z.union([z.string(), z.number(), z.date()]),
    description: z.string(),
    thumbnail: image().optional(),
    techStack: z.array(z.string()).optional(),
    url: z.string().url().optional(),
    client: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const experienceCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.union([z.string(), z.number(), z.date()]),
    endDate: z.union([z.string(), z.number(), z.date()]).optional(),
    description: z.string(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'experience': experienceCollection,
};
