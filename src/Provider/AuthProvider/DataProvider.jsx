import { createContext, use, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
    const { user } = use(AuthContext)
    const [dbUser, setdbUser] = useState(null)
    const [products, setProducts] = useState(null)
    useEffect(() => {
        if (user?.uid) {
            fetch(`http://localhost:3000/users/${user.uid}`)
                .then(res => res.json())
                .then(data => {
                    // console.log("User data from MongoDB:", data)
                    setdbUser(data)
                })
                .catch(err => console.error("Error fetching user:", err))
        }
    }, [user?.uid, setdbUser])


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
