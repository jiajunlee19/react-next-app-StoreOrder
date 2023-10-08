'use server'

import { v5 as uuidv5 } from 'uuid';
import {z} from 'zod';
import { revalidatePath } from 'next/cache';
import prisma from '@/prisma/prisma';
import { parsedEnv } from '../_libs/zod-env';
import { SelectProductSchema, InsertProductSchema, UpdateProductSchema, DeleteProductSchema } from '../_libs/zod-form';

const UUID5_NAMESPACE = parsedEnv.UUID5_NAMESPACE;
const UUID5_SECRET = uuidv5(UUID5_NAMESPACE, uuidv5.DNS)
const UUID5_DELIMITER = parsedEnv.UUID5_DELIMITER;

export async function getUOM() {

    try {

        // get result from prisma
        const result = await prisma.uom.findMany({
            select: {
                'uom_id': true,
                'uom_name': true
            }
        });

        // Invalidate existing cache, forcing static site re-rendering
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

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/product');

        return result

    } catch(e) {
        return []
    }

};

export async function insertProduct(prevState: any, formData: FormData) {

    // Set current datetime
    const now = new Date();

    const parsedForm = InsertProductSchema.safeParse({
        product_id: uuidv5(formData.get('product_name') + (UUID5_DELIMITER || '|') + formData.get('uom_name'), UUID5_SECRET),
        product_name: formData.get('product_name'),
        uom_id: uuidv5(formData.get('uom_name'), UUID5_SECRET),
        product_unit_price: formData.get('product_unit_price'),
        product_bonus_points: formData.get('product_bonus_points'),
        product_created_date: now,
        product_updated_date: now
    });
    
    if (!parsedForm.success) {
        return { message: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.product.create({
            data: parsedForm.data,
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/product');


        return { message: `Successfully inserted ${parsedForm.data['product_id']}` }

    } catch(e) {
        return { message: 'Failed to insert the item' }
    }

};

export async function updateProduct(prevState: any, formData: FormData) {

    // Set current datetime
    const now = new Date();

    const parsedForm = UpdateProductSchema.safeParse({
        product_id: formData.get('product_id'),
        product_name: formData.get('product_name'),
        uom_id: uuidv5(formData.get('uom_name'), UUID5_SECRET),
        product_unit_price: formData.get('product_unit_price'),
        product_bonus_points: formData.get('product_bonus_points'),
        product_updated_date: now
    });
    
    if (!parsedForm.success) {
        return { message: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.product.update({
            where: {
                product_id: parsedForm.data['product_id']
            },

            data: parsedForm.data,
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/product');


        return { message: `Successfully updated ${parsedForm.data['product_id']}` }

    } catch(e) {
        return { message: 'Failed to update the item' }
    }

};

export async function deleteProduct(prevState: any, formData: FormData) {

    const parsedForm = DeleteProductSchema.safeParse({
        product_id: formData.get('product_id')
    });
    
    if (!parsedForm.success) {
        return { message: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.product.delete({
            where: {
                product_id: parsedForm.data['product_id']
            },
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/product');

        return { message: `Successfully deleted ${parsedForm.data['product_id']}` }

    } catch(e) {
        return { message: 'Failed to delete the item' }
    }

};