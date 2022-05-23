import React from 'react';
import Inventories from '../Inventories/Inventories';
import About from './About/About';
import Banner from './Banner/Banner';
import Promises from './Promises/Promises';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Promises></Promises>
            <About></About>
            
        </div>
    );
};

export default Home;