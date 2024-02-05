import { createBlogSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createBlogSchema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.format(), {status: 401});
    const user = await prisma.post.create({
        data: {
            ...body,
            // TODO
            userId: 1
        }
    })
    return NextResponse.json(user, {status: 201});
}