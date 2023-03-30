import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../store/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart)
    console.log(products)

    const handleremove = (product) => {
        dispatch(removeFromCart(product))
    }
    return (
        <>
            <Navbar />
            {(products.length === 0) ? (
                <div class="container">
                    <span>🛒</span>
                    <h1>Your cart is empty.</h1>
                    <Link to="/">Go to Home</Link>
                </div>
            ) : (
                <>
                    <h3>Cart</h3>
                    <div className='cartitems'>
                        {
                            products.map(product => (
                                <div className="cardcart" key={product.id}>
                                    <img src={product.image} alt="product" />
                                    <h4>{product.title}</h4>
                                    <h5>₹ {product.price}</h5>
                                    {/* <p className=''>{product.description}</p> */}
                                    <button onClick={() => handleremove(product.id)} className="btn">🗑️Remove</button>
                                </div>
                            ))
                        }
                    </div>
                </>
            )
            }

        </>
    )
}

export default Cart