'use server'

import { v5 as uuidv5 } from 'uuid';
import { revalidatePath } from 'next/cache';
import prisma from '@/prisma/prisma';
import { parsedEnv } from '@/app/_libs/zod-env';
import { SelectOrderItemSchema, InsertOrderItemSchema, UpdateOrderItemSchema, DeleteOrderItemSchema } from '@/app/_libs/zod-form-server';
import { type TSelectOrderItem } from '@/app/_libs/types';

const UUID5_NAMESPACE = parsedEnv.UUID5_NAMESPACE;
const UUID5_SECRET = uuidv5(UUID5_NAMESPACE, uuidv5.DNS)
const UUID5_DELIMITER = parsedEnv.UUID5_DELIMITER;

export async function getProduct() {

    try {

        // get result from prisma
        const result = await prisma.product.findMany({
            select: {
                product_id: true,
                product_name: true
            }
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/');

        return result

    } catch(e) {
        return []
    }

};

export async function getUOM() {

    try {

        // get result from prisma
        const result = await prisma.uom.findMany({
            select: {
                uom_id: true,
                uom_name: true
            }
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/');

        return result

    } catch(e) {
        return []
    }

};

export async function getOrderId() {

    try {

        // get result from prisma
        const result = await prisma.order.findMany({
            select: {
                order_id: true,
            }
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/');

        return result

    } catch(e) {
        return []
    }

};

export async function getOrderItem(): Promise<TSelectOrderItem[]> {

    try {

        // get result from prisma
        const result: TSelectOrderItem[] = await prisma.$queryRaw`
            SELECT i.*, p.product_name, p.uom_id, u.uom_name, u.product_unit_price*i.order_item_quantity order_item_subtotal
            FROM "order_item" i 
            inner join product p on p.product_id = i.product_id
            inner join uom u on p.uom_id = u.uom_id
        `;

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/');

        return result

    } catch(e) {
        return []
    }

};

export async function insertOrderItem(formData: FormData) {

    // Set current datetime
    const now = new Date();

    const parsedForm = InsertOrderItemSchema.safeParse({
        order_item_id: uuidv5(formData.get('order_id') + (UUID5_DELIMITER || '|') + formData.get('product_id'), UUID5_SECRET),
        order_id: formData.get('order_id'),
        product_id: formData.get('product_id'),
        order_item_quantity: formData.get('order_item_quantity'),
        order_item_created_date: now,
        order_item_updated_date: now
    });
    
    if (!parsedForm.success) {
        return { error: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.orderItem.create({
            data: parsedForm.data,
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/');


        return { success: `Successfully inserted ${parsedForm.data['order_item_id']}` }

    } catch(e) {
        return { error: 'Failed to insert the item' }
    }

};

export async function updateOrderItem(formData: FormData) {

    // Set current datetime
    const now = new Date();

    const parsedForm = UpdateOrderItemSchema.safeParse({
        order_item_id: formData.get('order_item_id'),
        order_id: formData.get('order_id'),
        product_id: formData.get('product_id'),
        order_item_quantity: formData.get('order_item_quantity'),
        order_item_updated_date: now
    });
    
    if (!parsedForm.success) {
        return { error: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.orderItem.update({
            where: {
                order_item_id: parsedForm.data['order_item_id']
            },

            data: parsedForm.data,
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/');


        return { success: `Successfully updated ${parsedForm.data['order_item_id']}` }

    } catch(e) {
        return { error: 'Failed to update the item' }
    }

};

export async function deleteOrderItem(formData: FormData) {

    const parsedForm = DeleteOrderItemSchema.safeParse({
        order_item_id: formData.get('order_item_id')
    });
    
    if (!parsedForm.success) {
        return { error: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.orderItem.delete({
            where: {
                order_item_id: parsedForm.data['order_item_id']
            },
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/');

        return { success: `Successfully deleted ${parsedForm.data['order_item_id']}` }

    } catch(e) {
        return { error: 'Failed to delete the item' }
    }

};