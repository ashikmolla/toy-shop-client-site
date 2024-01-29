import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const products = useLoaderData();
    const { title, _id, price, img, name, rating } = products;
    return (
        <div>
           

        </div>
    );
};

export default Details;