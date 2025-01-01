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