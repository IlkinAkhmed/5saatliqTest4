import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";


export const WishlistContext = createContext()

export function WishlistProvider({ children }) {
    const [data, setData] = useState(localStorage.getItem('5saatliq4') ? JSON.parse(localStorage.getItem('5saatliq4')) : [])

    useEffect(() => {
        localStorage.setItem('5saatliq4', JSON.stringify(data))
    }, [data])

    function addToWish(item) {
        const foundData = data.find(x => x._id === item._id)
        if (foundData) {
            setData(data.filter(x => x._id !== item._id))
        } else {
            setData([...data, item])
            Swal.fire({
                icon: "success",
                title: "Added To Wishlist"
            })
        }
    }

    const values = {
        data,
        setData,
        addToWish
    }
    return (
        <WishlistContext.Provider value={values}>
            {children}
        </WishlistContext.Provider>
    )
}