import React from 'react';
import { PRODUCTS } from "./products";
import FilterableProductTable from './FilterableProductTable';
import "./App.css";

const page = () => {
    return (
        <div className='container-main'>
            <head>
                <title>
                    React.JS 18!
                </title>
            </head>

            <FilterableProductTable products={PRODUCTS} />
        </div>
    )
};

export default page;