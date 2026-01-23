import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Contact from "../Pages/Contact";
import Login from "../Components/AuthComponents/Login/Login";
import Register from "../Components/AuthComponents/Register/Register";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddProducts from "../Pages/AddProducts";
import Loading from "../Components/Loading/Loading";
import ProductDetails from "../Pages/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct";
import Checkout from "../Pages/Checkout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch("http://localhost:3000/products/recent").then(res => res.json()),
                hydrateFallbackElement: <Loading />
                
            },
            {
                path: "/products",
                element: <Products />,
                loader: () => fetch("http://localhost:3000/products").then(res => res.json()),
                hydrateFallbackElement: <Loading />
            },
            {
                path: "/addproducts",
                element: <AddProducts />
            },
            {
                path: "/updateProduct/:id",
                element: <UpdateProduct/>,
                loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`).then(res => res.json()),
                hydrateFallbackElement: <Loading />
            },
            {
                path: "/productdetails/:id",
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`).then(res => res.json()),
                hydrateFallbackElement: <Loading />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard /></PrivateRoute>,
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><Checkout/></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`).then(res => res.json()),
                hydrateFallbackElement: <Loading />

            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }

        ]
    }
])
export default router