import React, { use } from 'react';
import Banner from '../Components/Banner';
import Faq from '../Components/Faq';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import FeaturedProducts from '../Components/FeaturedProducts';
import { useLoaderData } from 'react-router';
import { DataContext } from '../Provider/AuthProvider/DataProvider';

const Home = () => {
    const featuredProducts = useLoaderData()
    const {user} = use(AuthContext)
    const {dbUser} = use(DataContext)

    console.log("database",dbUser)
    console.log("firebase",user);
    return (
        <div className='mt-16'>
            <Banner></Banner>
            <FeaturedProducts featuredProducts={featuredProducts} ></FeaturedProducts>
            <Faq></Faq>
        </div>
    );
};

export default Home;