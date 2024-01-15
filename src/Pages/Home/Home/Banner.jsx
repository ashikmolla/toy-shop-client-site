import React from 'react';
import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import banner3 from '../../../assets/banner/banner3.jpg'
import banner4 from '../../../assets/banner/banner4.jpg'
import banner5 from '../../../assets/banner/banner5.jpg'
import banner6 from '../../../assets/banner/banner6.jpg'
import banner7 from '../../../assets/banner/banner7.jpg'
import { Link } from 'react-router-dom';


const productLink = <div className="flex gap-5">
    <Link to='product'>
        <button className="btn bg-error border-none btn-warning ">Discover More</button>
    </Link>
</div>

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px] ">

            <div id="slide1" className="carousel-item relative w-full ">
                <img src={banner1} className="w-full  rounded-lg" />
                {/* {bannerDatails} */}
                <div className="absolute rounded-lg flex items-center h-full bg-gradient-to-r from-[#151515]">
                    <div className=' text-white be space-y-7 w-[750px] pl-20'>
                        <h1 className='text-5xl font-bold w-2/3'>Toys cricket is an exciting</h1>
                        <p className='lg:w-2/3 w-1/3'>Toys cricket cricket is an exciting, fast paced and extremely addictive indoor/outdoor paddle game. Serve to the other player and rally back and forth.</p>
                        {productLink}
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle btn-outline btn-warning">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-outline btn-warning">❯</a>
                </div>
            </div>


            {/* second slider */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-lg" />
                {/* {bannerDatails} */}
                <div className="absolute rounded-lg flex items-center h-full bg-gradient-to-r from-[#151515]">
                    <div className=' text-white be space-y-7 w-[750px] pl-20'>
                        <h1 className='text-5xl font-bold w-2/3'>Toys Football is an exciting</h1>
                        <p className='lg:w-2/3 w-1/3'>Toys football is an exciting, fast paced and extremely addictive indoor/outdoor paddle game. Serve to the other player and rally back and forth.</p>
                        {productLink}
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide1" className="btn btn-circle btn-outline btn-warning">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-outline btn-warning">❯</a>
                </div>
            </div>

            {/*  athrid slider */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-lg" />
                {/* {bannerDatails} */}

                <div className="absolute rounded-lg flex items-center h-full bg-gradient-to-r from-[#151515]">
                    <div className=' text-white be space-y-7 w-[750px] pl-20'>
                        <h1 className='text-5xl font-bold w-2/3'>Toys Badminton is an exciting</h1>
                        <p className='lg:w-2/3 w-1/3'>Toys Badminton is an exciting, fast paced and extremely addictive indoor/outdoor paddle game. Serve to the other player and rally back and forth.</p>
                        {productLink}
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle btn-outline btn-warning">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-outline btn-warning">❯</a>
                </div>
            </div>



            {/* for section  */}
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-lg" />
                {/* {bannerDatails} */}

                <div className="absolute rounded-lg flex items-center h-full bg-gradient-to-r from-[#151515]">
                    <div className=' text-white be space-y-7 w-[750px] pl-20'>
                        <h1 className='text-5xl font-bold w-2/3'>Toys Hockey is an exciting</h1>
                        <p className='lg:w-2/3 w-1/3'>Toys Hockey is an exciting, fast paced and extremely addictive indoor/outdoor paddle game. Serve to the other player and rally back and forth.</p>
                        {productLink}
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle btn-outline btn-warning">❮</a>
                    <a href="#slide5" className="btn btn-circle btn-outline btn-warning">❯</a>
                </div>
            </div>

            {/* five section  */}

            <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full rounded-lg" />
                {/* {bannerDatails} */}

                <div className="absolute rounded-lg flex items-center h-full bg-gradient-to-r from-[#151515]">
                    <div className=' text-white be space-y-7 w-[750px] pl-20'>
                        <h1 className='text-5xl font-bold w-2/3'>Toys Volleyball is an exciting</h1>
                        <p className='lg:w-2/3 w-1/3'>Toys Volleyball is an exciting, fast paced and extremely addictive indoor/outdoor paddle game. Serve to the other player and rally back and forth.</p>
                        {productLink}
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle btn-outline btn-warning">❮</a>
                    <a href="#slide6" className="btn btn-circle btn-outline btn-warning">❯</a>
                </div>
            </div>

            {/* six section */}

            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full rounded-lg" />
                {/* {bannerDatails} */}

                <div className="absolute rounded-lg flex items-center h-full bg-gradient-to-r from-[#151515]">
                    <div className=' text-white be space-y-7 w-[750px] pl-20'>
                        <h1 className='text-5xl font-bold w-2/3'>Toys Tennis Ball is an exciting</h1>
                        <p className='lg:w-2/3 w-1/3'>Toys Tennis Ball is an exciting, fast paced and extremely addictive indoor/outdoor paddle game. Serve to the other player and rally back and forth.</p>
                        {productLink}
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle btn-outline btn-warning">❮</a>
                    <a href="#slide7" className="btn btn-circle btn-outline btn-warning">❯</a>
                </div>
            </div>

            {/* seven section  */}
            <div id="slide7" className="carousel-item relative w-full">
                <img src={banner7} className="w-full rounded-lg" />
                {/* {bannerDatails} */}

                <div className="absolute rounded-lg flex items-center h-full bg-gradient-to-r from-[#151515]">
                    <div className=' text-white be space-y-7 w-[750px] pl-20'>
                        <h1 className='text-5xl font-bold w-2/3'>Toys Basketball is an exciting</h1>
                        <p className='lg:w-2/3 w-1/3'>Toys Basketball is an exciting, fast paced and extremely addictive indoor/outdoor paddle game. Serve to the other player and rally back and forth.</p>
                        {productLink}
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" className="btn btn-circle btn-outline btn-warning">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-outline btn-warning">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;