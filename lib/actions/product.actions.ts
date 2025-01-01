'use server'
import {PrismaClient} from '@prisma/client'
import {convertToPlainObject} from "@/lib/utils";
import {LATEST_PRODUCTS_LIMIT} from "@/lib/constants";
// Get  latest products
export const getLatestProducts = async () => {
    const prisma = new PrismaClient()
    const products = await prisma.product.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        take: LATEST_PRODUCTS_LIMIT
    })
    prisma.$disconnect()
    return convertToPlainObject(products)
}