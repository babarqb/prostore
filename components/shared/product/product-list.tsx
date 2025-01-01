import React from 'react';
import  { Product} from "@/types"
import ProductCard from "@/components/shared/product/product-card";

function ProductList({data, title}: { data: Product[], title?: string }) {
    return (
        <div className={`my-10`}>
            <h2 className={`h2-bold mb-4`}>{title}</h2>
            {data.length > 0 ? (
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3`}>
                    {
                        data.map((product:Product) => (
                            <ProductCard product={product} key={product.slug}/>
                        ))
                    }
                </div>
            ) : (
                <div>
                    <p>No product found</p>
                </div>
            )}
        </div>
    );
}

export default ProductList;