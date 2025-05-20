import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoredContextProvide = (props) => {
    const [cartItems,setCartItem] = useState({})

    const currensy = '₹';
    const DeliveryFee = 20;
    const addToCart = (itemId) => {
        if(!cartItems[itemId]) {
            setCartItem((prev) => ({...prev,[itemId]:1}))
        }else {
            setCartItem((prev) => ({...prev,[itemId]: prev[itemId]+1}))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev)=> ({...prev,[itemId]: prev[itemId] -1}))
    }

    const cartTotalCartAmount = () => {
            let totalAmout = 0;
            for(const item in cartItems) {
                if(cartItems[item] > 0) {
                    let itemInfo = food_list.find((product) => product._id === item)
                    totalAmout += itemInfo.price * cartItems[item]
                }
            }
            return totalAmout;
    }
    const contextValue = {
            food_list,
            cartItems,
            setCartItem,
            addToCart,
            removeFromCart,
            currensy,
            cartTotalCartAmount,
            DeliveryFee
    }
    return (
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoredContextProvide;