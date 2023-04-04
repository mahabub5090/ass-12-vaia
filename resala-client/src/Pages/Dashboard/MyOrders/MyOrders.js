import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext)

    const url = (`https://resala-server.vercel.app/bookings?email=${user?.email}`)

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    const cars = useLoaderData()
    console.log(cars);


    if (loading) {
        <Loading></Loading>
    }

    return (
        <div>
            <div>
                <h3 className="text-3xl font-bold mx-3 my-4">My Orders</h3>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Car Image</th>
                                <th>Car Name</th>
                                <th>Price</th>
                                <th>Make Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.length && bookings.map((booking) => <tr key={booking._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    {
                                                        cars?.length && cars.map(car =>
                                                            <img src={car?.image} alt='' />)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {booking.itemName}
                                    </td>
                                    <td>
                                        <p>$<span>{booking.itemPrice}</span></p>
                                    </td>
                                    <th>
                                        {
                                            !booking.paid && <Link to=
                                                {`/dashboard/payment/${booking._id}`}>
                                                <button className="btn btn-ghost  bg-sky-300 btn-sm">Pay</button>
                                            </Link>
                                        }
                                        {
                                            booking.paid && <span className="btn btn-ghost  bg-green-200 btn-sm">Paid</span>
                                        }
                                    </th>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default MyOrders;