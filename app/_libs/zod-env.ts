import { z } from "zod";
import dotenv from 'dotenv';

// Retrive environment variables
dotenv.config({ path: '@/env/.env' });

const EnvSchema = z.object({
    // POSTGRESS connections
    POSTGRES_URL: z.string().nonempty().startsWith('postgres://'),
    POSTGRES_PRISMA_URL: z.string().nonempty().startsWith('postgres://'),
    POSTGRES_URL_NON_POOLING: z.string().nonempty().startsWith('postgres://'),
    POSTGRES_USER: z.string().nonempty(),
    POSTGRES_HOST: z.string().nonempty(),
    POSTGRES_PASSWORD: z.string().nonempty(),
    POSTGRES_DATABASE: z.string().nonempty(),

    // GitHub OAuth
    GITHUB_ID: z.string().nonempty(),
    GITHUB_SECRET: z.string().nonempty(),
    NEXTAUTH_URL: z.string().nonempty().url(),

    // UUID namespace secret
    UUID5_NAMESPACE: z.string().nonempty(),
    UUID5_DELIMITER: z.string().nonempty(),
});

export const parsedEnv = EnvSchema.parse(
    process.env
);