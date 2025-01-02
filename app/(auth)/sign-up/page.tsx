import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
// import { redirect } from 'next/navigation';
// import { auth } from '@/lib/auth';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { APP_NAME } from '@/lib/constants';
import CredentialsSignUpForm from "@/app/(auth)/sign-up/credentials-signup-form";

export const metadata: Metadata = {
    title: 'Sign Up',
};
const SignUp = () => {
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
                        Select a method to sign in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                    {/* FORM HERE */}
                    <CredentialsSignUpForm/>
                </CardContent>
            </Card>
        </div>
    );
};

export default SignUp;