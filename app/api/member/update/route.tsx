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