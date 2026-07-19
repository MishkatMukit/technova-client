import React, { use, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { loginUser, setUser, setEmail, googleSignIn } = use(AuthContext)
    const [error, setError] = useState("")
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = (e) => {
        setError("")
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setEmail(email)
        loginUser(email, password).then((result) => {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `Successfully Logged in!`,
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                setUser(result)
                navigate(location.state ? location.state : "/")
            });
        }).catch(() => setError("Invalid email or password combination"))

    }
    // const handleGoogleLogin = () => {
    //     googleSignIn().then(() => {
    //         navigate(location.state ? location.state : "/")
    //     }).catch(() => setError("Login failed"))

    // }
    return (
        <div className='mt-16'>
            <div className="min-h-screen w-full relative">
                {/* Teal Glow Top */}
                <div
                    className="absolute inset-0 -z-1"
                    style={{
                        background: "#ffffff",
                        backgroundImage: `
                         radial-gradient(
                         circle at top center,
                         rgba(66, 105, 226, 0.2),
                         transparent 70%
                        )
                          `,
                        filter: "blur(80px)",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                {/* Your Content/Components */}
                <div className='flex justify-center mt-16 py-16'>
                    <div className="card bg-base-100 w-87.5 md:w-lg shrink-0 shadow-lg">
                        <div className="card-body">
                            <h1 className='text-3xl font-bold text-center'>Please Login</h1>
                            <form className='space-y-3' onSubmit={handleLogin}>
                                <div>
                                    <p className='text-accent'>Email</p>
                                    <input name='email' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter Email' />
                                </div>
                                <div>
                                    <p className='text-accent'>Password</p>
                                    <input name='password' className='input w-full rounded-md input-bordered' type="password" placeholder='Enter Password' />
                                </div>
                                <p className='text-red-800/80 text-sm'>{error}</p>
                                <input className='btn btn-secondary shadow-none w-full my-3' type="submit" />
                                <p className='text-center font-medium'>Don't have an account? <Link className=' font-medium text-secondary' to="/register">Register</Link></p>
                            </form>
                            {/* <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                                <FcGoogle />
                                Login with Google
                            </button> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;