import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../../assets/images/bmw5.jpg'

const Catgo = ({ category }) => {

    const { _id, title, description } = category
    // console.log(category);

    return (
        <>
            <div className="card w-96 image-full">
                <figure><img src={background} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/category/${_id}`}><button className="btn btn-info shadow-md">View Cars</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Catgo;