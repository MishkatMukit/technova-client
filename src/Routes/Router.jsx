import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element : <HomeLayout/>,
        children : [
            {
                index : true,
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
export default router