// import {withAuth} from "next-auth/middleware";
// import {NextResponse} from "next/server";
//
// export default withAuth(
//     function middleware() {
//         return NextResponse.next();
//     },
//     {
//         callbacks: {
//             authorized: ({token, req}) => {
//                 const {pathname} = req.nextUrl;
//                 //Allow access to /api/webhook
//                 if (pathname.startsWith("/api/webhook")) {
//                     return true;
//                 }
//                 //Allow access to /api/auth
//                 if (pathname.startsWith("/api/auth") ||
//                     pathname.startsWith("/api/auth/signin") ||
//                     pathname.startsWith("/api/auth/signout")) {
//                     return true;
//                 }
//                 //allow access to public url
//                 if (pathname.startsWith("/") ||
//                     pathname.startsWith("/api/products") ||
//                     pathname.startsWith("/products")) {
//                     return true;
//                 }
//                 //Allow access to /admin
//                 if (pathname.startsWith("/admin")) {
//                     return token?.role === "admin";
//                 }
//                 //Allow other routes to be accessed only if the user is authenticated
//                 return !!token;
//             }
//         }
//     }
// )
// export const config = {
//     matcher:[
//         /*
//          * Match all request paths excepts;
//          *- _next/static - Next.js static assets
//          * - _next/image - Next.js image component
//          * - favicon.ico - Favicon
//          * - public - Public folder
//          */
//         "/((?!_next/static|_next/image|favicon.ico|public/).*)",
//     ]
// }