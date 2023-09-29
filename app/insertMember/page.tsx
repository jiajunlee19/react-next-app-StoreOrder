// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   const user = await prisma.user.upsert({
//     where: { email: "admin@admin.com" },
//     update: {},
//     create: {
//       name: "Admin",
//       email: "admin@admin.com",
//       role: "admin",
//     },
//   });

//   console.log({ user });
// }

// main()
//   .then(() => prisma.$disconnect())
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit();
//   });

// import { prisma } from "@/lib/prisma";
// import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const users = await prisma.user.findMany();
//   return NextResponse.json(users);
// }

// export async function POST(request: Request) {
//   try {
//     const json = await request.json();

//     const user = await prisma.user.create({
//       data: json,
//     });

//     return new NextResponse(JSON.stringify(user), { 
//      status: 201, 
//      headers: { "Content-Type": "application/json" },
//     });
//   } catch (error: any) {
//     if (error.code === "P2002") {
//       return new NextResponse("User with email already exists", {
//         status: 409,
//       });
//     }
//     return new NextResponse(error.message, { status: 500 });
//   }
// }

// import { prisma } from "@/lib/prisma";
// import { NextResponse } from "next/server";

// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const id = params.id;
//   const user = await prisma.user.findUnique({
//     where: {
//       id,
//     },
//   });

//   if (!user) {
//     return new NextResponse("No user with ID found", { status: 404 });
//   }

//   return NextResponse.json(user);
// }

// export async function PATCH(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const id = params.id;
//   let json = await request.json();

//   const updated_user = await prisma.user.update({
//     where: { id },
//     data: json,
//   });

//   if (!updated_user) {
//     return new NextResponse("No user with ID found", { status: 404 });
//   }

//   return NextResponse.json(updated_user);
// }

// export async function DELETE(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const id = params.id;
//     await prisma.user.delete({
//       where: { id },
//     });

//     return new NextResponse(null, { status: 204 });
//   } catch (error: any) {
//     if (error.code === "P2025") {
//       return new NextResponse("No user with ID found", { status: 404 });
//     }

//     return new NextResponse(error.message, { status: 500 });
//   }
// }


// "use client";

// import { User } from "@prisma/client";
// import React, { cache, use } from "react";

// const getUsers = cache(() =>
//   fetch("http://localhost:3000/api/users").then((res) => res.json())
// );

// export default function ListUsers() {
//   let users = use<User[]>(getUsers());

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "1fr 1fr 1fr 1fr",
//         gap: 20,
//       }}
//     >
//       {users.map((user) => (
//         <div
//           key={user.id}
//           style={{ border: "1px solid #ccc", textAlign: "center" }}
//         >
//           <img
//             src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
//             alt={user.name}
//             style={{ height: 180, width: 180 }}
//           />
//           <h3>{user.name}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }
