'use server'

import dotenv from 'dotenv';
import { v5 as uuidv5 } from 'uuid';
import {z} from 'zod';
import { revalidatePath } from 'next/cache';
import prisma from '@/prisma/prisma';

export async function getMember() {

    try {

        // get result from prisma
        const result = await prisma.member.findMany({

        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/member');

        return result

    } catch(e) {
        return { message: 'Failed to get the items' }
    }

};

export async function insertMember(prevState: any, formData: FormData) {

    // Retrive environment variables
    dotenv.config({ path: '@/env/.env' });
    const UUID5_NAMESPACE = process.env.UUID5_NAMESPACE;
    const UUID5_SECRET = uuidv5(UUID5_NAMESPACE, uuidv5.DNS)

    // Set current datetime
    const now = new Date();

    // set zod schema to validate form data
    const schema = z.object({
        member_id: z.string().uuid(),
        member_name: z.string(),
        member_password: z.string().uuid(),
        member_bonus_points: z.coerce.number().nonnegative(),
        member_created_date: z.date(),
        member_updated_date: z.date()
    });
    const data = schema.parse({
        member_id: uuidv5(formData.get('member_name'), UUID5_SECRET),
        member_name: formData.get('member_name'),
        member_password: uuidv5(formData.get('member_password'), UUID5_SECRET),
        member_bonus_points: formData.get('member_bonus_points'),
        member_created_date: now,
        member_updated_date: now
    });

    try {

        // get result from prisma
        const result = await prisma.member.create({
            data: data,
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/member');


        return { message: `Successfully inserted ${data['member_id']}` }

    } catch(e) {
        return { message: 'Failed to insert the item' }
    }

};

export async function updateMember(prevState: any, formData: FormData) {

    // Retrive environment variables
    dotenv.config({ path: '@/env/.env' });
    const UUID5_NAMESPACE = process.env.UUID5_NAMESPACE;
    const UUID5_SECRET = uuidv5(UUID5_NAMESPACE, uuidv5.DNS)

    // Set current datetime
    const now = new Date();

    // set zod schema to validate form data
    const schema = z.object({
        member_id: z.string().uuid(),
        member_name: z.string(),
        member_password: z.string().uuid(),
        member_bonus_points: z.coerce.number().nonnegative(),
        member_updated_date: z.date()
    });
    const data = schema.parse({
        member_id: formData.get('member_id'),
        member_name: formData.get('member_name'),
        member_password: uuidv5(formData.get('member_password'), UUID5_SECRET),
        member_bonus_points: formData.get('member_bonus_points'),
        member_updated_date: now
    });

    try {

        // get result from prisma
        const result = await prisma.member.update({
            where: {
                member_id: data['member_id']
            },

            data: data,
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/member');


        return { message: `Successfully updated ${data['member_id']}` }

    } catch(e) {
        return { message: 'Failed to update the item' }
    }

};

export async function deleteMember(prevState: any, formData: FormData) {

    // set zod schema to validate form data
    const schema = z.object({
        member_id: z.string()
    });
    const data = schema.parse({
        member_id: formData.get('member_id')
    });

    try {

        // get result from prisma
        const result = await prisma.member.delete({
            where: {
                member_id: data['member_id']
            },
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/member');

        return { message: `Successfully deleted ${data['member_id']}` }

    } catch(e) {
        return { message: 'Failed to delete the item' }
    }

};