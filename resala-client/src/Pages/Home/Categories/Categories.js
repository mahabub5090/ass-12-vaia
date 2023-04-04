import React, { useEffect, useState } from 'react';
import Catgo from './Catgo';

const Categories = () => {

    const [categories, setCategory] = useState([])

    useEffect(() => {
        fetch('https://resala-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div className='my-6'>
            <div>
                <p className='mx-8 my-6 text-3xl font-bold text-slate-600'>
                    Product Categories
                </p>
            </div>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 mx-8'>
                {
                    categories.map(category => <Catgo
                        key={category._id}
                        category={category}
                    ></Catgo>)
                }
            </div>
        </div>
    );
};

export default Categories;