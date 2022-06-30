import './App.css';
import Navbar from './Components/Nav';
import { useState } from 'react';

function App() {
  const [userCart, setuserCart] = useState([1,2,3])
  return (
    <div>

    <Navbar userCart ={userCart}/>
    <div className="App">
      
      <h1> Welcome Home!</h1>
    
    </div>
    </div>
  );
}

export default App;
