import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleProductDetails = () => {
    const products =useLoaderData();
    console.log(products)
    return (
        <div>
            <h2>ditale page</h2>
        </div>
    );
};

export default SingleProductDetails;