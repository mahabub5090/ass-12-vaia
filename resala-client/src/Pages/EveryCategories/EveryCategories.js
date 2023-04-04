import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import BookingModal from './BookingModal/BookingModal';
import SingleCar from './SingleCar';

const EveryCategories = () => {

    const [bookingCar, setBookingCar] = useState(null)
    const cars = useLoaderData()
    // console.log(cars);

    const { data: singleCars = [], refetch, isLoading } = useQuery({
        queryKey: ['singleCars', cars.name],
        queryFn: () => fetch(`https://resala-server.vercel.app/cars/${cars.name}`)
            .then(res => res.json())
    })

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 my-12 mx-10'>
                {
                    singleCars?.length && singleCars?.map(car => <SingleCar
                        key={car._id}
                        car={car}
                        setBookingCar={setBookingCar}
                    ></SingleCar>)
                }
            </div>
            {
                bookingCar &&
                <BookingModal
                    bookingCar={bookingCar}
                    setBookingCar={setBookingCar}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default EveryCategories;