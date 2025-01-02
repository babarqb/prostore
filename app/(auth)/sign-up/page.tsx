import {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {APP_NAME} from '@/lib/constants';
import {auth} from "@/lib/auth";
import {redirect} from "next/navigation";
import SignUpForm from "@/app/(auth)/sign-up/signup-form";

export const metadata: Metadata = {
    title: 'Sign Up',
};
const SignUpPage = async (props: {
    searchParams: Promise<{ callbackUrl: string; }>
}) => {
    const {callbackUrl} = await props.searchParams;
    const session = await auth();
    if (session) {
        return redirect(callbackUrl || '/');
    }
    return (
        <div className='w-full max-w-md mx-auto'>
            <Card>
                <CardHeader className='space-y-4'>
                    <Link href='/' className='flex-center'>
                        <Image
                            priority={true}
                            src='/images/logo.svg'
                            width={100}
                            height={100}
                            alt={`${APP_NAME} logo`}
                        />
                    </Link>
                    <CardTitle className='text-center'>Sign Up</CardTitle>
                    <CardDescription className='text-center'>
                        Enter your information to create an account
                    </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                    <SignUpForm/>
                </CardContent>
            </Card>
        </div>
    );
};

export default SignUpPage;