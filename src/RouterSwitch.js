import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./Components/Cart";
import App from "./App";
import {CartContext} from './CartContext'
import React ,{useState} from 'react'



const RouterSwitch =()=>{

    const [userCart, setuserCart] = useState([]);

    return(
        <BrowserRouter>
        <CartContext.Provider value={{userCart, setuserCart}}>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/shopping_cart" element={<ShoppingCart/>}/>
            </Routes>
        </CartContext.Provider>
        </BrowserRouter>
    )
}

export default RouterSwitch