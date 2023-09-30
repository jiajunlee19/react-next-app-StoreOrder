import prisma from '../../../../prisma/prisma';
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id;
    const result = await prisma.member.findUnique({
      where: {
        member_id: id
      },
    });
  
    if (!result) {
      return new NextResponse("ID not found", { status: 404 });
    }
  
    return NextResponse.json(result);
  }