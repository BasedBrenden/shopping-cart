import './App.css';
import Navbar from './Components/Nav';
import React, {useContext} from 'react'
import { CartContext } from './CartContext';


function App() {
  
  const {userCart, setuserCart} = useContext(CartContext)

  const addToCart =(color)=>{

    const item ={
      name: color,
      image: document.getElementById(color+'Image').src,
      price: parseFloat(document.getElementById(color+'Price').innerHTML),
      quantity: parseInt(document.getElementById(color+'Quantity').value)
    }

    
    if(checkForDuplicates(item)){
      console.log('duplicate found')
      let tempArr =[...userCart];
      let i = tempArr.findIndex(collar => collar.name === item.name);
      tempArr[i].quantity += item.quantity;
      setuserCart([...tempArr])
    }else{
      setuserCart([...userCart, item])
    }
    
    console.log({userCart});

  }

  const checkForDuplicates =(item)=>{

    let tempArr =userCart
    for( let i=0; i< tempArr.length; i++){
      if(tempArr[i].name === item.name){
        return true
      }
    }
    return false;
  }



  return (
    <div>

    <Navbar/>
    <div className="App">
      
      <h1> Welcome Home!</h1>
    
      <div className="inventoryContainer">
        <div className = "inventoryCard">
            <p>Red Collar</p>
            <img src='https://img.chewy.com/is/image/catalog/133777_Main._AC_SL600_V1528226639_.jpg' alt='Not available' id="redImage"></img>
            <p>Price:  $<span className="collarPrice" id="redPrice">10.95</span></p>
            <p>Quantity:</p>
            <input type="number" min="1" max="10" step="1" id="redQuantity"></input>
            <button type='button' onClick={() => addToCart("red")}>Add To Cart</button>
        </div>
        <div className = "inventoryCard">
            <p>Blue Collar</p>
            <img src='https://img.chewy.com/is/image/catalog/133782_Main._AC_SL600_V1528226648_.jpg' alt='Not available' id="blueImage"></img>
            <p>Price:  $<span className="collarPrice" id="bluePrice">11.95</span></p>
            <p>Quantity:</p>
            <input type="number" min="1" max="10" step="1" id="blueQuantity"></input>
            <button type='button' onClick={() => addToCart("blue")}>Add To Cart</button>
        </div>
        <div className = "inventoryCard">
            <p>Black Collar</p>
            <img src='https://img.chewy.com/is/image/catalog/133787_Main._AC_SL600_V1528226656_.jpg' alt='Not available' id="blackImage"></img>
            <p>Price:  $<span className="collarPrice" id="blackPrice">10.95</span></p>
            <p>Quantity:</p>
            <input type="number" min="1" max="10" step="1" id="blackQuantity"></input>
            <button type='button' onClick={() => addToCart("black")}>Add To Cart</button>
        </div>
        <div className = "inventoryCard">
            <p>Pink Collar</p>
            <img src='https://img.chewy.com/is/image/catalog/133772_Main._AC_SL600_V1528226627_.jpg' alt='Not available' id="pinkImage"></img>
            <p>Price:  $<span className="collarPrice" id="pinkPrice">9.95</span></p>
            <p>Quantity:</p>
            <input type="number" min="1" max="10" step="1" id="pinkQuantity"></input>
            <button type='button'onClick={() => addToCart("pink")}>Add To Cart</button>
        </div>

      </div>
    </div>
    </div>
  );
}

export default App;
