import { z } from 'zod';

export const urlInputSchema = z.object({
  url: z
    .string({ required_error: 'A url is required' })
    .url({ message: 'Invalid URL' }),
});

export type UrlInputSchema = z.infer<typeof urlInputSchema>;
