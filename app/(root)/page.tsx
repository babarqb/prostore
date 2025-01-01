import React from 'react';
// import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/header/product/product-list";
import {getLatestProducts} from "@/lib/actions/product.actions";

export const metadata = {
    title: 'Home'
};
// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const Homepage =async () => {
    // await delay(2000);
    const latestProducts = await  getLatestProducts();
    return (
        <>
            {/*<ProductList title={`New's Arrivals`} data={sampleData.products} limit={10}/>*/}
            <ProductList title={`New's Arrivals`} data={latestProducts}/>
        </>

    );
};

export default Homepage;