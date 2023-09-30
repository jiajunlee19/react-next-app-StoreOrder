import prisma from '../../../../prisma/prisma';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    return new NextResponse(JSON.stringify(res))
    // await prisma.member.delete({
    //   where: {
    //      member_id: id 
    //   },
    // });
    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    if (error.code === "P2025") {
      return new NextResponse("ID not found", { status: 404 });
    }

    return new NextResponse(error.message, { status: 500 });
  }
}