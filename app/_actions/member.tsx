'use server'

import { v5 as uuidv5 } from 'uuid';
import {z} from 'zod';
import { revalidatePath } from 'next/cache';
import prisma from '@/prisma/prisma';
import { parsedEnv } from '../_libs/zod-env';
import { SelectMemberSchema, InsertMemberSchema, UpdateMemberSchema, DeleteMemberSchema } from '@/app/_libs/zod-form-server';

const UUID5_NAMESPACE = parsedEnv.UUID5_NAMESPACE;
const UUID5_SECRET = uuidv5(UUID5_NAMESPACE, uuidv5.DNS)
const UUID5_DELIMITER = parsedEnv.UUID5_DELIMITER;

export async function getMember() {

    try {

        // get result from prisma
        const result = await prisma.member.findMany({

        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/member');

        return result

    } catch(e) {
        return []
    }

};

export async function insertMember(prevState: any, formData: FormData) {

    // Set current datetime
    const now = new Date();

    const parsedForm = InsertMemberSchema.safeParse({
        member_id: uuidv5(formData.get('member_name'), UUID5_SECRET),
        member_name: formData.get('member_name'),
        member_password: uuidv5(formData.get('member_password'), UUID5_SECRET),
        member_bonus_points: formData.get('member_bonus_points'),
        member_created_date: now,
        member_updated_date: now
    });

    if (!parsedForm.success) {
        return { message: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.member.create({
            data: parsedForm.data,
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/member');


        return { message: `Successfully inserted ${parsedForm.data['member_id']}` }

    } catch(e) {
        return { message: 'Failed to insert the item' }
    }

};

export async function updateMember(prevState: any, formData: FormData) {

    // Set current datetime
    const now = new Date();

    const parsedForm = UpdateMemberSchema.safeParse({
        member_id: formData.get('member_id'),
        member_name: formData.get('member_name'),
        member_password: uuidv5(formData.get('member_password'), UUID5_SECRET),
        member_bonus_points: formData.get('member_bonus_points'),
        member_updated_date: now
    });

    if (!parsedForm.success) {
        return { message: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.member.update({
            where: {
                member_id: parsedForm.data['member_id']
            },

            data: parsedForm.data,
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/member');


        return { message: `Successfully updated ${parsedForm.data['member_id']}` }

    } catch(e) {
        return { message: 'Failed to update the item' }
    }

};

export async function deleteMember(prevState: any, formData: FormData) {

    const parsedForm = DeleteMemberSchema.safeParse({
        member_id: formData.get('member_id')
    });

    if (!parsedForm.success) {
        return { message: parsedForm.error.toString()};
    };

    try {

        // get result from prisma
        const result = await prisma.member.delete({
            where: {
                member_id: parsedForm.data['member_id']
            },
        });

        // Invalidate existing cache, forcing static site re-rendering
        revalidatePath('/member');

        return { message: `Successfully deleted ${parsedForm.data['member_id']}` }

    } catch(e) {
        return { message: 'Failed to delete the item' }
    }

};