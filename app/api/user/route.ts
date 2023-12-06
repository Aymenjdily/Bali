import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
    const body = await request.json()

    const { username, password, email } = body 

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
        data: {
            password: hashedPassword,
            username: username,
            email: email
        }
    })

    return NextResponse.json(newUser, { status:201 })
}