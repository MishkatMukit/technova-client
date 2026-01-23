import { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const [error, setError] = useState("")
    const [preview, setPreview] = useState(null);
    const { registerUser, setUser, updateUser } = use(AuthContext)
    const navigate = useNavigate()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
    const handleRegister = async(e) => {
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        const { name, email, password, phone, Address } = data
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

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address")
            return
        }

        if (!passwordRegex.test(password)) {
            setError("Password must be at least 6 characters with uppercase, lowercase, and a number")
            return
        }

        setError("")

        registerUser(email, password).then((result) => {
            const userInfo = {
                name,
                email,
                photoUrl: imageUrl || "https://i.postimg.cc/DyNfBbNQ/user.png",
                phone,
                address: Address,
                firebase_uid: result.user?.uid,
                creationTime: result.user?.metadata?.creationTime,
                lastSignInTime: result.user?.metadata?.lastSignInTime
            }
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(userInfo)
            }).then(res => res.json()).then(data => {
                if (data.insertedId) {
                    console.log("data after profile save ", data)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Registration successful",
                        showConfirmButton: false,
                        timer: 2000
                    }).then(() => {
                        const finalPhotoUrl = userInfo.photoUrl
                        updateUser({ displayName: name, photoURL: finalPhotoUrl }).then(() => {
                            setUser({
                                ...result.user,
                                displayName: name,
                                photoURL: finalPhotoUrl
                            });
                            navigate("/")
                        })
                    })
                }
            }).catch((err) => {
                setError("Failed to save user information")
                console.log(err)
            })
        }).catch((err) => {
            setError(err.message)
        })

    }
    return (
        <div className='mt-16'>
            <div className="min-h-screen w-full relative">
                {/* Teal Glow Top */}
                <div
                    className="absolute inset-0  -z-1"
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
                            <h1 className='text-3xl font-bold text-center py-3'>Register your account</h1>
                            <form onSubmit={handleRegister} className='space-y-3'>
                                <div>
                                    <p className='text-accent '>Name</p>
                                    <input required name='name' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter Name' />
                                </div>
                                <div>
                                    <p className='text-accent '>Phone</p>
                                    <input required name='phone' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter Phone' />
                                </div>
                                <div>
                                    <p className='text-accent '>Address</p>
                                    <input required name='Address' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter your address' />
                                </div>
                                {/* <div>
                                <p className='text-accent '>Photo</p>
                                <input name='photoUrl' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter photo-url' />
                            </div> */}
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

                                <div>
                                    <p className='text-accent '>Email</p>
                                    <input name='email' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter Email' required />
                                </div>
                                <div>
                                    <p className='text-accent '>Password</p>
                                    <input name='password' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter Password' required />

                                </div>
                                <p className='text-sm text-red-700 '>{error}</p>
                                <input className='btn btn-secondary shadow-none w-full my-3' type="submit" value="Register" />
                                <p className='text-center font-medium'>Already have an account? <Link to="/login" className='text-secondary'>Login</Link></p>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;