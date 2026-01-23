import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddProducts = () => {
  const [preview, setPreview] = useState(null);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const form = e.target;
    const imageFile = form.image.files[0];

    if (!imageFile) {
      return Swal.fire("Error", "Please select an image", "error");
    }

    //Upload image to Cloudinary
    const imageData = new FormData();
    imageData.append("image", imageFile);

    const uploadRes = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: imageData,
    });

    const { imageUrl } = await uploadRes.json();

    const newProduct = {
      name: form.name.value,
      quantity: form.quantity.value,
      brand: form.brand.value,
      category: form.category.value,
      price: form.price.value,
      details: form.details.value,
      photo: imageUrl,
    };

    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();

    if (data.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product added successfully",
        showConfirmButton: false,
        timer: 3000,
      });
      form.reset();
      setPreview(null);
    }
  };

  return (
    <div className="max-w-[90%] mx-auto py-12">
      <div className="mt-16">
        <Link to="/products" className="flex items-center gap-2 text-xl font-semibold">
          <FaArrowLeftLong /> Back to Products
        </Link>

        <div className="max-w-175 mx-auto text-center mb-8 mt-5">
          <h1 className="font-bold text-3xl text-secondary">Add New Product</h1>
        </div>

        <form
          onSubmit={handleAddProduct}
          className="fieldset grid gap-6 mx-auto grid-cols-2 bg-blue-50 border-base-300 rounded-box border p-2 md:p-12"
        >
          <input required name="name" placeholder="Name" className="input w-full" />
          <input required name="quantity" type="number" placeholder="Quantity" className="input w-full" />
          <input required name="brand" placeholder="Brand" className="input w-full" />
          <input required name="category" placeholder="Category" className="input w-full" />
          <input required name="price" type="number" placeholder="Price" className="input w-full" />
          <input required name="details" placeholder="Details" className="input w-full" />

          <div className="col-span-2">
            <label className="label">Photo</label>
            <input
              name="image"
              type="file"
              accept="image/*"
              required
              onChange={(e) => setPreview(URL.createObjectURL(e.target.files[0]))}
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

          <input type="submit" className="btn btn-secondary col-span-2" value="Add Product" />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;

// import { FaArrowLeftLong } from 'react-icons/fa6';
// import { Link } from 'react-router';
// import Swal from 'sweetalert2';

// const AddProducts = () => {
//     const handleAddProduct = (e) => {
//         e.preventDefault()
//         const form = e.target
//         const formData = new FormData(form)
//         const newProduct = Object.fromEntries(formData.entries())
//         console.log(newProduct);

//         fetch("http://localhost:3000/products", {
//             method: "POST",
//             headers: {
//                 'content-type': "application/json"
//             },
//             body: JSON.stringify(newProduct)
//         }).then(res => res.json()).then(data => {
//             if (data.insertedId) {
//                 Swal.fire({
//                     position: "center",
//                     icon: "success",
//                     title: "Product added successfully",
//                     showConfirmButton: false,
//                     timer: 3000
//                 });
//             }
//             form.reset()
//             console.log("data after adding product", data);
//         })
//     };

//     return (
//         <div className='max-w-[90%] mx-auto py-12'>
//             <div className='mt-16'>
//                 <Link to="/products" className='flex items-center gap-2 text-xl font-semibold'> <FaArrowLeftLong />Back to Products</Link>
//                 <div className=''>
//                     <div className='max-w-175 mx-auto text-center mb-8'>
//                         <h1 className='font-bold text-3xl text-secondary'>Add New Product</h1>
//                     </div>
//                     <div>
//                         <form onSubmit={handleAddProduct} className="fieldset grid gap-6  mx-auto grid-cols-2 bg-blue-50 border-base-300 rounded-box  border p-12">
//                             <div className='flex flex-col'>
//                                 <label className="label text-lg mb-2 font-medium">Name</label>
//                                 <input required name='name' type="text" className="input border-b-gray-300 w-full" placeholder="Enter product name" />
//                             </div>
//                             <div className='flex flex-col'>
//                                 <label className="label text-lg mb-2 font-medium">Quantity</label>
//                                 <input required name='quantity' type="number" className="input border-b-gray-300 w-full" placeholder="Enter product quantity" />
//                             </div>
//                             <div className='flex flex-col'>
//                                 <label className="label text-lg mb-2 font-medium">Brand</label>
//                                 <input required name='brand' type="text" className="input border-b-gray-300 w-full" placeholder="Enter brand name" />
//                             </div>
//                             <div className='flex flex-col'>
//                                 <label className="label text-lg mb-2 font-medium">Category</label>
//                                 <input required name='category' type="text" className="input border-b-gray-300 w-full" placeholder="Enter product category" />
//                             </div>
//                             <div className='flex flex-col'>
//                                 <label className="label text-lg mb-2 font-medium">Price</label>
//                                 <input required name='price' type="number" className="input border-b-gray-300 w-full" placeholder="Price per unit" />
//                             </div>
//                             <div className='flex flex-col'>
//                                 <label className="label text-lg mb-2 font-medium">Details</label>
//                                 <input required name='details' type="text" className="input border-b-gray-300 w-full" placeholder="Enter product details" />
//                             </div>
//                             <div className='flex flex-col col-span-2'>
//                                 <label className="label text-lg mb-2 font-medium">Photo</label>
//                                 <input name='photo' type="text" className="input border-b-gray-300 w-full" placeholder="Enter photo URL" />
//                             </div>
//                             <input type="submit" className='btn btn-secondary col-span-2 shadow-none' value="Add Product" />

//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddProducts;