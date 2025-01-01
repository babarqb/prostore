import {z} from 'zod';
import {formatNumberWithDecimal} from "@/lib/utils";

const currency =  z.string().refine(
    (val) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(val))),
    'Price must be a valid number with 2 decimal places(e.g., 49.99)'
);
// Schema for inserting Products
export const insertProductSchema = z.object({
    name: z.string().min(3,'name must b at least 3 characters.').max(255),
    slug: z.string().min(3,'Slug must b at least 3 characters.').max(255),
    category: z.string().min(3,'Category must b at least 3 characters.').max(255),
    brand: z.string().min(3,'Brand must b at least 3 characters.').max(255),
    description: z.string().min(3,'Description must b at least 3 characters.').max(255),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1,'At least one image is required.'),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency
});
