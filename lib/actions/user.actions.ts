'use server'
import {signInFormSchema, signUpFormSchema} from "@/lib/validators";
import {signIn, signOut} from "@/lib/auth";
import {isRedirectError} from "next/dist/client/components/redirect-error";
import {hashSync} from "bcrypt-ts-edge";
import {prisma} from "@/db/prisma";
import {formatError} from "@/lib/utils";

//signing the user with credentials
export async function signInWithCredentials(preState: unknown, formData: FormData) {
    try {
        const user = signInFormSchema.parse({
            email: formData.get('email'),
            password: formData.get('password'),
        });
        await signIn('credentials', user);
        return {success: true, message: 'Signed in Successfully'};
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
        return {success: false, message: 'Invalid email or password'};
    }
}

// sign-out the user
export async function signOutUser() {
    await signOut();
    // return {success: true, message: 'Signed out Successfully'};
}
// sign-up the user
export async function signUpUser(preState: unknown, formData: FormData) {
    try {
        const user = signUpFormSchema.parse({
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        });
        const plainPassword = user.password;
        user.password = hashSync(plainPassword, 10);

        await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            },
        });
        await signIn('credentials', {
            email: user.email,
            password: plainPassword,
        });
        return {success: true, message: 'User register Successfully'};
    } catch (error) {

        if (isRedirectError(error)) {
            throw error;
        }
        return {success: false, message: formatError(error)};
    }
}