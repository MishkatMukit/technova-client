import { createContext, use, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
    const { user } = use(AuthContext)
    const [dbUser, setdbUser] = useState(null)
    const [products, setProducts] = useState(null)
    useEffect(() => {
        if (user?.uid) {
            fetch(`https://technova-server.vercel.app/users/${user.uid}`)
                .then(res => res.json())
                .then(data => {
                    if (data && data._id) {
                        setdbUser(data)
                    } else {
                        setdbUser({
                            name: user.displayName || "User",
                            email: user.email,
                            photoUrl: user.photoURL || "https://i.postimg.cc/DyNfBbNQ/user.png",
                            phone: "",
                            address: "",
                            role: "user",
                            firebase_uid: user.uid
                        })
                    }
                })
                .catch(() => {
                    setdbUser({
                        name: user.displayName || "User",
                        email: user.email,
                        photoUrl: user.photoURL || "https://i.postimg.cc/DyNfBbNQ/user.png",
                        phone: "",
                        address: "",
                        role: "user",
                        firebase_uid: user.uid
                    })
                })
        }
    }, [user?.uid])


    const dataInfo = {
        products,
        setProducts,
        dbUser,
        setdbUser
    }

    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
    );
}
export default DataProvider
