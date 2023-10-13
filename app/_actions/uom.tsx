'use server'

import { v5 as uuidv5 } from 'uuid';
import { revalidatePath } from 'next/cache';
import prisma from '@/prisma/prisma';
import { parsedEnv } from '../_libs/zod-env';
import { SelectUomSchema, InsertUomSchema, UpdateUomSchema, DeleteUomSchema } from '@/app/_libs/zod-form-server';

const UUID5_NAMESPACE = parsedEnv.UUID5_NAMESPACE;
const UUID5_SECRET = uuidv5(UUID5_NAMESPACE, uuidv5.DNS)
const UUID5_DELIMITER = parsedEnv.UUID5_DELIMITER;

export async function getUOM() {

    try {

        // get result from prisma
        const result = await prisma.uom.findMany({

        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/uom');

        return result

    } catch(e) {
        return []
    }

};

export async function insertUOM(formData: FormData) {

    // Set current datetime
    const now = new Date();

    const parsedForm = InsertUomSchema.safeParse({
        uom_id: uuidv5(formData.get('uom_name'), UUID5_SECRET),
        uom_name: formData.get('uom_name'),
        uom_created_date: now,
        uom_updated_date: now
    });

    if (!parsedForm.success) {
        return { error: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.uom.create({
            data: parsedForm.data,
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/uom');


        return { success: `Successfully inserted ${parsedForm.data['uom_id']}` }

    } catch(e) {
        return { error: 'Failed to insert the item' }
    }

};

export async function updateUOM(formData: FormData) {

    // Set current datetime
    const now = new Date();

    const parsedForm = UpdateUomSchema.safeParse({
        uom_id: formData.get('uom_name'),
        uom_name: formData.get('uom_name'),
        uom_updated_date: now
    });

    if (!parsedForm.success) {
        return { error: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.uom.update({
            where: {
                uom_id: parsedForm.data['uom_id']
            },

            data: parsedForm.data,
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/uom');


        return { success: `Successfully updated ${parsedForm.data['uom_id']}` }

    } catch(e) {
        return { error: 'Failed to update the item' }
    }

};

export async function deleteUOM(formData: FormData) {

    const parsedForm = DeleteUomSchema.safeParse({
        uom_id: formData.get('uom_id')
    });
    
    if (!parsedForm.success) {
        return { success: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.uom.delete({
            where: {
                uom_id: parsedForm.data['uom_id']
            },
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/uom');

        return { error: `Successfully deleted ${parsedForm.data['uom_id']}` }

    } catch(e) {
        return { error: 'Failed to delete the item' }
    }

};