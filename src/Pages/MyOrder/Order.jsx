import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProviders';
import OrderCat from './OrderCat';

const Order = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const url = `http://localhost:5000/orderProduct?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])

    return (

        <div className=" md:w-10/12 mx-auto">
            <table className="table">
                {/* head */}
                <thead className='bg-base-200'>
                    <tr>
                        <th></th>
                        <th>Images</th>
                        <th>Service Name</th>
                        <th>Contacts</th>
                        <th>Price <br /> Quantity</th>
                        <th> Order Date <br /> Receiv Date</th>
                        <th className='text-center'>Address</th>
                    </tr>
                </thead>
                {
                    orders.map(order => <OrderCat
                        key={order._id}
                        order={order}
                        orders={orders}
                        setOrders={setOrders}
                    ></OrderCat>)
                }


            </table>
        </div>

    );
};

export default Order;