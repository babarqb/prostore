import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Convert Prisma Object to regular object
export function convertToPlainObject<T>(value: T): T {
    return JSON.parse(JSON.stringify(value))
}

// format number with decimal
export function formatNumberWithDecimal(value: number) {
    const [int, decimal] = value.toString().split('.')
    return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`
}

// format errors
//eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError(error: any) {
    if (error.name === 'ZodError') {
        // handle zod error
        const filedErrors = Object.keys(error.errors).map((filed) => error.errors[filed].message);
        return filedErrors.join('. ');
    } else if (error.code === 'PrismaClientKnownRequestError' && error.code === 'P2002') {
        // handle prisma error
        const field = error.meta?.target ? error.meta?.target[0]: 'Filed';
        return `${field.charAt(0).toUpperCase() + field.slice(1)} is already taken`;
    } else {
        return  typeof error.message === 'string' ? error.message : JSON.stringify(error.message);
    }
}