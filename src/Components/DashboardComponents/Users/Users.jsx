
const Users = ({ users }) => {
    console.log(users);
    return (
        <div>
            {/* <h1 className='p-5'>{users.length} users</h1> */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='shadow-sm '>
                            <th className='text-center'>No</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Last Signin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map((user, index) => (
                                <tr  key= {user._id}>
                                    <td>
                                        <h1 className='font-bold flex pt-8 justify-center p-5'>{index + 1}</h1>
                                    </td>
                                    <td >
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user.photoUrl}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                                <div className="text-sm opacity-50">{user.address}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{user.phone}</p>
                                        <br />
                                    </td>
                                    <td>
                                        <p>{user.email}</p>
                                        <p>{user.creationTime}</p>
                                        <br />
                                    </td>
                                    <th className='space-x-2'>
                                        <p>{user.lastSignInTime}</p>
                                        {/* <button className="btn bg-blue-200 btn-xs">details</button> */}
                                        {/* <button className="btn bg-green-200 btn-xs">Update</button>
                                        <button className="btn bg-red-200 btn-xs">Delete</button> */}
                                    </th>
                                </tr>

                            ))
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Users;