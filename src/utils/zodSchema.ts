import { z } from "zod";

export const portfolioValidationSchema = z.object({
    title: z.string(),
    description: z.string(),
    testimonial: z.string().optional(),
    videoUrl: z.string(),
    websiteUrl: z.string(),
});