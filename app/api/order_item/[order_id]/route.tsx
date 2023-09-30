import prisma from '../../../../prisma/prisma';
import { NextResponse } from "next/server";

export async function UPDATE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  let json = await request.json();

  const result = await prisma.member.update({
    where: { 
      member_id: id 
    },
    data: json,
  });

  if (!result) {
    return new NextResponse("No user with ID found", { status: 404 });
  }

  return NextResponse.json(result);
}

// import prisma from '../../../../prisma/prisma';
// import { NextResponse } from "next/server";

// export async function DELETE(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const id = params.id;
//     await prisma.member.delete({
//       where: {
//          member_id: id 
//       },
//     });

//     return new NextResponse(null, { status: 204 });
//   } catch (error: any) {
//     if (error.code === "P2025") {
//       return new NextResponse("ID not found", { status: 404 });
//     }

//     return new NextResponse(error.message, { status: 500 });
//   }
// }