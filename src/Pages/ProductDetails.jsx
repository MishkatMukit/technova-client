import { use } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { DataContext } from "../Provider/AuthProvider/DataProvider";
import { FaHeart, FaTrash } from "react-icons/fa6";
import { FaEdit, FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const product = useLoaderData()
    console.log(product);
    const { _id, name, brand, category, price, details, photo, quantity, status, createdAt } = product;
    const { dbUser, products, setProducts } = use(DataContext)
    const isAdmin = dbUser?.role === "admin"
    const navigate = useNavigate()
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // console.log( result.isConfirmed)
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/products/${id}`, {
                    method: "DELETE"
                }).then(res => res.json()).then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        const remainingProducts = products.filter(product => product._id !== id)
                        setProducts(remainingProducts)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your product has been deleted. Redirecting to products page",
                            icon: "success"
                        }).then(() => {
                            navigate("/products")
                        })
                    }
                })
            }
        });
    }
    return (
        <div className="mt-16 max-w-[90%] mx-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="card lg:card-side bg-base-100 border border-blue-200  hover:shadow-md transition-shadow duration-300">
                    {/* Product Image - Left Side */}
                    <figure className="lg:w-1/2 p-6">
                        <img
                            src={photo}
                            alt={name}
                            className="rounded-xl w-full h-full object-cover max-h-150"
                        />
                    </figure>

                    {/* Product Information - Right Side */}
                    <div className="card-body lg:w-1/2 p-8">
                        {/* Brand & Category */}
                        <div className="flex gap-2 mb-2">
                            <div className="badge bg-blue-100 text-blue-800 badge-md font-medium">
                                {brand}
                            </div>
                            <div className="badge badge-outline badge-md">
                                {category}
                            </div>
                        </div>

                        {/* Product Name */}
                        <h1 className="card-title text-2xl font-bold">
                            {name}
                        </h1>

                        {/* Price */}
                        <div className="mb-2">
                            <p className="text-xl font-bold text-primary">
                                {price} BDT
                            </p>
                        </div>

                        {/* Status & Quantity */}
                        <div className="flex gap-4 mb-2">
                            {isAdmin && <div>
                                <span className="text-sm text-gray-600">Status: </span>
                                <span className={`badge ${status === 'active' ? 'badge-success' : 'badge-warning'}`}>
                                    {status}
                                </span>
                            </div>}
                            {
                                status === "active" ? <div>
                                    <span className="text-sm text-gray-600">In Stock: </span>
                                    <span className="font-semibold">{quantity} units</span>
                                </div> : <span className="text-lg font-bold text-red-800">Out of stock</span>
                            }
                        </div>

                        {/* Product Details */}
                        <div className="">
                            <h3 className="text-lg font-semibold mb-2">Product Description</h3>
                            <p className="text-accent leading-relaxed">
                                {details}
                            </p>
                        </div>

                        <div className="divider"></div>
                        <div className="card-actions flex-col gap-3">
                            <div className="flex gap-3 w-full">
                                <Link
                                    to={status === "inactive" ? "#" : `/checkout/${_id}`}
                                    className={`btn btn-secondary flex-1 btn-lg shadow-none ${status === "inactive" ? "btn-disabled opacity-80 cursor-not-allowed" : ""
                                        }`}
                                >
                                    Buy Now
                                </Link>
                                <button className="btn btn-outline btn-primary btn-lg btn-square" title="Wishlist- coming soon">
                                    <FaHeart size={18} />
                                </button>
                            </div>



                            {/* Admin Actions */}
                            {isAdmin && (
                                <div className="flex gap-2 w-full mt-4 pt-4 border-t">
                                    <span className="text-sm font-semibold text-gray-600 self-center">
                                        Admin Actions:
                                    </span>
                                    <Link to={`/updateProduct/${_id}`} className="btn bg-white hover:bg-blue-300 border-blue-200 btn-sm">
                                        <FaEdit size={16} />
                                        Edit
                                    </Link>
                                    <button
                                        className="btn bg-white hover:bg-red-300 border-blue-200 btn-sm"
                                        onClick={() => handleDelete(_id)}
                                    >
                                        <FaTrash size={16} />
                                        Delete
                                    </button>
                                </div>
                            )}

                            {/* Product Metadata */}
                            <div className="text-xs text-gray-500 mt-2">
                                <p>Product ID: {_id}</p>
                                <p>Listed: {new Date(createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;