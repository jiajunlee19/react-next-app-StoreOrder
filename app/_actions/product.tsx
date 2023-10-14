'use server'

import { v5 as uuidv5 } from 'uuid';
import { revalidatePath } from 'next/cache';
import prisma from '@/prisma/prisma';
import { parsedEnv } from '@/app/_libs/zod-env';
import { SelectProductSchema, InsertProductSchema, UpdateProductSchema, DeleteProductSchema } from '@/app/_libs/zod-form-server';
import { type TSelectProduct } from '@/app/_libs/types';

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

export async function getProduct(): Promise<TSelectProduct[]> {

    try {

        // get result from prisma
        const result: TSelectProduct[] = await prisma.$queryRaw`SELECT p.*,u.uom_name FROM product p inner join uom u on p.uom_id = u.uom_id`;
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

export async function insertProduct(formData: FormData) {

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
        return { error: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.product.create({
            data: parsedForm.data,
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/product');


        return { success: `Successfully inserted ${parsedForm.data['product_id']}` }

    } catch(e) {
        return { error: 'Failed to insert the item' }
    }

};

export async function updateProduct(formData: FormData) {

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
        return { error: parsedForm.error.toString()};
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


        return { success: `Successfully updated ${parsedForm.data['product_id']}` }

    } catch(e) {
        return { error: 'Failed to update the item' }
    }

};

export async function deleteProduct(formData: FormData) {

    const parsedForm = DeleteProductSchema.safeParse({
        product_id: formData.get('product_id')
    });
    
    if (!parsedForm.success) {
        return { error: parsedForm.error.toString()};
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

        return { success: `Successfully deleted ${parsedForm.data['product_id']}` }

    } catch(e) {
        return { error: 'Failed to delete the item' }
    }

};