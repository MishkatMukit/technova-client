import React from 'react';
import Product from './Products/Product';
import { Link } from 'react-router';

const FeaturedProducts = ({featuredProducts}) => {
    return (
        <div className='max-w-[90%] mx-auto py-12 border-b-2 border-b-gray-200'>
            <div className="text-center max-w-200 mx-auto mb-10 space-y-2 container">
                <h2 className="text-4xl font-bold text-secondary">
                    Our Featured Gadgets
                </h2>
                <p className="text-accent">
                    Find the items to your liking instantly
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4'>
                {
                    featuredProducts.map(product=>(
                        <Product key={product._id} product={product}></Product>
                    ))
                }
            </div>
            <div className='flex justify-center mt-10'>
                <Link className='btn btn-secondary ' to="/products">View All Products</Link>
            </div>
        </div>
    );
};

export default FeaturedProducts;