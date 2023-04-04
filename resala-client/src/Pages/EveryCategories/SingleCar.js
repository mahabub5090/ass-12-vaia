import React from 'react';

const SingleCar = ({ car, setBookingCar }) => {

    const { image,
        name,
        location,
        original_price,
        resale_price,
        years_of_use,
        time_it_posted,
        seller_name
    } = car

    return (
        <div className="card card-compact w-full  shadow-xl">
            <figure><img src={image} alt="Car" /></figure>
            <div className="card-body mx-7">
                <h2 className="card-title">{name}</h2>
                <p><span className='font-bold'>Location:</span><span className='ml-1'>{location}</span></p>
                <p><span className='font-bold'>Original Price:</span><span className='ml-1'>${original_price}</span></p>
                <p><span className='font-bold'>Resale Price:</span><span className='ml-1'>${resale_price}</span></p>
                <p><span className='font-bold'>Years Of Use:</span><span className='ml-1'>{years_of_use}</span></p>
                <p><span className='font-bold'>Time It Get Posted:</span><span className='ml-1'>{time_it_posted}</span></p>
                <p><span className='font-bold'>Seller Name:</span><span className='ml-1'>{seller_name}</span></p>
                <div className="card-actions justify-end">
                    <label onClick={() => setBookingCar(car)}
                        htmlFor="booking-modal"
                        className="btn btn-accent w-full"
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default SingleCar;