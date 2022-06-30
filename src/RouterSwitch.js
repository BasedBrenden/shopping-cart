import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./Components/Cart";
import App from "./App";

const RouterSwitch =()=>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/shopping_cart" element={<ShoppingCart/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterSwitch