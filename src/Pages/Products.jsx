import React, { use, useEffect } from 'react';
import { DataContext } from '../Provider/AuthProvider/DataProvider';
import { FaPlus } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';
import Product from '../Components/Products/Product';
import Loading from '../Components/Loading/Loading';

const Products = () => {
    const { dbUser } = use(DataContext)
    const data = useLoaderData()
    const { products, setProducts } = use(DataContext)
    useEffect(() => {
        setProducts(data);
    }, [data, setProducts]);
    const isAdmin = dbUser?.role === "admin"
    return (
        <div className='mt-16 max-w-[90%] mx-auto' >
            <div >
                <button className='border-l-3 px-2 mt-10 font-bold text-lg'>All products</button>


                <div className='flex justify-center'>

                    {isAdmin && <Link to="/addproducts" className='btn btn-secondary m-5'>< FaPlus />Add Product</Link>}
                </div>

                <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto my-10 justify-items-center'>
                    {

                        products ? products.map(product => (
                            <Product key={product._id} product={product}></Product>
                        )) : <span className="loading loading-dots loading-xs"></span>
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;