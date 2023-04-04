import React, { useEffect, useState } from 'react';
import AdItemBookingModal from './AdItemBookingModal';
import AdItems from './AdItems';

const AdvertiseItems = () => {

    const [items, setItems] = useState('')
    const [itemsModal, setItemsModal] = useState(null)

    useEffect(() => {
        fetch('https://resala-server.vercel.app/advertiseProduct')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className='my-6'>
            <div>
                <h1 className='mx-8 my-6 text-3xl font-bold text-slate-600'>Hot Deals</h1>
            </div>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 mx-8'>
                {
                    items.length && items.map(item => <AdItems
                        key={item._id}
                        item={item}
                        setItemsModal={setItemsModal}
                    ></AdItems>)
                }
            </div>
            {
                itemsModal &&
                <AdItemBookingModal
                    itemsModal={itemsModal}
                    setItemsModal={setItemsModal}
                ></AdItemBookingModal>
            }
        </div>
    );
};

export default AdvertiseItems;