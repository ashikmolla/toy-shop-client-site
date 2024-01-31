import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ArrowDownRightIcon, ArrowRightStartOnRectangleIcon, BanknotesIcon, ClockIcon, CurrencyRupeeIcon, HandThumbUpIcon, HeartIcon, LinkIcon, LockClosedIcon, MapIcon, MapPinIcon, ShareIcon, ShieldExclamationIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'


const Details = () => {
    const products = useLoaderData();

    const { title, _id, price, img, name, rating } = products;
    console.log(name);
    const modulas = 10;
    const offer = price / 100 * modulas;
    const offerPrice = price - offer;

    const images = [
        'https://placekitten.com/300/200',
        'https://placekitten.com/301/200',
        'https://placekitten.com/302/200',
        'https://placekitten.com/303/200',
        // Add more images as needed
    ];


    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };
    const handleThumbnailHover = (index) => {
        setCurrentImage(index);
    };

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto">

            <div className=" md:pt-16 lg:pt-0">  

                <img className="w-full " src={images[currentImage]} alt={`slide ${currentImage}`} />
                <div className="w-0 h-0 hidden">
                    <button onClick={handlePrev} disabled={currentImage === 0}>

                    </button>
                    <button onClick={handleNext} disabled={currentImage === images.length - 1}>

                    </button>
                </div>

                <div className=" flex">
                    {images.map((image, index) => (
                        <img onClick={() => setCurrentImage(index)} key={index} src={image} alt={`thumbnail ${index}`}
                            className="w-14 mx-auto cursor-pointer flex-1"
                            onMouseEnter={() => handleThumbnailHover(index)}

                        />
                    ))}
                </div>

            </div>
            <div className=" relative ps-4 mt-3 sm:mb-9 md-mb-0">
                <p className="text-xl text-[#ff5200]">{title}</p>
                <h3 className="text-2xl font-bold">{name}</h3>
                <div className="flex mt-2">
                    <p>Brand <span className="text-[#ff5200]"> No Brand </span> 100% original </p>
                    <p>| Rating <span className="text-[#ff5200]">{rating}</span></p>


                </div>
                <p className="">Stock <span className="text-[#ff5200]">in</span></p>
                <p className='text-xl my-2'>Pricr:- ৳<spen className="text-orange-500 mx-1 font-sans"> {offerPrice}</spen><span className='line-through text-lg font-sans'>{price}({modulas}%)</span></p>
                <div className=" ">
                    <div className="absolute sm:-bottom-15 lg-bottom-5 flex">
                        <Link className='' to={`/checkout/${_id}`}>
                            <button className="btn bg-[#ff5300] hover:bg-[#0d00ff90] text-white rounded">Buy Now

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>

                        </Link>
                        <button className="btn bg-[#0d00ff90] hover:bg-[#ff5200] text-white rounded">
                            Add to Cart <ShoppingCartIcon className="h-6 w-6 text-white" />
                        </button>
                    </div>



                    <div className=" absolute right-3 bottom-10 ">
                        <p className="cursor-pointer hover:text-green-900 my-1">
                            <HandThumbUpIcon className="h-6 w-6 text-black" />
                        </p>
                        <p className="cursor-pointer hover:text-green-900 my-1">
                            <HeartIcon className="h-6 w-6 text-black" />
                        </p>
                        <p className="cursor-pointer hover:text-green-900 my-1">
                            <ShareIcon className="h-6 w-6 text-black" />
                        </p>
                    </div>
                </div>
            </div>


            <div className="p-4 ">
                <div>
                    <p className="text-[#716e6e]">Delivery</p>
                </div>
                <div className="flex my-3">
                    <MapPinIcon className=" w-6 mr-1 text-[#545353]" />
                    <p className="font-normal">Comilla, Barura, Jolom, Dewatali Road No 3 </p>
                </div>
                <div className="flex my-3">
                    <ArrowRightStartOnRectangleIcon className=" w-6 mr-1 text-[#545353]" />
                    <div>
                        <p className="text-black font-bold leading-3">Standard Delivery  <span className="ms-10"> ৳৫৫</span></p>
                        <p className="text-sm font-normal text-[#545353]">6-10 days(s)</p>
                    </div>
                </div>

                <div className="flex my-3 ">
                    <BanknotesIcon className=" w-6 mr-1 text-[#545353]" />
                    payment bkash nagad rocket sheworcash
                </div>
                <div className="flex my-3 pb-2 mb-2 border border-b-2 border-t-0 border-s-0 border-e-0">
                    <CurrencyRupeeIcon className=" w-6 mr-1 text-[#545353]" />
                    Cash on Delivery Available
                </div>
                <div className="">
                    <p className="text-[#545353] my-3">Service</p>

                </div>
                <div className="my-2 flex">
                    <ClockIcon className=" w-6 h-6 mr-1 text-[#545353]" />

                    <p className="font-bold leading-3">7 Dayse Returns <br />
                        <span className=" text-[#545353] text-sm font-normal">Change of Mind is not applicable</span></p>

                </div>
                <div className="flex my-3">
                    <ShieldExclamationIcon className="w-6 h-6 mr-1 text-[#545353]" />
                    <p className="font-bold">Warranty not available</p>
                </div>
     

            </div>

        </div>
    );
};

export default Details;
