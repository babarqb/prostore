import React from 'react';
import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/header/product/product-list";

export const metadata = {
    title: 'Home'
};
// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const Homepage = () => {
    // await delay(2000);
    return (
        <>
            <ProductList title={`New's Arrivals`} data={sampleData.products} limit={10}/>
        </>

    );
};

export default Homepage;