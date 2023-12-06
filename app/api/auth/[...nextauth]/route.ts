import NextAuth from "next-auth";
import  CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label:"Email", type:"email", placeholder: "John@gmail.com" },
                password: { label:"Password", type:"password" }
            },
            //@ts-ignore
            async authorize(credentials) {
                if(!credentials?.email || !credentials.password) {
                    return null
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if(!user){
                    return null
                }
                const passwordsMatch = await bcrypt.compare(credentials.password, user?.password!)
                if(!passwordsMatch){
                    return null
                }
                return user
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development"
}
//@ts-ignore
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }