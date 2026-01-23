import { use, useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Orders from '../Components/DashboardComponents/Orders/Orders';
import Users from '../Components/DashboardComponents/Users/Users';
import { DataContext } from '../Provider/AuthProvider/DataProvider';
import AdminOrders from '../Components/DashboardComponents/Orders/AdminOrders';

const Dashboard = () => {
    const { dbUser, setdbUser } = use(DataContext)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([])
    //console.log(dbUser);
    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, [])
    useEffect(() => {
        fetch(`http://localhost:3000/orders?email=${dbUser?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [dbUser?.email]);
    const isAdmin = dbUser?.role === "admin"
    return (
        <div className='mt-16'>
            <div className='mt-24 max-w-[90%] mx-auto relative'>
                <div>
                    <div className='flex flex-col md:flex-row items-center gap-6   p-10 my-10 rounded-xl border border-secondary/20 shadow-sm'>
                        <img className='w-40 h-40 object-cover rounded-full' src={dbUser?.photoUrl} alt="" />
                        <div className=' text-center md:text-left'>
                            <span className='px-3 py-1 rounded-full text-blue-900 bg-blue-100'>{dbUser?.role}</span>
                            <h1 className='text-2xl font-semibold'>{dbUser?.name}</h1>
                            <h1 className='text-accent flex gap-2 items-center'><IoMail />{dbUser?.email}</h1>
                            <p className='flex items-center gap-2 text-accent'><FaMapLocationDot />{dbUser?.address}</p>
                            <p className='flex items-center gap-2 text-accent'><FaPhoneAlt />{dbUser?.phone}</p>
                        </div>
                    </div>
                    {/* <button className='cursor-pointer text-secondary absolute top-5 right-5'><FiEdit size={24} /></button> */}
                </div>

                {
                    isAdmin ? <div>
                        <div className="tabs tabs-border">
                            <input type="radio" name="my_tabs_1" className="tab" aria-label="Users" defaultChecked />
                            <div className="tab-content border border-secondary/20 shadow-sm p-5 mt-2"><Users users={users}></Users></div>

                            <input type="radio" name="my_tabs_1" className="tab" aria-label="Orders" />
                            <div className="tab-content border border-secondary/20 shadow-sm p-5 mt-2"><AdminOrders></AdminOrders></div>
                        </div>
                    </div> : <div>
                        <div className="tabs tabs-border">
                            <input type="radio" name="my_tabs_1" className="tab" defaultChecked aria-label="Orders" />
                            <div className="tab-content border border-secondary/20 shadow-sm p-5 mt-2"><Orders orders={orders}></Orders></div>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default Dashboard;