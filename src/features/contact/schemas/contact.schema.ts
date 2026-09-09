import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Please provide a little more detail (at least 10 characters)"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export interface ContactState {
  formData: ContactFormData;
  status: "idle" | "submitting" | "success" | "error";
  errorMessage: string | null;
}
