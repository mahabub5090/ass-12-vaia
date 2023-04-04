import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyProducts = () => {

    const [deletingProduct, setDeletingProduct] = useState(null)

    const closeModal = () => {
        setDeletingProduct(null)
    }

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('https://resala-server.vercel.app/products', {
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

    const handleDeleteProduct = product => {
        console.log(product);
        fetch(`https://resala-server.vercel.app/products/${product._id}`, {
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
                    toast.success('Product deleted successfully')
                }
            })
    }

    const handleAdvertise = (product) => {
        console.log(product);
        fetch('https://resala-server.vercel.app/advertiseProduct', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your item is advertised')
                }
                console.log(data);
            })
    }

    const handleUpdate = (id) => {
        fetch(`https://resala-server.vercel.app/products/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl font-bold m-4">You have: {products?.length} products</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length && products.map((product) => <tr key={product._id}>
                                <th>
                                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmationModal" className="btn  btn-ghost bg-orange-600 btn-sm">Delete</label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product?.image} alt="product img" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {product.title}
                                </td>
                                <td>${product.price}</td>
                                <td>
                                    {
                                        product.status !== 'sold' &&
                                        <button onClick={() => handleUpdate(product._id)}
                                            className="btn btn-ghost bg-green-300 btn-sm">
                                            Available</button>
                                    }
                                    {
                                        product.status === 'sold' &&
                                        <button onClick={() => handleUpdate(product._id)}
                                            className="btn btn-ghost bg-orange-300 btn-sm">
                                            Sold</button>
                                    }
                                </td>
                                <th>
                                    {
                                        product?.status === 'sold' &&
                                        <button disabled onClick={() => handleAdvertise(product)}
                                            className="btn btn-ghost bg-sky-300 btn-sm">
                                            Advertise</button>
                                    }
                                    {
                                        product?.status !== 'sold' &&
                                        <button onClick={() => handleAdvertise(product)}
                                            className="btn btn-ghost bg-sky-300 btn-sm">
                                            Advertise</button>
                                    }
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure, you want to delete?`}
                    successAction={handleDeleteProduct}
                    successButtonName="Delete"
                    modalData={deletingProduct}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;