import Navbar from "./Nav"
import { useLocation } from "react-router-dom"
import { useState } from "react"

const ShoppingCart =() =>{
    const location = useLocation()
    const { currentItems } = location.state
     
    return(
        <div>
            <Navbar userCart={currentItems}/>
            <h1> Welcome to the shopping Cart!</h1>
            {currentItems.userCart.map((item)=>
                <div key={item}>
                <p>{item}</p>
                </div>
            )}
        </div>
    )
}


export default ShoppingCart