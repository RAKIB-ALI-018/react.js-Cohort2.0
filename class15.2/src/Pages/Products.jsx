import React, { useContext } from 'react';
import { ProductDataContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';

const Products = () => {
    const productData = useContext(ProductDataContext);
    let renderData = ''
    if (productData.length > 0) {
        renderData = productData.map(function (elem, idx) {
            return <Link key={idx} href=""
                to={`/products/${elem.id}`} className='w-65 bg-zinc-600 h-72 py-5 px-2  rounded-2xl ' >
                <div className='h-full w-full flex flex-col items-center justify-between'>
                    <img src={elem.image} alt="" className='h-40 object-center' />
                    <h2 className='font-sans font-semibold text-sm text-white text-center'>{elem.title}</h2>
                </div>
            </Link>
        })
    }

    return (
        <div className='bg-zinc-800 min-h-screen flex flex-wrap items-center justify-center gap-4 p-6'>
            {renderData }
        </div>
    );
}

export default Products;