'use server'

import { v5 as uuidv5 } from 'uuid';
import {z} from 'zod';
import { revalidatePath } from 'next/cache';
import prisma from '@/prisma/prisma';
import { parsedEnv } from '../_libs/zod-env';
import { SelectOrderSchema, InsertOrderSchema, UpdateOrderSchema, DeleteOrderSchema } from '../_libs/zod-form-server';

const UUID5_NAMESPACE = parsedEnv.UUID5_NAMESPACE;
const UUID5_SECRET = uuidv5(UUID5_NAMESPACE, uuidv5.DNS)
const UUID5_DELIMITER = parsedEnv.UUID5_DELIMITER;

export async function getMember() {

    try {

        // get result from prisma
        const result = await prisma.member.findMany({
            select: {
                member_id: true,
                member_name: true
            }
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/');

        return result

    } catch(e) {
        return []
    }

};

export async function getOrder() {

    try {

        // get result from prisma
        const result = await prisma.$queryRaw`
            SELECT o.*, m.member_name 
            FROM "order" o 
            inner join member m on o.member_id = m.member_id
        `;
        
        const parsedForm = SelectOrderSchema.safeParse({
            result
        });

        if (!parsedForm.success) {
            return []
        }

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/');

        return parsedForm.data

    } catch(e) {
        return []
    }

};

export async function insertOrder(formData: FormData) {

    // Set current datetime
    const now = new Date();

    const parsedForm = InsertOrderSchema.safeParse({
        order_id: uuidv5(formData.get('member_id') + (UUID5_DELIMITER || '|') + now.toString, UUID5_SECRET),
        member_id: formData.get('member_id'),
        order_created_date: now,
        order_updated_date: now
    });
    
    if (!parsedForm.success) {
        return { error: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.order.create({
            data: parsedForm.data,
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/');


        return { success: `Successfully inserted ${parsedForm.data['order_id']}` }

    } catch(e) {
        return { error: 'Failed to insert the item' }
    }

};

export async function updateOrder(formData: FormData) {

    // Set current datetime
    const now = new Date();

    const parsedForm = UpdateOrderSchema.safeParse({
        order_id: formData.get('order_id'),
        member_id: formData.get('member_id'),
        order_updated_date: now
    });
    
    if (!parsedForm.success) {
        return { error: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.order.update({
            where: {
                order_id: parsedForm.data['order_id']
            },

            data: parsedForm.data,
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/');


        return { success: `Successfully updated ${parsedForm.data['order_id']}` }

    } catch(e) {
        return { error: 'Failed to update the item' }
    }

};

export async function deleteOrder(formData: FormData) {

    const parsedForm = DeleteOrderSchema.safeParse({
        order_id: formData.get('order_id')
    });
    
    if (!parsedForm.success) {
        return { error: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.order.delete({
            where: {
                order_id: parsedForm.data['order_id']
            },
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/');

        return { success: `Successfully deleted ${parsedForm.data['order_id']}` }

    } catch(e) {
        return { error: 'Failed to delete the item' }
    }

};