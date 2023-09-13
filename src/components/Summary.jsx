import React from 'react'

const Summary = (props) => {

    const cart = props.cart
    const setCart = props.setCart
    const setClick = props.setClick

  return (
    <>
    <div className='summary'>
      <div className="subtotal">
        <p>Subtotal</p>
        <p>₹{(cart.reduce((total,item) => total + item.qty*item.price,0)).toLocaleString('hi')}</p>
      </div>
      <div className='shipping'>
        <p>Shipping</p>
        <p>FREE</p>
      </div>
      <div className="total">
        <p>Total</p>
        <p>₹{(cart.reduce((total,item) => total + item.qty*item.price,0)).toLocaleString('hi')}</p>
      </div>
      <button className='btn' onClick={e => (setClick(true),setCart([]))}>Check Out</button>
    </div>
    </>
  )
}

export default Summary