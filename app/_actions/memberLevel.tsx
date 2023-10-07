'use server'

import dotenv from 'dotenv';
import { v5 as uuidv5 } from 'uuid';
import {z} from 'zod';
import { revalidatePath } from 'next/cache';
import prisma from '@/prisma/prisma';

export async function getMemberLevel() {

    try {

        // get result from prisma
        const result = await prisma.memberLevel.findMany({

        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/memberLevel');

        return result

    } catch(e) {
        return { message: 'Failed to get the items' }
    }

};

export async function insertMemberLevel(prevState: any, formData: FormData) {

    // Retrive environment variables
    dotenv.config({ path: '@/env/.env' });
    const UUID5_NAMESPACE = process.env.UUID5_NAMESPACE;
    const UUID5_SECRET = uuidv5(UUID5_NAMESPACE, uuidv5.DNS)

    // Set current datetime
    const now = new Date();

    // set zod schema to validate form data
    const schema = z.object({
        member_level_id: z.string().uuid(),
        member_level_name: z.string(),
        bonus_points_min: z.coerce.number().nonnegative(),
        bonus_points_max: z.coerce.number().nonnegative(),
        member_level_created_date: z.date(),
        member_level_updated_date: z.date()
    });
    const data = schema.parse({
        member_level_id: uuidv5(formData.get('member_level_name'), UUID5_SECRET),
        member_level_name: formData.get('member_level_name'),
        bonus_points_min: formData.get('bonus_points_min'),
        bonus_points_max: formData.get('bonus_points_max'),
        member_level_created_date: now,
        member_level_updated_date: now
    });

    try {

        // get result from prisma
        const result = await prisma.memberLevel.create({
            data: data,
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/memberLevel');


        return { message: `Successfully inserted ${data['member_level_id']}` }

    } catch(e) {
        return { message: 'Failed to insert the item' }
    }

};

export async function updateMemberLevel(prevState: any, formData: FormData) {

    // Retrive environment variables
    dotenv.config({ path: '@/env/.env' });
    const UUID5_NAMESPACE = process.env.UUID5_NAMESPACE;
    const UUID5_SECRET = uuidv5(UUID5_NAMESPACE, uuidv5.DNS)

    // Set current datetime
    const now = new Date();

    // set zod schema to validate form data
    const schema = z.object({
        member_level_id: z.string().uuid(),
        member_level_name: z.string(),
        bonus_points_min: z.coerce.number().nonnegative(),
        bonus_points_max: z.coerce.number().nonnegative(),
        member_level_created_date: z.date(),
        member_level_updated_date: z.date()
    });
    const data = schema.parse({
        member_level_id: formData.get('member_level_id'),
        member_level_name: formData.get('member_level_name'),
        bonus_points_min: formData.get('bonus_points_min'),
        bonus_points_max: formData.get('bonus_points_max'),
        member_level_created_date: now,
        member_level_updated_date: now
    });

    try {

        // get result from prisma
        const result = await prisma.memberLevel.update({
            where: {
                member_level_id: data['member_level_id']
            },

            data: data,
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/memberLevel');


        return { message: `Successfully updated ${data['member_level_id']}` }

    } catch(e) {
        return { message: 'Failed to update the item' }
    }

};

export async function deleteMemberLevel(prevState: any, formData: FormData) {

    // set zod schema to validate form data
    const schema = z.object({
        member_level_id: z.string().uuid()
    });
    const data = schema.parse({
        member_level_id: formData.get('member_level_id')
    });

    try {

        // get result from prisma
        const result = await prisma.memberLevel.delete({
            where: {
                member_level_id: data['member_level_id']
            },
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/memberLevel');

        return { message: `Successfully deleted ${data['member_level_id']}` }

    } catch(e) {
        return { message: 'Failed to delete the item' }
    }

};