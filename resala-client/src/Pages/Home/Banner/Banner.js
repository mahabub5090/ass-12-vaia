import React from 'react';
import { Link } from 'react-router-dom';
import car from '../../../assets/logo/car.gif'

const Banner = () => {
    return (
        <div className="hero bg-base-200 mb-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                <img src={car} alt='' className=" rounded-lg" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-4xl font-bold">Welcome to Bangladesh’s largest car selling platform for buy and sell cars.</h1>
                    <div className="py-6">
                        <p>We sale second hand cars. Best in condition also affordable in price. You may get your desire car with an affordable price</p>
                    </div>
                    <div className='flex my-10 gap-4'>
                        <Link to='' className="btn btn-ghost bg-green-300 m-2">Start Buying</Link>
                        <Link to='' className="btn btn-ghost bg-blue-400 m-2">Start Selling</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;