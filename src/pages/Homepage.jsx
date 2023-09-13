import React, { useContext } from 'react'
import Slider from '../components/Slider'
import { Link } from 'react-router-dom'
import ProductContext from '../Contexts/ProductContext'
import new1 from "../images/new1.jpg";
import new2 from "../images/new2.jpg"


const Homepage = () => {

  const { data } = useContext(ProductContext) 
  
  const categories = [
    {name: "Mobile" , image: "https://m.media-amazon.com/images/I/6175SlKKECL._SX679_.jpg"},
    {name: "Laptop" , image: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/o/7/1/-original-imagpxgrmuazgfce.jpeg?q=70"},
    {name: "Earphones" , image: "https://m.media-amazon.com/images/I/71ISIssoVFL._SX466_.jpg"},
    {name: "Watch" , image: "https://m.media-amazon.com/images/I/71XMTLtZd5L._SL1500_.jpg"}
  ]

  return (
    <>
      <Slider/>
      <div className="home-categ">
        {categories.map((category) => {
          return <Link to = {`/${category.name}`} state={{data : data}}>
          <div className="category">
            <div className="category-image">
              <img src={category.image} alt="" /> 
            </div>
            <p>{category.name}</p>
          </div>
          </Link>
        })}
      </div>
      <div className="bestsellers-container">
        <p>Best sellers</p>
      <div className="bestsellers">
        {data?.map((product) => {
          if(product.bestseller == true){
            return <Link to={`/products/${product.id}`}>
              <div className='product'>
                <img src={product.image} alt="" />
                <p>{product.name}</p>
                <p>₹{product.price.toLocaleString('hi')}</p>
              </div>
            </Link>
          }
        })}
      </div>
      </div>
      <div className="new-arrival">
        <p id='new'><span>The latest.</span> Take a look at what’s new right now.</p>
        <div className="images">
          <Link to="/products/17">
          <img src={new1} alt="new" />
          </Link>
          <Link to="/products/24">
          <img src={new2} alt="new" />
          </Link>
        </div>
      </div>
      <div className="footer">
      <i class="fa-solid fa-angles-up"></i>
      <span onClick={()=>window.scrollTo(0,0)}>Back to top</span>
      </div>
    </>
  )
}

export default Homepage