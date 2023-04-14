"use client";
import React, { FC, useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

interface Props {
    products: Product[];
}

const FilterableProductTable: FC<Props> = ({ products }) => {

    const [filterText, setFilterText] = useState<string>("");

    const [inStockOnly, setInStockOnly] = useState<boolean>(false);

    return (
        <div>
            <SearchBar />
            <ProductTable />
        </div>
    )
};

export default FilterableProductTable;