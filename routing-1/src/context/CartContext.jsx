import { createContext, useState} from "react";


export const CartStore = createContext()

export const ContextProvider = ({children}) => {
    const [cartItem, setCartItem] = useState([]);
    let CartLength= cartItem.length 


return (
    <CartStore.Provider value={{cartItem, setCartItem, CartLength}} >
        {children}
    </CartStore.Provider>
    );
};

export default CartStore