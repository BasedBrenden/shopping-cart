import Navbar from "./Nav"
import './Cart.css'
import React, {useContext} from 'react'
import { CartContext } from '../CartContext';
import { Link } from "react-router-dom";


const ShoppingCart =() =>{


    const {userCart, setuserCart} = useContext(CartContext)
  
    let tempPrice=0;
    let tempItemCount=0;
    userCart.forEach( (X)=>{
        
        tempPrice += (X.price* X.quantity);
        tempItemCount += X.quantity;
        
    })

    const removeItem = (itemName) =>{

        //find index of what was clicked, 
        let index = userCart.findIndex( item => item.name === itemName)
        //clone into an array
        let tempArr = [...userCart];
        //remove from array
        tempArr.splice(index,1)
        //update state
        setuserCart([...tempArr])
    }
    
    

     
    return(
        <div>
            <Navbar />
            <h1> Your Items</h1>
            <div>

                <div>
                    <p> Subtotal (<span>{tempItemCount}</span>): ${tempPrice.toPrecision(4)}</p>
                </div>
            </div>
            <div className="cartOrderContainer">
                <p> name</p>
                <p> cost</p>
                <p> quantity</p>
            </div>
            {userCart.map((item)=>
                <div key={item.name} className="cartOrder">
                <img className="cartOrderImg" src={item.image} alt="not available"></img>
                <p>{item.name} collar</p>
                <p>${item.price}</p>
                <p>x{item.quantity}</p>
                <button type="button" className="cartRemoveBtn" onClick={()=> removeItem(item.name)}>Remove</button>
                </div>
            )}
            <div className="cartOrderBottomBtns">
                <Link to="/"><button className="cartCancelBtn">Cancel</button></Link>
                <button type="button" className="cartCheckoutBtn">Check out!</button>
            </div>
            
        </div>
    )
}


export default ShoppingCart