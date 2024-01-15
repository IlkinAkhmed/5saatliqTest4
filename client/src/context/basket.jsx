import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2"

export const BasketContext = createContext()




export function BaskettProvider({ children }) {
    const [basket, setBasket] = useState(localStorage.getItem('5saatliq4basket') ? JSON.parse(localStorage.getItem('5saatliq4basket')) : [])

    useEffect(() => {
        localStorage.setItem('5saatliq4basket', JSON.stringify(basket))
    }, [basket])

    function addToCart(item) {
        const foundData = basket.find(x => x._id === item._id)
        if (foundData) {
            foundData.count++
            setBasket([...basket])
            Swal.fire({
                icon:"info",
                title:"Already In Cart!! Count Increased"
            })
            return
        } else {
            setBasket([...basket, { ...item, count: 1 }])
            Swal.fire({
                icon:"success",
                title:"Added To Cart!!"
            })
        }
    }

    function modifyCount(isIncrement, id) {
        const foundData = basket.find(x => x._id === id)
        if (isIncrement) {
            foundData.count++
            setBasket([...basket])
        } else {
            if (foundData.count===1) {
                return
            }
            foundData.count--
            setBasket([...basket])
        }
    }

    const values = {
        basket,
        setBasket,
        addToCart,
        modifyCount
    }
    return (
        <BasketContext.Provider value={values}>
            {children}
        </BasketContext.Provider>
    )
}