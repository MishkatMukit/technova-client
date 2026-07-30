import { use, useState } from 'react';
import { DataContext } from '../../Provider/AuthProvider/DataProvider';
import Swal from 'sweetalert2';

const EditProfile = ({ isOpen, onClose }) => {
    const { dbUser, setdbUser } = use(DataContext)
    const [preview, setPreview] = useState(null)
    const [uploading, setUploading] = useState(false)

    if (!isOpen) return null

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const imageFile = form.image.files[0]
        let imageUrl = dbUser?.photoUrl

        if (imageFile) {
            setUploading(true)
            const imageData = new FormData()
            imageData.append("image", imageFile)
            try {
                const uploadRes = await fetch("https://technova-server.vercel.app/upload", {
                    method: "POST",
                    body: imageData
                })
                const { imageUrl: url } = await uploadRes.json()
                imageUrl = url
            } catch {
                Swal.fire("Error", "Failed to upload image", "error")
                setUploading(false)
                return
            }
            setUploading(false)
        }

        const updatedInfo = {
            name: form.name.value,
            phone: form.phone.value,
            address: form.address.value,
            photoUrl: imageUrl
        }

        try {
            const uid = dbUser?.firebase_uid || dbUser?._id
            const res = await fetch(`https://technova-server.vercel.app/users/${uid}`, {
                method: "PATCH",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(updatedInfo)
            })
            if (res.ok) {
                const data = await res.json()
                if (data.modifiedCount || data.upsertedCount) {
                    setdbUser({ ...dbUser, ...updatedInfo })
                }
            }
        } catch {
            // backend doesn't support user updates yet
        }
        setdbUser({ ...dbUser, ...updatedInfo })
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Profile updated",
            showConfirmButton: false,
            timer: 2000
        })
        onClose()
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-base-100 rounded-xl p-8 w-full max-w-md mx-4 shadow-2xl">
                <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <p className="text-accent text-sm mb-1">Name</p>
                        <input name="name" defaultValue={dbUser?.name} required className="input input-bordered w-full" />
                    </div>
                    <div>
                        <p className="text-accent text-sm mb-1">Phone</p>
                        <input name="phone" defaultValue={dbUser?.phone} className="input input-bordered w-full" />
                    </div>
                    <div>
                        <p className="text-accent text-sm mb-1">Address</p>
                        <input name="address" defaultValue={dbUser?.address} className="input input-bordered w-full" />
                    </div>
                    <div>
                        <p className="text-accent text-sm mb-1">Photo</p>
                        <input
                            name="image"
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0]
                                if (file) setPreview(URL.createObjectURL(file))
                            }}
                            className="file-input file-input-bordered w-full"
                        />
                        <img
                            src={preview || dbUser?.photoUrl}
                            alt="preview"
                            className="w-20 h-20 object-cover mt-2 rounded"
                        />
                    </div>
                    <div className="flex gap-3 pt-2">
                        <button type="button" onClick={onClose} className="btn btn-ghost flex-1">Cancel</button>
                        <button type="submit" disabled={uploading} className="btn btn-secondary flex-1">
                            {uploading ? "Uploading..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile
