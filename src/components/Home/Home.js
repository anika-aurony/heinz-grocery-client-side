import React from 'react';
import Inventories from '../Inventories/Inventories';
import Banner from './Banner/Banner';
import Promises from './Promises/Promises';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Promises></Promises>
            
        </div>
    );
};

export default Home;