import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='text-center space-y-3'>
                <p className='text-[#FF3811] font-bold'>Popular Products</p>
                <h2 className='text-3xl md:text-5xl font-bold'>Browse Our Products</h2>
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline  text-[#FF3811] ">More Products</button>
            </div>
        </div>
    );
};

export default Products;