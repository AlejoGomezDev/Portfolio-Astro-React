import { defineCollection , z } from "astro:content";

const experiences = defineCollection({
    schema: z.object({
        title:z.string(),
        description: z.string(),
        alt: z.string(),
        imageUrl: z.string(),
        url: z.string().url(),
        techs: z.array(
            z.object({
                alt: z.string(),
                iconUrl: z.string()
            })
        )
    })
})

export const collections = { experiences}