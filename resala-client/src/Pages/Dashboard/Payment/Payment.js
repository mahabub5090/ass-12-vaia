import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const product = useLoaderData()

    const { itemName, itemPrice } = product

    return (
        <div>
            <h3 className="text-3xl font-bold mt-5 ml-4">Make Payment for: {itemName}</h3>
            <p className='text-xl mt-5 ml-4'>Please pay <strong>${itemPrice}</strong> for confirm your order.</p>
            <div className='card w-96 shadow-xl my-20 ml-4'>
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            product={product}
                        ></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;