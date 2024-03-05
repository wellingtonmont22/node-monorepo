import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z
    .number()
    .int()
    .positive()
    .or(z.string().transform(Number))
    .pipe(z.number().int())
    .default(3000),
});

export const env = envSchema.parse(process.env);
