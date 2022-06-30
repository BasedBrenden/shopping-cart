import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';
const Navbar = ({userCart}) =>{

    return(
        <div>
            <nav>
                
                <p className="title"><Link to="/">Paws</Link></p>
                
                <span className="material-symbols-outlined grid-cart"><Link to="/shopping_cart" state={{currentItems: {userCart}}}>shopping_cart</Link></span>
            </nav>
        </div>
    )
};

export default Navbar