import React, { useContext, useState } from 'react'
import CartContext from '../Contexts/CartContext'
import { Link } from 'react-router-dom'
import Summary from '../components/Summary'

const Cart = () => {

  const { cart,setCart } = useContext(CartContext)
  const [click,setClick] = useState(false)
 
  const removeFromCart = (id) => {
    const result = cart.filter((item) => item.id != id)
    setCart(result)
  }

  const getQuantity = (action,id) => {
    const result = cart.map((item) => {
      if(item.id === id){
        if(action === "increment"){
          return ({...item,qty: item.qty+1})
        }else if(action === "decrement" && item.qty>1){
          return ({...item,qty: item.qty-1})
        }
      }else{
        return item
      }
    })
    setCart(result)
  }

  return (
    <>
    <div className='cart-page'>
    <div className="cart">
    {cart?.map((item) => {
      return <div className="item">
        <img src={item.image} alt="" />
        <div className="cart-details">
        <p id='item-name'>{item.name}</p>
        <p>₹{(item.price * item.qty).toLocaleString('hi')}</p>
        <div className="quantity">
          {item.qty>1 && <button onClick={() => getQuantity("decrement",item.id)}>-</button>}
          {item.qty===1 && <button id='inactive'>-</button>}
          <span>{item.qty}</span>
          <button onClick={e => getQuantity("increment",item.id)}>+</button>
        </div>
        <button id='remove' onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      </div>
    })}
    </div>
    {cart.length !=0 && <Summary cart={cart} setCart = {setCart} click={click} setClick={setClick}/>}
    </div>
    {click ? 
    <div className="order-placed">
        <div className="card">
          <i class="fa-solid fa-circle-check"></i>
          <p>Order Placed Succesfully </p>
          <Link to="/" onClick={e => (setClick(false))}>
          Continue Shopping
          </Link>
        </div>
    </div> :
    cart.length == 0 && <div className="empty">
      <i class="fa-solid fa-cart-shopping"></i>
      <p>Your cart is empty</p>
      <Link to="/">
        Continue shopping
      </Link>
    </div>}
    </>
  )
}

export default Cart