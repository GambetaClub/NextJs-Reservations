import GoogleProvider from "next-auth/providers/google";
import prisma from "@/prisma/client"
import { PrismaAdapter } from '@auth/prisma-adapter';

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET as string,
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ]
}