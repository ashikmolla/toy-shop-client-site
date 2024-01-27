import React, { useEffect, useState } from 'react';
import ProductsCart from './ProductsCart';

const Products = () => {
    const [products, setProducts]=useState([]);
   useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res=> res.json())
    .then(data=>setProducts(data))
   },[])
   console.log(products)
    return (
        <div className=''>
            <div className='text-center mt-10 mx-auto'>
                <h1 className='font-bold text-2xl'>Amazing Products</h1>
                <hr className='w-20 orange rounded' />
                <p className='w-3/6 mx-auto text-slate-500 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda natus odio hic
                    <br />
                    voluptatum amet optio ex qui, facilis laborum recusandae.....</p>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 w-11/12 mx-auto">
                
                {
                    products.map(product=><ProductsCart
                    key={product._id}
                    product={product}
                    ></ProductsCart>)

                }
            </div>
        </div>
    );
};

export default Products;