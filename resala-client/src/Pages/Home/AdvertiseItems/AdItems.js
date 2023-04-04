import React from 'react';

const AdItems = ({ item, setItemsModal }) => {
    const { image, location, name, title, newPrice, purchaseYear, condition, number } = item
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-60 ' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"><span className='font-bold'>Name:{name}</span><span className='bg-purple-200 rounded'>{title}</span></h2>
                <p>Price: ${newPrice}</p>
                <p>Condition: {condition}</p>
                <p>Location: {location}</p>
                <p>Purchase Year: {purchaseYear}</p>
                <p>For more details, Call: <span>{number}</span></p>
                <div className="card-actions justify-end">
                    <label onClick={() => setItemsModal( item )}
                        htmlFor="AdItemModal"
                        className="btn btn-accent w-full mx-2">
                        Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default AdItems;