import React, { useContext } from 'react';
import { ProductDataContext } from '../Context/ProductContext';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const productData = useContext(ProductDataContext);
    const { id } = useParams()
    const selectedProduct = productData.find((elem) => id == elem.id)
    


    return (
        <div className='flex flex-col items-center justify-center gap-4 bg-zinc-700 min-h-screen'>
            <img src={selectedProduct.image} alt="" />
            <h2 className='font-sans font-bold text-3xl text-white text-center'>{selectedProduct.title}</h2>
            <h5 className='font-sans font-semibold text-sm text-white text-center'>${selectedProduct.price}</h5>
        </div>
    );
}

export default ProductDetail;
