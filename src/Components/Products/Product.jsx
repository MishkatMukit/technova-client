import { use } from 'react';
import { FaEdit, FaInfoCircle } from 'react-icons/fa';
import { FaEye, FaTrash } from 'react-icons/fa6';
import { DataContext } from '../../Provider/AuthProvider/DataProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const Product = ({ product }) => {

    const { name, price, _id, details, photo, brand, status, quantity } = product
    const isAvailable = status === "active" && quantity > 0

    return (
        <div className="card bg-base-100 w-80 border border-blue-200 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <figure className="px-4 pt-4 relative">
                <img
                    src={photo}
                    alt={name}
                    className="rounded-xl h-48 w-full object-cover"
                />
                {!isAvailable && (
                    <div className="absolute inset-0 rounded-xl bg-black/40 flex items-center justify-center">
                        <span className="badge badge-error badge-lg text-white font-bold px-4 py-3">Out of Stock</span>
                    </div>
                )}
            </figure>
            {/* card body */}
            <div className="card-body  px-4" >
                {/* Brand */}
                <div className="badge bg-blue-100 text-blue-800 badge-sm font-medium">{brand}</div>
                {/* Product Name */}
                <h2 className=" text-lg font-semibold ">
                    {name}
                </h2>

                {/* Price */}
                <p className="text-lg font-semibold text-primary ">
                    {price} BDT
                </p>
                <p className='line-clamp-2 text-accent'>
                    {details}
                </p>

                {/* Action Buttons */}
                <div className='flex justify-between gap-2 items-center'>

                    {isAvailable ? (
                        <Link to={`/checkout/${_id}`} className='btn btn-secondary shadow-none flex-1'>Buy now</Link>
                    ) : (
                        <button disabled className='btn btn-secondary shadow-none flex-1 btn-disabled opacity-60'>Buy now</button>
                    )}
                    <div className="flex  justify-end  gap-1">
                        <Link to={`/productdetails/${_id}`}
                            className="btn  bg-white border-blue-200 btn-square"
                            // onClick={onDetails}
                            aria-label="View details"
                        >
                            <FaInfoCircle size={16} />
                        </Link>

                        {/* {isAdmin ? (
                            <>
                                <button className="btn bg-white border-blue-200 btn-square">
                                    <FaEdit size={16} />
                                </button>

                                <button
                                    className="btn bg-white border-blue-200 btn-square"
                                    onClick={() => handleDelete(_id)}
                                >
                                    <FaTrash size={16} />
                                </button>
                            </>) :<span className="loading loading-dots loading-xs"></span>} */}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Product;