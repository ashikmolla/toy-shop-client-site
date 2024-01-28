import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProviders';
import "./CheckOut.css"

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const products = useLoaderData();
    const { title, _id, price, img, name, rating } = products;



    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    // console.log(currentDate); 

    const productName = name;
    const handleProducts = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const phone = from.phone.value;
        const locationFrom = from.locationFrom.value;
        const locationTo = from.locationTo.value;
        const quantity = from.quantity.value;
        const totalPrice = price * quantity;


        const order = {
            service_id: _id,
            customerName: name,
            email,
            phone,
            locationFrom,
            locationTo,
            quantity,
            img,
            productName,
            price: totalPrice,
            currentDate
        }
        console.log(order)
        fetch('http://localhost:5000/orderProduct', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json)
            .then(data => {
                console.log(data)
            })


    }
   
    return (
        <div className='' >
            <div className='bg-base-200 pt-16pb-6 rounded' >
                <div className='text-center mb-10 text-2xl'>

                    <h1> <spen className="text-orange-500 text-4xl">O</spen>rder Now</h1>
                    <hr className=' text-orange-500 bg-orange-600 h-1 w-16 m-auto mb-4' />
                    <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam possimus sequi ipsa deleniti non!<br />Aspernatur doloribus quasi nihil saepe ut libero dicta ea a aut harum optio, <br />magni doloremque non? </p>

                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-1'>


                    <div className='w-full bg-white border rounded-3xl'>

                        <form onSubmit={handleProducts}>
                            <div className="card-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered font-sans" />
                                </div>



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>

                                    <input type="text" name='email' defaultValue={user?.email} className="input input-bordered font-sans" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="number" name='phone' defaultValue='018' className="input input-bordered font-sans"  />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location From</span>
                                    </label>
                                    <input type="text" name='locationFrom' className="input input-bordered font-sans" placeholder='From Send' />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location To </span>
                                    </label>
                                    <input type="text" name='locationTo' className="input input-bordered font-sans" placeholder='To Receive' />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="number" name='quantity' defaultValue={1} className="input input-bordered font-sans" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        {/* <span className="label-text">Price-</span>{price} */}
                                        <p className='label-text'>Price- <span className='font-sans'> {price}</span></p>
                                    </label>
                                    {/* <input name='price' value={user?.price} placeholder={price} className="input input-bordered" /> */}
                                    

                                </div>






                            </div>
                            <div className="card-body  gap-6 mt-0 pt-0">
                                <div className="form-control ">
                                    {/* <input className=" input input-bordered h-32 text-start" type="text" name='massage' placeholder="Your Massage" /> */}
                                    <textarea className='border rounded font-sans' name="massage" id="" cols="10" rows="5"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Order Confiram" className='btn bg-[#ff5300] hover:bg-[#ff8d57] btn-block' />
                                </div>
                            </div>
                        </form>

                    </div>

                    <div className="card w-10/12 mx-auto">
                        <figure><img className='w-7/12 mt-2 rounded cursor-pointer' src={img} alt="car!" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title ">{name}</h2>
                            <p>{title}</p>
                            <p className=''>
                                Rating:-  <spen className="text-orange-400 font-sans">{rating}</spen>
                            </p>
                            <p className=''>Price:- $ <span className='font-sans'>{price}</span> </p>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Checkout;