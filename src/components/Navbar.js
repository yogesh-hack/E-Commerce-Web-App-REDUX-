import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const items = useSelector((state) => state.cart)

    return (
        <>
            <div class="nav">
                <input type="checkbox" id="nav-check"/>
                    <div class="nav-header">
                        <div class="nav-title">
                           REDUX E-Commerce Web App 
                        </div>
                    </div>
                    <div class="nav-btn">
                        <label for="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div class="nav-links">
                        <Link to="/">🏠Home</Link>
                        <Link to="/cart">🛒Cart</Link>
                    </div>
                    <span className='cartcount'>Cart items : {items.length} </span>
            </div>
        </>
    )
}

export default Navbar