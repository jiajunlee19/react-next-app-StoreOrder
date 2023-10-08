'use server'

import { v5 as uuidv5 } from 'uuid';
import {z} from 'zod';
import { revalidatePath } from 'next/cache';
import prisma from '@/prisma/prisma';
import { parsedEnv } from '../_libs/zod-env';

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

        // Check existing cache, revalidate with the fetched data
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
        // const result = await prisma.order.findMany({

        // });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/');

        return result

    } catch(e) {
        return []
    }

};

export async function insertOrder(prevState: any, formData: FormData) {

    // Set current datetime
    const now = new Date();

    // set zod schema to validate form data
    const schema = z.object({
        order_id: z.string().uuid(),
        member_id: z.string().uuid(),
        order_created_date: z.date(),
        order_updated_date: z.date()
    });
    const data = schema.parse({
        order_id: uuidv5(formData.get('member_id') + (UUID5_DELIMITER || '|') + now.toString, UUID5_SECRET),
        member_id: formData.get('member_id'),
        order_created_date: now,
        order_updated_date: now
    });

    try {

        // get result from prisma
        const result = await prisma.order.create({
            data: data,
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/');


        return { message: `Successfully inserted ${data['order_id']}` }

    } catch(e) {
        return { message: 'Failed to insert the item' }
    }

};

export async function updateOrder(prevState: any, formData: FormData) {

    // Set current datetime
    const now = new Date();

    // set zod schema to validate form data
    const schema = z.object({
        order_id: z.string().uuid(),
        member_id: z.string().uuid(),
        order_updated_date: z.date()
    });
    const data = schema.parse({
        order_id: formData.get('order_id'),
        member_id: formData.get('member_id'),
        order_updated_date: now
    });

    try {

        // get result from prisma
        const result = await prisma.order.update({
            where: {
                order_id: data['order_id']
            },

            data: data,
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/');


        return { message: `Successfully updated ${data['order_id']}` }

    } catch(e) {
        return { message: 'Failed to update the item' }
    }

};

export async function deleteOrder(prevState: any, formData: FormData) {

    // set zod schema to validate form data
    const schema = z.object({
        order_id: z.string().uuid()
    });
    const data = schema.parse({
        order_id: formData.get('order_id')
    });

    try {

        // get result from prisma
        const result = await prisma.order.delete({
            where: {
                order_id: data['order_id']
            },
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/');

        return { message: `Successfully deleted ${data['order_id']}` }

    } catch(e) {
        return { message: 'Failed to delete the item' }
    }

};