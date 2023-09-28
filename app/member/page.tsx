import prisma from '../../prisma/prisma';

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