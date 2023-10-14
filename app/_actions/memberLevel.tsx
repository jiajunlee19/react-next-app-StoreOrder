'use server'

import { v5 as uuidv5 } from 'uuid';
import { revalidatePath } from 'next/cache';
import prisma from '@/prisma/prisma';
import { parsedEnv } from '@/app/_libs/zod-env';
import { SelectMemberLevelSchema, InsertMemberLevelSchema, UpdateMemberLevelSchema, DeleteMemberLevelSchema } from '@/app/_libs/zod-form-server';

const UUID5_NAMESPACE = parsedEnv.UUID5_NAMESPACE;
const UUID5_SECRET = uuidv5(UUID5_NAMESPACE, uuidv5.DNS)
const UUID5_DELIMITER = parsedEnv.UUID5_DELIMITER;

export async function getMemberLevel() {

    try {

        // get result from prisma
        const result = await prisma.memberLevel.findMany({

        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/memberLevel');

        return result

    } catch(e) {
        return []
    }

};

export async function insertMemberLevel(formData: FormData) {

    // Set current datetime
    const now = new Date();

    const parsedForm = InsertMemberLevelSchema.safeParse({
        member_level_id: uuidv5(formData.get('member_level_name'), UUID5_SECRET),
        member_level_name: formData.get('member_level_name'),
        bonus_points_min: formData.get('bonus_points_min'),
        bonus_points_max: formData.get('bonus_points_max'),
        member_level_created_date: now,
        member_level_updated_date: now
    });

    if (!parsedForm.success) {
        return { error: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.memberLevel.create({
            data: parsedForm.data,
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/memberLevel');


        return { success: `Successfully inserted ${parsedForm.data['member_level_id']}` }

    } catch(e) {
        return { error: 'Failed to insert the item' }
    }

};

export async function updateMemberLevel(formData: FormData) {

    // Set current datetime
    const now = new Date();

    const parsedForm = UpdateMemberLevelSchema.safeParse({
        member_level_id: formData.get('member_level_id'),
        member_level_name: formData.get('member_level_name'),
        bonus_points_min: formData.get('bonus_points_min'),
        bonus_points_max: formData.get('bonus_points_max'),
        member_level_created_date: now,
        member_level_updated_date: now
    });

    if (!parsedForm.success) {
        return { error: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.memberLevel.update({
            where: {
                member_level_id: parsedForm.data['member_level_id']
            },

            data: parsedForm.data,
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/memberLevel');


        return { success: `Successfully updated ${parsedForm.data['member_level_id']}` }

    } catch(e) {
        return { error: 'Failed to update the item' }
    }

};

export async function deleteMemberLevel(formData: FormData) {

    const parsedForm = DeleteMemberLevelSchema.safeParse({
        member_level_id: formData.get('member_level_id')
    });

    if (!parsedForm.success) {
        return { error: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.memberLevel.delete({
            where: {
                member_level_id: parsedForm.data['member_level_id']
            },
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/memberLevel');

        return { success: `Successfully deleted ${parsedForm.data['member_level_id']}` }

    } catch(e) {
        return { error: 'Failed to delete the item' }
    }

};