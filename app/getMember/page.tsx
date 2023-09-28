import prisma from '../../prisma/prisma';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Page Title',
}

// Define staticSiteRendering function
async function GetMember () {
    const memberData = await prisma.member.findMany({
      // where: { member_name: 'jiajunlee' }
      // include: {
      //   author: {
      //     select: { name: true },
      //   },
      // },
    });

    return (
      <div>
        {memberData[0]['member_id']}
      </div>
    );
  };

export default GetMember;