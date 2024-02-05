import { z } from "zod";

export const createBlogSchema = z.object({
    title: z.string().min(1, 'Title is required').max(255),
    content: z.string().min(1, 'Content is required'),
});

// TODO
export const createUserSchema = z.object({
    name: z.string().min(1).max(255),
    email: z.string().min(1),
    password: z.string().min(1).max(16),
});