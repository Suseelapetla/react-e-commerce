import React, { useContext, useEffect } from 'react'
import ProductContext from '../Contexts/ProductContext';
import { Link, useParams } from 'react-router-dom'
import CartContext from '../Contexts/CartContext';

const ProductDetails = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  })

  const { data } = useContext(ProductContext);
  const { cart,setCart } = useContext(CartContext)
  const { productId } = useParams();
  const product = data?.find((product) => product.id == productId);
  const multiple = cart.find((item) => item.id == productId)

  const addToCart = () => {
    {multiple ? multiple.qty++ : setCart([...cart,{...product,qty:1}])}
  }
  
  return (
    <>
    {product && <div className="product-detail">
        <img src={product.image} alt="" />
        <div className="details">
            <p className='product-name'>{product.name}</p>
            <p className='price'>₹ {product.price.toLocaleString('hi')}</p>
            <li>Inclusive of all taxes</li>
            <div className="delivery">
              <i class="fa-solid fa-truck"></i>
              <p>Delivery:</p>
              <li className='stock'>In Stock</li>
              <li>Free Delivery</li>
            </div>
            <Link to="/cart">
              <button className="btn" onClick={e => (addToCart())}>Add to Cart {multiple ? <span>({multiple.qty})</span> : null}</button>
            </Link>
            <div className="highlights">
            {product.about?.map((about) => {
              return <li>{about}</li>
            })}
            </div>
        </div>
    </div>}
    </>
  )
}

export default ProductDetails

