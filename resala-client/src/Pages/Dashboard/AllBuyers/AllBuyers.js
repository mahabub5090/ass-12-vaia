import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';
import BuyerDeletingModal from './BuyerDeletingModal';

const AllBuyers = () => {

    const [deletingBuyer, setDeletingBuyer] = useState(null)

    const closeModal = () => {
        setDeletingBuyer(null)
    }

    const { data: buyers, isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            try {
                const res = await fetch('https://resala-server.vercel.app/allBuyers', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json()
                return data;
            } catch (error) {

            }
        }
    })

    const handleDeleteBuyer = buyer => {
        console.log(buyer);
        fetch(`https://resala-server.vercel.app/allBuyers/${buyer._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('Seller deleted successfully')
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className=" text-3xl font-bold m-4"> All Buyers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.length && buyers.map((buyer, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <th>
                                    <label onClick={() => setDeletingBuyer(buyer)} htmlFor="confirmationModal" className="btn  btn-ghost bg-orange-600 btn-sm">Delete</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingBuyer && <BuyerDeletingModal
                    title={`Are you sure, you want to delete?`}
                    successAction={handleDeleteBuyer}
                    successButtonName="Delete"
                    modalData={deletingBuyer}
                    closeModal={closeModal}
                >
                </BuyerDeletingModal>
            }
        </div>
    );
};

export default AllBuyers;