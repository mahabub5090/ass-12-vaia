import React from 'react';
import oilsyestem from '../../assets/service/oil.png'
import putAir from '../../assets/service/putAir.png'
import breaks from '../../assets/service/breaks.png'

const Tips = () => {
    return (
        <div>
            <div className='my-6 mx-4'>
                <h3 className='text-4xl font-bold'>Expert advice on car maintenance</h3>
                <p>Expert advice on car maintenance
                    Most popular car maintenance articles from <br /> our car-care experts.</p>
            </div>
            <div className='mx-4 my-4'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={oilsyestem} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">How Often Should I Change Engine Coolant?</h2>
                        <p>When is the right time to change your engine coolant? For some vehicles, you’re advised to change the coolant every 30,000 miles. For others, changing it isn’t even on the maintenance schedule.</p>
                    </div>
                </div>
            </div>
            <div className='mx-4 my-4'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={putAir} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">How to Properly Check and Put Air in Tires</h2>
                        <p>While it may seem like a mundane task, inflating tires is much more crucial to your car than you may think, and it results in a safer and more economical experience on the road. Proper tire inflation.</p>
                    </div>
                </div>
            </div>
            <div className='mx-4 my-4'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={breaks} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Why Are My Brakes Squealing?</h2>
                        <p> If you’re lucky, the squealing or squeaking noise that your brakes make when you first drive your car in the morning, particularly after rain or snow, is just surface rust being scraped off the rotors by.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tips;