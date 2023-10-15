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

export const parsedEnv = EnvSchema.parse({

    // POSTGRESS connections
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,

    // GitHub OAuth
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,

    // UUID namespace secret
    UUID5_NAMESPACE: process.env.UUID5_NAMESPACE,
    UUID5_DELIMITER: process.env.UUID5_DELIMITER,
});