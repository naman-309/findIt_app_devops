import { z } from "zod";

export const createItemSchema = z.object({
    body: z.object({
        title: z.string().min(3, "Title must be at least 3 characters"),

        description: z.string().min(10, "Description is too short"),

        type: z.enum(["lost", "found"]),

        location: z.string().min(2, "Location is required"),
    }),
});