import cart from '../assets/cart.svg'
import React from 'react'
import "./Cartwidget.css";
const CartWidget = () => {
    return (
        <div className='cart-counter'>
            <img src={cart} alt="Cart-widget" className='cart-img' />
            <span className='counter'>0</span>
        </div>
    )
}

export default CartWidget