import { z } from "zod";
// import dotenv from 'dotenv';

// dotenv.config({ path: '@/env/.env' });
// Try not to retrive environment variables locally as env is usually pumped and stored in production servers, 
// In local dev, you may typically just run "dotenv -e ./env/.env npm run dev" instead

const EnvSchema = z.object({
    // POSTGRESS connections
    POSTGRES_URL: z.string().min(1).startsWith('postgres://'),
    POSTGRES_PRISMA_URL: z.string().min(1).startsWith('postgres://'),
    POSTGRES_URL_NON_POOLING: z.string().min(1).startsWith('postgres://'),
    POSTGRES_USER: z.string().min(1),
    POSTGRES_HOST: z.string().min(1),
    POSTGRES_PASSWORD: z.string().min(1),
    POSTGRES_DATABASE: z.string().min(1),

    // GitHub OAuth
    GITHUB_ID: z.string().min(1),
    GITHUB_SECRET: z.string().min(1),
    NEXTAUTH_URL: z.string().min(1).url(),

    // UUID namespace secret
    UUID5_NAMESPACE: z.string().min(1),
    UUID5_DELIMITER: z.string().min(1),
});

export const parsedEnv = EnvSchema.parse(
    process.env
);