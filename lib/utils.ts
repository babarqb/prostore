import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// Convert Prisma Object to regular object
export function convertToPlainObject<T>(vlaue: T): T {
  return JSON.parse(JSON.stringify(vlaue))
}