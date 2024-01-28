import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProviders';

const Order = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/orderProduct?email=${user.email}`;
    const [product, setProduct] = useState()
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
        
    }, [])
    console.log(product)

    const data = useLoaderData();
    // console.log(data)
    return (
        <div className='p-0 w-full'>

        </div>
    );
};

export default Order;