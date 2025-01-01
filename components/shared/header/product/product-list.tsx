import React from 'react';
import {Product} from "@/lib/types";
import ProductCard from "@/components/shared/header/product/product-card";

function ProductList({data, title,limit}: { data: Product[], title?: string,limit?: number }) {
    const limitData = limit ? data.slice(0, limit) : data;
    return (
        <div className={`my-10`}>
            <h2 className={`h2-bold mb-4`}>{title}</h2>
            {data.length > 0 ? (
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2`}>
                    {
                        limitData.map((product) => (
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