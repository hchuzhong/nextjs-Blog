import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createBlogSchema = z.object({
    title: z.string().min(1).max(255),
    content: z.string().min(1),
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createBlogSchema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.errors, {status: 401});
    const user = await prisma.post.create({
        data: {
            ...body,
            // TODO
            userId: 1
        }
    })
    return NextResponse.json(user, {status: 201});
}