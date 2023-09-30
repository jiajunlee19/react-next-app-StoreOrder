'use server'

import {z} from 'zod';
import { revalidatePath } from 'next/cache';
import prisma from '@/prisma/prisma';

export async function deleteMember(prevState: any, formData: FormData) {

    // set zod schema to validate form data
    const schema = z.object({
        member_id: z.string()
    });
    const data = schema.parse({
        member_id: formData.get('member_id')
    });

    try {

        // get result from prisma
        const result = await prisma.member.delete({
            where: {
                member_id: data['member_id']
            },
        });

        // Check existing cache, revalidate with the fetched data
        revalidatePath('/member');

        return { message: `Successfully deleted ${data['member_id']}` }

    } catch(e) {
        return { message: 'Failed to delete the item' }
    }


};