import React from 'react';
import {cn} from "@/lib/utils";

function ProductPrice({value,className}: {value: number, className?: string}) {
    // ensure two decimal places
    const price = value.toFixed(2);
    //Get int/decimal parts
   const [intValue,floatValue]= price.split('.');
    return (
        <p className={cn('text-2xl',className)}>
           <span className={`text-xs align-super`}>$</span>
            {intValue}
            <span className={`text-xs align-super`}>.{floatValue}</span>
        </p>
    );
}

export default ProductPrice;