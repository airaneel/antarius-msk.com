// 1. Импортируйте утилиты из astro:content
import { z, defineCollection } from 'astro:content'

const articleSchema = z.object({
    author: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    authorImgUrl: z.string().optional(),
    data: z.date().optional(),
    tags: z.array(z.string()).optional(),
})


export const collections = {

    'articles': defineCollection({
        type: 'content',
        schema: articleSchema,
    })

}

