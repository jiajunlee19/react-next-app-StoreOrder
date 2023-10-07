'use server'

import dotenv from 'dotenv';
import { v5 as uuidv5 } from 'uuid';
import {z} from 'zod';
import { revalidatePath } from 'next/cache';
import prisma from '@/prisma/prisma';

export async function getUOM() {

    try {

        // get result from prisma
        const result = await prisma.uom.findMany({

        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/uom');

        return result

    } catch(e) {
        return { message: 'Failed to get the items' }
    }

};

export async function insertUOM(prevState: any, formData: FormData) {

    // Retrive environment variables
    dotenv.config({ path: '@/env/.env' });
    const UUID5_NAMESPACE = process.env.UUID5_NAMESPACE;
    const UUID5_SECRET = uuidv5(UUID5_NAMESPACE, uuidv5.DNS)

    // Set current datetime
    const now = new Date();

    // set zod schema to validate form data
    const schema = z.object({
        uom_id: z.string().uuid(),
        uom_name: z.string(),
        uom_created_date: z.date(),
        uom_updated_date: z.date()
    });
    const data = schema.parse({
        uom_id: uuidv5(formData.get('uom_name'), UUID5_SECRET),
        uom_name: formData.get('uom_name'),
        uom_created_date: now,
        uom_updated_date: now
    });

    try {

        // get result from prisma
        const result = await prisma.uom.create({
            data: data,
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/uom');


        return { message: `Successfully inserted ${data['uom_id']}` }

    } catch(e) {
        return { message: 'Failed to insert the item' }
    }

};

export async function updateUOM(prevState: any, formData: FormData) {

    // Retrive environment variables
    dotenv.config({ path: '@/env/.env' });
    const UUID5_NAMESPACE = process.env.UUID5_NAMESPACE;
    const UUID5_SECRET = uuidv5(UUID5_NAMESPACE, uuidv5.DNS)

    // Set current datetime
    const now = new Date();

    // set zod schema to validate form data
    const schema = z.object({
        uom_id: z.string().uuid(),
        uom_name: z.string(),
        uom_created_date: z.date(),
        uom_updated_date: z.date()
    });
    const data = schema.parse({
        uom_id: formData.get('uom_name'),
        uom_name: formData.get('uom_name'),
        uom_updated_date: now
    });

    try {

        // get result from prisma
        const result = await prisma.uom.update({
            where: {
                uom_id: data['uom_id']
            },

            data: data,
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/uom');


        return { message: `Successfully updated ${data['uom_id']}` }

    } catch(e) {
        return { message: 'Failed to update the item' }
    }

};

export async function deleteUOM(prevState: any, formData: FormData) {

    // set zod schema to validate form data
    const schema = z.object({
        uom_id: z.string().uuid()
    });
    const data = schema.parse({
        uom_id: formData.get('uom_id')
    });

    try {

        // get result from prisma
        const result = await prisma.uom.delete({
            where: {
                uom_id: data['uom_id']
            },
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/uom');

        return { message: `Successfully deleted ${data['uom_id']}` }

    } catch(e) {
        return { message: 'Failed to delete the item' }
    }

};