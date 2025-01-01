export type Product = {
    name: string
    slug: string
    category: string
    description: string
    images: string[]
    price: never
    brand: string
    rating: number
    numReviews: number
    stock: number
    isFeatured: boolean
    banner: string
}