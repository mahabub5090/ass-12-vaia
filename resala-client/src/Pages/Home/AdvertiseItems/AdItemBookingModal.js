import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const AdItemBookingModal = ({ itemsModal, setItemsModal }) => {

    const { user } = useContext(AuthContext)
    const { title, image, newPrice, number } = itemsModal
    console.log(itemsModal);

    const handleItemBooking = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const itemPrice = form.itemPrice.value;
        const number = form.number.value;
        const meetingLocation = form.meetingLocation.value;

        const booking = {
            userName: name,
            userEmail: email,
            itemName,
            itemPrice,
            number,
            meetingLocation
        }
        console.log(booking);

        fetch('https://resala-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.acknowledged)
                if (data.acknowledged) {
                    setItemsModal(null)
                    toast.success("Booking Confirm")
                }
            })

    }


    return (
        <>
            < input type="checkbox" id="AdItemModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="AdItemModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={image} alt="" />
                    <form onSubmit={handleItemBooking} className='grid grid-cols-1 gap-2'>
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} disabled name='name' placeholder="User Name" className="input input-bordered w-full text-lg font-bold" />
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} disabled name='email' placeholder="User Email" className="input input-bordered w-full text-lg font-bold" />
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input type="text" name='itemName' value={title} disabled placeholder="Type here" className="input input-bordered w-full text-lg font-bold" />
                        <label className="label">
                            <span className="label-text">Item Price</span>
                        </label>
                        <input type="text" name='itemPrice' value={newPrice} disabled placeholder="Item Price" className="input input-bordered w-full text-lg font-bold" />
                        <label className="label">
                            <span className="label-text">Sellers Contact Number</span>
                        </label>
                        <input type="text" name='number' value={number} disabled placeholder="Phone Number" className="input input-bordered w-full" />
                        <label className="label">
                            <span className="label-text">Meeting Location</span>
                        </label>
                        <input type="text" name='meetingLocation' placeholder="Location" className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn-ghost bg-sky-400 w-full mx-w-xs' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AdItemBookingModal;