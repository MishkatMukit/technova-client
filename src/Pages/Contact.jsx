import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import React from 'react';

const Contact = () => {
    return (
        <div className='mt-16  mx-auto bg-white
            bg-[radial-gradient(circle_at_top_center,rgba(66,105,226,0.2),transparent_70%)]  bg-no-repeat'>
            <div className="max-w-[90%] mx-auto">
                <h1 className='py-5 text-secondary text-5xl text-center font-bold '>Contact Us</h1>
                <p className="text-center text-accent">Technova is a technology-focused product platform dedicated to delivering reliable and innovative tech solutions. We’re here to assist with product inquiries, order support, and general questions. Feel free to contact us anytime — our team is always ready to help..</p>
                <div className='flex w-full flex-col-reverse md:flex-row justify-center  items-center md:p-10'>
                    <div className='flex md:w-1/2 flex-col md:gap-5'>
                        <div>
                            <h3 className='text-2xl font-bold my-2'>Location :</h3>
                            <p className='text-xl text-accent'>Cinema palace,Nondonkanon,Chittagong.</p>
                        </div>
                        <div className="my-5">
                            <h1 className='text-2xl font-bold my-2'>Follow Us!</h1>
                            <div className="flex gap-5">
                                <a target="_blank" href="https://www.facebook.com/people/C-ElevenBd/61573729561342/"><FaFacebook size={32} /></a>
                                <a target="_blank" href="https://www.instagram.com/c_eleven_bd"><FaInstagram size={32} /></a>
                                <a target="_blank" href="https://www.tiktok.com/@celevenbd?_r=1&_d=secCgYIASAHKAESPgo8PQsa2HqHBaVlqDyfYbO%2F4O3HEtXw%2BJIrPjdbiA8uIUa1QyOrKfvGYRHg1sddnDjp9JDM8MS2tyW7OiIqGgA%3D&_svg=1&checksum=3a6744556fb701fe8faa9e3aa639df3dc257ba9465c625253f175760bc3d6fde&item_author_type=1&sec_uid=MS4wLjABAAAAW6O5m_wsoG2OIUfuxdiomOoERMyZWi_nfbxDzNn5k6LHxiyT7DxckPZxTeWP7kmC&sec_user_id=MS4wLjABAAAAW6O5m_wsoG2OIUfuxdiomOoERMyZWi_nfbxDzNn5k6LHxiyT7DxckPZxTeWP7kmC&share_app_id=1233&share_author_id=7542077144870110228&share_link_id=A9D46435-68F1-4445-955B-FFC25546F364&share_region=BD&share_scene=1&sharer_language=en&social_share_type=4&source=h5_m&timestamp=1769021785&tt_from=copy&u_code=em3e498lab631i&ug_btm=b8727%2Cb0&user_id=7542077144870110228&utm_campaign=client_share&utm_medium=ios&utm_source=copy"><FaTiktok size={32} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <fieldset className="fieldset border-base-300 rounded-box w-sm   md:w-lg p-5 md:p-8 gap-6 bg-[#4269E2]/5 ">
                            <input type="text" className="input border-gray-300 rounded-xl w-full p-6" placeholder="Enter your name" />
                            <input type="text" className="input border-gray-300 rounded-xl w-full p-6" placeholder="Enter a Valid email address" />
                            <textarea className="textarea w-full border-gray-300 rounded-xl" placeholder="Enter your message"></textarea>
                            <button className='btn shadow-none w-1/3 btn-secondary'>Submit</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;