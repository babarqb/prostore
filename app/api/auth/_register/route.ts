// import {NextRequest, NextResponse} from "next/server";

// export async function Post(req: NextRequest) {
//     try {
//         const {email, password} = await req.json();
//         if (!email || !password) {
//             return NextResponse.json(
//                 {error: 'email and password are required'},
//                 {status: 400});
//         }
//         // await connecttodatabase():
//         // const existinguser = await user.findone({email});
//         // if(existinguser) {
//         //     return nextresponse.json(
//         //         {error: 'user already exists'},
//         //         {status: 400});
//         // }
//         // await user.create({email, password, role: 'user'});
//         return NextResponse.json({message: 'user created'});
//     } catch (error) {
//         console.log('register error',error);
//         return NextResponse.json(
//             {error: 'something went wrong'},
//             {status: 500});
//     }
//
// }