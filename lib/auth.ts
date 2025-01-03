import NextAuth from "next-auth";
import type {NextAuthConfig} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {prisma} from '@/db/prisma'
import {PrismaAdapter} from "@auth/prisma-adapter";
import {compareSync} from "bcrypt-ts-edge";


export const config = {
    pages: {
        signIn: "/signIn",
        error: "/error",
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    adapter: PrismaAdapter(prisma) as NextAuthConfig["adapter"],
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider(
            {
                name: "Credentials",
                credentials: {
                    email: {label: "Email", type: "email", placeholder: "email"},
                    password: {
                        label: "Password",
                        type: "password",
                        placeholder: "password"
                    }
                },
                async authorize(credentials) {
                    if (!credentials.email || !credentials.password) {
                        throw new Error("Missing credentials")
                    }
                    // find user in db
                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials.email as string
                        }
                    })
                    // check if user exists and password is correct
                    if (user && user.password) {
                        const isMatch = compareSync(credentials.password as string, user.password)
                        // if password is match return user
                        if (isMatch) {
                            return {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                role: user.role
                            }
                        }
                    }
                    return null
                }
            }
        ),
    ],
    callbacks: {
        async session({session, user, trigger, token}) {
            session.user.id = token.sub as string;
            session.user.role = token.role as string;
            session.user.name = token.name as string;
            if (trigger === "update") {
                session.user.name = user.name
            }
            return session
        },
        async jwt({token, user}) {
            if (user) {
                token.role = user.role
                if (user.name === 'NO_NAME') {
                    token.name = user.email!.split('@')[0];
                    await prisma.user.update({
                        where: {
                            id: user.id
                        },
                        data: {
                            name: token.name
                        }
                    })
                }
            }
            return token
        }
    },
} satisfies NextAuthConfig;
export const {handlers, auth, signIn, signOut} = NextAuth(config);


// import {NextAuthOptions} from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
//
//
// export const authOptions: NextAuthOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: {label: "Email", type: "email", placeholder: "email"},
//                 password: {
//                     label: "Password",
//                     type: "password",
//                     placeholder: "password"
//                 }
//             },
//             async  authorize(credentials) {
//                 // if (!credentials?.email || !credentials?.password) {
//                 //     throw new Error("Missing credentials")
//                 // }
//                 // try {
//                 //     await connectToDatabase();
//                 //     const user = await UserModel.findOne({email: credentials.email});
//                 //     if (user && bcrypt.compareSync(credentials.password, user.password)) {
//                 //         return {
//                 //             id: user._id.toString(),
//                 //             email: user.email,
//                 //             role: user.role
//                 //         }
//                 //     }
//                 // } catch (e) {
//                 //     throw new Error("Invalid credentials")
//                 // }
//             }
//         }),
//     ],
//     callbacks: {
//         async jwt(token, user) {
//             if (user) {
//                 token.id = user.id;
//                 token.role = user.role;
//             }
//             return token;
//         },
//         async session(session, token) {
//             session.user.id = token.id as string;
//             session.user.role = token.role as string;
//             return session;
//         }
//     },
//     pages: {
//         signIn: "/auth/signin",
//         signOut: "/auth/signout",
//         error: "/auth/error",
//         verifyRequest: "/auth/verify-request",
//     },
//     session:{
//         strategy: "jwt",
//         maxAge: 30 * 24 * 60 * 60,
//     },
//     secret: process.env.NEXTAUTH_SECRET
//
// }