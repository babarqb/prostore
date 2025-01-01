'use server'
import {prisma} from '@/db/prisma'
import {convertToPlainObject} from "@/lib/utils";
import {LATEST_PRODUCTS_LIMIT} from "@/lib/constants";
// Get  latest products
export const getLatestProducts = async () => {
    const products = await prisma.product.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        take: LATEST_PRODUCTS_LIMIT
    })
    prisma.$disconnect()
    return convertToPlainObject(products)
}
// get single product by its slug
export const getProductBySlug = async (slug: string) => {
    const product = await prisma.product.findUnique({
        where: {
            slug
        }
    })
    prisma.$disconnect()
    return convertToPlainObject(product)
}