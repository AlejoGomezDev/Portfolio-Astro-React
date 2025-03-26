import { defineCollection,z } from "astro:content";

const experiences = defineCollection({
    schema: z.object({
        title:z.string(),
        url: z.string().url(),
        imageUrl: z.string(),
        alt: z.string(),
    })
})

export const collections = {experiences}