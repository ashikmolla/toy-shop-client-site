import React from 'react';
import Banner from './Banner';
import OurService from './OurService';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div className='p-0 w-full'>
            <Banner/>
            <Products/>
            <OurService/>
        </div>
    );
};

export default Home;