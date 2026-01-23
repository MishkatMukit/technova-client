import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AdminOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/orders").then(res => res.json()).then(data => setOrders(data))
    }, [orders])
    const onUpdateStatus = async (orderId, status) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: `Mark order as ${status}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes"
        });

        if (!result.isConfirmed) return;

        const res = await fetch(`http://localhost:3000/orders/${orderId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status })
        });

        const data = await res.json();

        if (data.modifiedCount) {
            Swal.fire("Updated!", "Order status updated", "success");
            //refetchOrders(); // or update local state
        }
    };
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Address</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Order Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {orders?.map((order, index) => (
                        <tr key={order._id}>
                            <td>{index + 1}</td>

                            <td>
                                <p className="font-medium">{order.customerName}</p>
                                <p className="text-sm text-gray-500">{order.email}</p>
                                <p className="text-sm">{order.phone}</p>
                            </td>

                            <td>
                                <p className="font-medium">{order.productName}</p>
                                x{order.quantity}
                            </td>

                            <td className="max-w-xs">
                                <details>
                                    <summary className="cursor-pointer text-sm text-gray-500 truncate">
                                        {order.address.slice(0, 30)}...
                                    </summary>
                                    <p className="text-sm mt-1">{order.address}</p>
                                </details>
                                <p className="text-xs text-gray-400">{order.city}</p>
                            </td>

                            <td className="font-semibold">৳ {order.total}</td>

                            <td>
                                <span
                                    className={`badge ${order.status === "pending"
                                        ? "badge-warning"
                                        : order.status === "confirmed"
                                            ? "badge-success"
                                            : "badge-error"
                                        }`}
                                >
                                    {order.status}
                                </span>
                            </td>

                            <td>
                                {new Date(order.createdAt).toLocaleDateString()}
                            </td>

                            <td>
                                {order.status === "pending" ? (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => onUpdateStatus(order._id, "confirmed")}
                                            className="btn btn-xs btn-success"
                                        >
                                            Confirm
                                        </button>

                                        <button
                                            onClick={() => onUpdateStatus(order._id, "cancelled")}
                                            className="btn btn-xs btn-error"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <span className="text-gray-400 text-sm">No actions</span>
                                )}
                            </td>
                        </tr>
                    ))}

                    {orders.length === 0 && (
                        <tr>
                            <td colSpan="8" className="text-center text-gray-500 py-6">
                                No orders found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AdminOrders;