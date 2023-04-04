import React from 'react';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Categories></Categories>
           <AdvertiseItems></AdvertiseItems>
        </div>
    );
};

export default Home;