import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData()
    const { name, photo,_id, category, status, price, quantity, details, brand } = product
    const [preview, setPreview] = useState(photo);
    const [newImage, setNewImage] = useState(null);
    const handleUpdateProduct = async (e) => {
        e.preventDefault()
        const form = e.target
        let imageUrl = photo
        if (newImage) {
            const formData = new FormData();
            formData.append("image", newImage);

            const res = await fetch("http://localhost:3000/upload", {
                method: "POST",
                body: formData
            });

            const imgData = await res.json();
            imageUrl = imgData.url;
        }
        const updatedProduct = {
            name: form.name.value,
            quantity: form.quantity.value,
            brand: form.brand.value,
            category: form.category.value,
            price: form.price.value,
            details: form.details.value,
            photo: imageUrl,
            status: form.status.value
        };
        fetch(`http://localhost:3000/products/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product updated successfully",
                    showConfirmButton: false,
                    timer: 3000
                });
            }
            console.log("data after update : ", data)
        })

    }
    return (
        <div className="max-w-[90%] mx-auto py-12">
            <div className="mt-16">
                <Link to={`/productDetails/${_id}`} className="flex items-center gap-2 text-xl font-semibold">
                    <FaArrowLeftLong /> Back to Details
                </Link>

                <div className="max-w-175 mx-auto text-center mb-8 mt-5">
                    <h1 className="font-bold text-3xl text-secondary">Update Product</h1>
                </div>

                <form
                    onSubmit={handleUpdateProduct}
                    className="fieldset grid gap-6 mx-auto grid-cols-2 bg-blue-50 border-base-300 rounded-box border p-3 md:p-5 lg:p-12"
                >
                    <input required name="name" defaultValue={name} placeholder="Name" className="input w-full" />
                    <input required name="quantity" defaultValue={quantity} type="number" placeholder="Quantity" className="input w-full" />
                    <input required name="brand" defaultValue={brand} placeholder="Brand" className="input w-full" />
                    <input required name="category" defaultValue={category} placeholder="Category" className="input w-full" />
                    <input required name="price" defaultValue={price} type="number" placeholder="Price" className="input w-full" />
                    <select
                        name="status"
                        defaultValue={status}
                        className="select select-bordered w-full"
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    <textarea
                        name="details"
                        defaultValue={details}
                        placeholder="Details"
                        required
                        className="textarea col-span-2 textarea-bordered w-full"
                        rows={4}
                    />

                    <div className="col-span-2">
                        <label className="label">Photo</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (!file) return;
                                setNewImage(file);
                                setPreview(URL.createObjectURL(file));
                            }}
                            className="file-input file-input-bordered w-full"
                        />

                        {preview && (
                            <img
                                src={preview}
                                alt="preview"
                                className="w-32 h-32 object-cover mt-3 rounded"
                            />
                        )}
                    </div>

                    <input type="submit" className="btn btn-secondary col-span-2" value="Update Product" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;