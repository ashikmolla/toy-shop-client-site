import React from 'react';
import { Link } from 'react-router-dom';
// import img from '../../../assets/images.jpg'

const ProductsCart = ({product}) => {
    // console.log(product)
    const {_id, title, name, img, price, rating}=product;
    const modulas = 10;
    const offer=price / 100 * modulas;
    const offerPrice=price - offer;
    return (
        <div className="card border border-b-0  hover:shadow-lg relative">
            <figure className='p-3 my-3 cursor-pointer'><img src={img} alt="car!" /></figure>
            <div className=''>
                <div className="card-actions ">
                    <div className=' px-3 mb-14'>
                        <h2 className="card-title">{name}</h2>
                        <p>{title}</p>
                        <p className='text-xl'>Pricr:-<spen className="text-orange-500 mx-1 font-sans"> {offerPrice}</spen><span className='line-through text-lg font-sans'>{price}({modulas}%)</span></p>
                        <p className='text-xl'>Rating:-<spen className="text-orange-500 font-sans">{rating}</spen></p>
                    </div>
                    {/* <Link className='w-full absolute bottom-0' to={`/singleProductDetails/${_id}`}> */}
                    <Link className='w-full absolute bottom-0' to={`/checkout/${_id}`}>
                        <button className="btn bg-[#ff5300] hover:bg-[#ff8d57] text-white w-full rounded-tl-none rounded-tr-none">Vew Details

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCart;