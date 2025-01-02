'use server'
import {signInFormSchema} from "@/lib/validators";
import {signIn, signOut} from "@/lib/auth";
import {isRedirectError} from "next/dist/client/components/redirect-error";

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
    return {success: true, message: 'Signed out Successfully'};
}
