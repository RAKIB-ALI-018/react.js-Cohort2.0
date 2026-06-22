import React, { useState, useEffect, createContext } from 'react';
import { getAllProductData } from '../Api/ProductApi';

export const ProductDataContext = createContext();

const ProductContext = (props) => {
    const [productData, setProductData] = useState([]);

    const setdata = async () => {
        const data = await getAllProductData()
        setProductData(data)

    }

    useEffect(() => {
        setdata();
    }, []);

    return (
        <ProductDataContext.Provider value={productData}>
            {props.children}
        </ProductDataContext.Provider>
    );
}

export default ProductContext;