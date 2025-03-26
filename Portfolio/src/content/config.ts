import { defineCollection , z } from "astro:content";

const experiences = defineCollection({
    schema: z.object({
        title:z.string(),
        description: z.string(),
        alt: z.string(),
        imageUrl: z.string(),
        url: z.string().url(),
    })
})

export const collections = { experiences }