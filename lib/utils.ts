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