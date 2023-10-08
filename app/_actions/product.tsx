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
            select: {
                'uom_id': true,
                'uom_name': true
            }
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/product');

        return result

    } catch(e) {
        return [];
    }

};

export async function getProduct() {

    try {

        // get result from prisma
        const result = await prisma.$queryRaw`SELECT p.*,u.uom_name FROM product p inner join uom u on p.uom_id = u.uom_id`;
        // const result = await prisma.product.findMany({
        //     include: {
        //         fk_uom_id: {
        //             select: {
        //                 uom_name: true
        //             }
        //         }
        //     }
        // });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/product');

        return result

    } catch(e) {
        return []
    }

};

export async function insertProduct(prevState: any, formData: FormData) {

    // Retrive environment variables
    dotenv.config({ path: '@/env/.env' });
    const UUID5_NAMESPACE = process.env.UUID5_NAMESPACE;
    const UUID5_SECRET = uuidv5(UUID5_NAMESPACE, uuidv5.DNS)
    const UUID5_DELIMITER = process.env.UUID5_DELIMITER;

    // Set current datetime
    const now = new Date();

    // set zod schema to validate form data
    const schema = z.object({
        product_id: z.string().uuid(),
        product_name: z.string(),
        uom_id: z.string().uuid(),
        product_unit_price: z.coerce.number().nonnegative(),
        product_bonus_points: z.coerce.number().nonnegative(),
        product_created_date: z.date(),
        product_updated_date: z.date()
    });
    const data = schema.parse({
        product_id: uuidv5(formData.get('product_name') + (UUID5_DELIMITER || '|') + formData.get('uom_name'), UUID5_SECRET),
        product_name: formData.get('product_name'),
        uom_id: uuidv5(formData.get('uom_name'), UUID5_SECRET),
        product_unit_price: formData.get('product_unit_price'),
        product_bonus_points: formData.get('product_bonus_points'),
        product_created_date: now,
        product_updated_date: now
    });

    try {

        // get result from prisma
        const result = await prisma.product.create({
            data: data,
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/product');


        return { message: `Successfully inserted ${data['product_id']}` }

    } catch(e) {
        return { message: 'Failed to insert the item' }
    }

};

export async function updateProduct(prevState: any, formData: FormData) {

    // Retrive environment variables
    dotenv.config({ path: '@/env/.env' });
    const UUID5_NAMESPACE = process.env.UUID5_NAMESPACE;
    const UUID5_SECRET = uuidv5(UUID5_NAMESPACE, uuidv5.DNS)

    // Set current datetime
    const now = new Date();

    // set zod schema to validate form data
    const schema = z.object({
        product_id: z.string().uuid(),
        product_name: z.string(),
        uom_id: z.string().uuid(),
        product_unit_price: z.coerce.number().nonnegative(),
        product_bonus_points: z.coerce.number().nonnegative(),
        product_created_date: z.date(),
        product_updated_date: z.date()
    });
    const data = schema.parse({
        product_id: formData.get('product_id'),
        product_name: formData.get('product_name'),
        uom_id: uuidv5(formData.get('uom_name'), UUID5_SECRET),
        product_unit_price: formData.get('product_unit_price'),
        product_bonus_points: formData.get('product_bonus_points'),
        product_updated_date: now
    });

    try {

        // get result from prisma
        const result = await prisma.product.update({
            where: {
                product_id: data['product_id']
            },

            data: data,
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/product');


        return { message: `Successfully updated ${data['product_id']}` }

    } catch(e) {
        return { message: 'Failed to update the item' }
    }

};

export async function deleteProduct(prevState: any, formData: FormData) {

    // set zod schema to validate form data
    const schema = z.object({
        product_id: z.string().uuid()
    });
    const data = schema.parse({
        product_id: formData.get('product_id')
    });

    try {

        // get result from prisma
        const result = await prisma.product.delete({
            where: {
                product_id: data['product_id']
            },
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/product');

        return { message: `Successfully deleted ${data['product_id']}` }

    } catch(e) {
        return { message: 'Failed to delete the item' }
    }

};