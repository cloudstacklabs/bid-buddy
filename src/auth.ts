import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import google from "next-auth/providers/google"
import { database } from "./db/database"
import { accounts, sessions, users, verificationTokens } from "./db/schema"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(database, {
        usersTable: users,
        accountsTable: accounts,
        sessionsTable: sessions,
        verificationTokensTable: verificationTokens,
    }),
    providers: [
        google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ],
})