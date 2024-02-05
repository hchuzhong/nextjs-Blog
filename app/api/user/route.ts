import { createUserSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createUserSchema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.errors, {status: 401});
    const user = await prisma.user.create({
        data: body
    })
    return NextResponse.json(user, {status: 201});
}