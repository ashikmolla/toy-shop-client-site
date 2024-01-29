import React from 'react';
import Swal from 'sweetalert2'

const OrderCat = ({ order, orders, setOrders }) => {
    const { _id, img, productName, currentDate, receiveDate, email, phone, price, quantity, locationTo } = order;





    const hendleDeleteItem = id => {
        const proceed = confirm("Are you sure want to delete");
        if (proceed) {
            fetch(`http://localhost:5000/orderProduct/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Delete SuccessFull',
                            'Have a allredy iteme deleted now , do not back Item ',
                            'success'
                        )
                        const updateOrder = orders.filter(order => order._id !== id)
                        setOrders(updateOrder)
                    }

                })
        }
    };
    const handleUpdate = id => {

        const location = id.target.locationTo.value;
        confirm({ location })

    }

    return (
        <tbody >
            {/* row 1 */}
            <tr>
                <td className='text-center'>
                    <button onClick={() => hendleDeleteItem(_id)} className="btn btn-sm btn-circle bg-black text-white hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </td>

                <td>

                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>


                </td>
                <td>
                    {productName}
                </td>
                <td className='font-sans'>
                    {email}
                    <br />
                    <span className="badge badge-ghost badge-sm">{phone}</span>
                </td>
                <td className='font-sans'>{price}
                    <br />
                    <span className="badge badge-ghost badge-sm">{quantity}</span>
                </td>
                <td className='font-sans'>{currentDate} <br /> {receiveDate}</td>
                <td className='font-sans w-2/6'>{locationTo}</td>



            </tr>

        </tbody>
    );
};

export default OrderCat;