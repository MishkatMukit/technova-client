import React from 'react';

const Orders = ({ orders }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Order ID</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {orders?.map((order, index) => (
                        <tr key={order._id}>
                            <td>{index + 1}</td>

                            <td>
                                <p className="font-medium">{order.productName}</p>
                            </td>

                            <td>{order._id}</td>
                            <td>{order.quantity}</td>

                            <td className="font-semibold">৳ {order.total}</td>

                            <td>
                                <span
                                    className={`badge ${order.status === "pending"
                                            ? "badge-warning"
                                            : order.status === "confirmed"
                                                ? "badge-success"
                                                : order.status === "cancelled"
                                                    ? "badge-error"
                                                    : "badge-success"
                                        }`}
                                >
                                    {order.status}
                                </span>
                            </td>

                            <td>
                                {new Date(order.createdAt).toLocaleDateString()}
                            </td>
                        </tr>
                    ))}

                    {orders?.length === 0 && (
                        <tr>
                            <td colSpan="6" className="text-center text-gray-500 py-6">
                                No orders found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;