import React from 'react';
import ProductList from "@/components/shared/product/product-list";
import {getLatestProducts} from "@/lib/actions/product.actions";

export const metadata = {
    title: 'Home'
};
// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const Homepage =async () => {
    // await delay(2000);
    const latestProducts = await  getLatestProducts();
    return (
        <div className={``}>
            {/*<h2 className={`h2-bold`}>Latest Products</h2>*/}
            {/*<ProductList title={`New's Arrivals`} data={sampleData.products} limit={10}/>*/}
            <ProductList title={`New's Arrivals`} data={latestProducts}/>
        </div>

    );
};

export default Homepage;