import React, { use, useEffect, useState } from 'react';
import { FaArrowLeft, FaMinus, FaPlus } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { DataContext } from '../Provider/AuthProvider/DataProvider';
import Swal from 'sweetalert2';

const Checkout = () => {
    const product = useLoaderData()
    const navigate = useNavigate()
    const { _id, name, brand, price, photo, quantity: availableStock, details } = product;
    const { dbUser } = use(DataContext)
    const [orderQuantity, setOrderQuantity] = useState(1);
    const [formData, setFormData] = useState({
        customerName: "",
        phone: "",
        email: "",
        address: "",
        city: ""
    });
    useEffect(() => {
        if (dbUser) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFormData(prev => ({
                ...prev,
                customerName: dbUser.name || "",
                phone: dbUser.phone || "",
                email: dbUser.email || "",
                address: dbUser.address || ""
            }));
        }
    }, [dbUser]);

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= availableStock) {
            setOrderQuantity(newQuantity);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const subtotal = price * orderQuantity;
    const shippingCost = 120;
    const total = subtotal + shippingCost;

    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        const orderData = {
            ...formData,
            productId: _id,
            productName: name,
            quantity: orderQuantity,
            total
        };

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Press confirm to place your order",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, place order!"
        });

        if (!result.isConfirmed) return;

        try {
            const res = await fetch("http://localhost:3000/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderData)
            });

            const data = await res.json();

            if (data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Order placed!",
                    text: "Your order is pending approval",
                    timer: 2000,
                    showConfirmButton: false
                });
                navigate("/dashboard")
            }
        } catch (error) {
            Swal.fire("Error", "Failed to place order", "error");
            console.error(error);
        }
    };

    return (
        <div className=" max-w-[90%] mt-16 mx-auto px-4 py-8">
            <h1 className="text-3xl flex items-center font-bold mb-6"><Link to={`/productdetails/${_id}`}><FaArrowLeft className=' pr-2' /></Link>Checkout</h1>

            <form onSubmit={handlePlaceOrder}>
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Customer Information Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Product Summary Card */}
                        <div className="card bg-base-100 border border-blue-200 shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title text-xl mb-4">Order Summary</h2>
                                <div className="flex gap-4">
                                    <img
                                        src={photo}
                                        alt={name}
                                        className="w-24 h-24 rounded-lg object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="badge bg-blue-100 text-blue-800 badge-sm font-medium mb-2">
                                            {brand}
                                        </div>
                                        <h3 className="font-bold text-lg">{name}</h3>
                                        <p className="text-sm text-gray-600 line-clamp-1">{details}</p>
                                        <p className="text-lg font-semibold text-primary mt-2">
                                            {price} BDT × {orderQuantity}
                                        </p>
                                    </div>
                                </div>

                                {/* Quantity Selector */}
                                <div className="flex items-center gap-3 mt-4">
                                    <span className="text-sm font-medium">Quantity:</span>
                                    <div className="join">
                                        <button
                                            type="button"
                                            className="btn btn-sm join-item bg-white border-blue-200"
                                            onClick={() => handleQuantityChange(orderQuantity - 1)}
                                            disabled={orderQuantity <= 1}
                                        >
                                            <FaMinus size={12} />
                                        </button>
                                        <input
                                            type="number"
                                            value={orderQuantity}
                                            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                                            className="input input-sm join-item w-16 text-center border-blue-200"
                                            min="1"
                                            max={availableStock}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-sm join-item bg-white border-blue-200"
                                            onClick={() => handleQuantityChange(orderQuantity + 1)}
                                            disabled={orderQuantity >= availableStock}
                                        >
                                            <FaPlus size={12} />
                                        </button>
                                    </div>
                                    <span className="text-xs text-gray-500">
                                        ({availableStock} available)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Customer Information */}
                        <div className="bg-base-100 border border-blue-200 rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-bold mb-6">Customer Information</h2>

                            <div className="space-y-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-medium">Full Name *</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="customerName"
                                        defaultValue={dbUser?.name}
                                        onChange={handleInputChange}
                                        className="input input-bordered border-blue-200 w-full"
                                        required
                                    />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-medium">Phone Number *</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        defaultValue={dbUser?.phone}
                                        onChange={handleInputChange}
                                        className="input input-bordered border-blue-200 w-full"
                                        required
                                    />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-medium">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        defaultValue={dbUser?.email}
                                        onChange={handleInputChange}
                                        placeholder="your@email.com"
                                        className="input input-bordered border-blue-200 w-full"
                                    />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-medium">Delivery Address *</span>
                                    </label>
                                    <textarea
                                        name="address"
                                        defaultValue={dbUser?.address}
                                        onChange={handleInputChange}
                                        placeholder="House/Flat no, Street, Area"
                                        className="textarea textarea-bordered border-blue-200 w-full"
                                        rows="3"
                                        required
                                    ></textarea>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-medium">City *</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        defaultValue={dbUser?.city}
                                        onChange={handleInputChange}
                                        placeholder="Chattogram"
                                        className="input input-bordered border-blue-200 w-full"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="card bg-base-100 border border-blue-200 shadow-lg sticky top-4">
                            <div className="card-body">
                                <h2 className="card-title text-xl mb-4">Price Details</h2>

                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Price ({orderQuantity} item{orderQuantity > 1 ? 's' : ''})</span>
                                        <span className="font-semibold">{subtotal.toLocaleString()} BDT</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Delivery Charges</span>
                                        <span className="font-semibold">{shippingCost} BDT</span>
                                    </div>

                                    <div className="divider my-2"></div>

                                    <div className="flex justify-between text-lg">
                                        <span className="font-bold">Total Amount</span>
                                        <span className="font-bold text-primary">
                                            {total.toLocaleString()} BDT
                                        </span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-full btn-lg mt-6"
                                >
                                    Place Order
                                </button>

                                <div className="text-xs text-gray-500 text-center mt-3">
                                    By placing order, you agree to our Terms & Conditions
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
