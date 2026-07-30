import React, { use, useEffect, useState, useMemo } from 'react';
import { DataContext } from '../Provider/AuthProvider/DataProvider';
import { FaPlus } from 'react-icons/fa6';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import Product from '../Components/Products/Product';

const Products = () => {
    const { dbUser } = use(DataContext)
    const data = useLoaderData()
    const { products, setProducts } = use(DataContext)

    const [searchText, setSearchText] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [availability, setAvailability] = useState("all")

    useEffect(() => {
        setProducts(data);
    }, [data, setProducts]);

    const categories = useMemo(() => {
        if (!data) return []
        return [...new Set(data.map(p => p.category).filter(Boolean))]
    }, [data])

    const filteredProducts = useMemo(() => {
        if (!products) return []
        return products.filter(product => {
            if (searchText) {
                const term = searchText.toLowerCase()
                const inName = product.name?.toLowerCase().includes(term)
                const inDetails = product.details?.toLowerCase().includes(term)
                if (!inName && !inDetails) return false
            }
            if (selectedCategory && product.category !== selectedCategory) return false
            if (minPrice && product.price < Number(minPrice)) return false
            if (maxPrice && product.price > Number(maxPrice)) return false
            if (availability === "inStock" && (product.status !== "active" || !product.quantity || product.quantity <= 0)) return false

            return true
        })
    }, [products, searchText, selectedCategory, minPrice, maxPrice, availability])

    const clearFilters = () => {
        setSearchText("")
        setSelectedCategory("")
        setMinPrice("")
        setMaxPrice("")
        setAvailability("all")
    }

    const hasActiveFilters = searchText || selectedCategory || minPrice || maxPrice || availability !== "all"

    const isAdmin = dbUser?.role === "admin"
    return (
        <div className='mt-16 max-w-[90%] mx-auto' >
            <div>
                <button className='border-l-3 px-2 mt-10 font-bold text-lg'>All products</button>

                {/* Search & Filters */}
                <div className='flex flex-wrap items-center gap-3 my-5 p-4 bg-base-200 rounded-box'>
                    {/* Search */}
                    <div className='join flex-1 min-w-[200px]'>
                        <div className='join-item flex items-center bg-base-100 px-3'>
                            <FaSearch className='text-accent' />
                        </div>
                        <input
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                            className='input join-item input-bordered w-full'
                            type="text"
                            placeholder='Search products...'
                        />
                    </div>

                    {/* Category */}
                    <select
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                        className='select select-bordered min-w-[140px]'
                    >
                        <option value="">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                    {/* Price Range */}
                    <div className='flex items-center gap-1'>
                        <input
                            value={minPrice}
                            onChange={e => setMinPrice(e.target.value)}
                            className='input input-bordered w-20'
                            type="number"
                            placeholder='Min'
                            min="0"
                        />
                        <span className='text-accent'>-</span>
                        <input
                            value={maxPrice}
                            onChange={e => setMaxPrice(e.target.value)}
                            className='input input-bordered w-20'
                            type="number"
                            placeholder='Max'
                            min="0"
                        />
                    </div>

                    {/* Availability */}
                    <select
                        value={availability}
                        onChange={e => setAvailability(e.target.value)}
                        className='select select-bordered min-w-[130px]'
                    >
                        <option value="all">All Items</option>
                        <option value="inStock">In Stock</option>
                    </select>

                    {/* Clear */}
                    {hasActiveFilters && (
                        <button onClick={clearFilters} className='btn btn-ghost btn-square'>
                            <FaTimes />
                        </button>
                    )}
                </div>

                <div className='flex justify-center'>
                    {isAdmin && <Link to="/addproducts" className='btn btn-secondary m-5'><FaPlus />Add Product</Link>}
                </div>

                {/* Results count */}
                <p className='text-sm text-accent px-1'>
                    {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                </p>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto my-10 justify-items-center'>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <Product key={product._id} product={product} />
                        ))
                    ) : (
                        <div className='col-span-full text-center py-20 text-accent'>
                            <p className='text-xl font-semibold'>No products found</p>
                            <p className='mt-2'>Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;