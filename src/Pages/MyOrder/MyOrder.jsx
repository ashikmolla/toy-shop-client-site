import React from 'react';
import { useLoaderData } from 'react-router-dom';


const MyOrder = () => {
    const product =useLoaderData();
    
    return (
        <div>
             hello My order
        </div>
    );
};

export default MyOrder;