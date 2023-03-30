import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Home = () => {
    return (
        <>
            <Navbar />
            <div class="section">
                <div class="slider">
                    <div class="container slidercontent">
                        <h1 class="hero">Welcome to Redux E-commerce Web App</h1>
                    </div>
                </div>
            </div>
            <div className='section'>
                <Products/>
            </div>
        </>
    )
}

export default Home