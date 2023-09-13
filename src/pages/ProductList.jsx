import React,{useContext, useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Filter from '../components/filter';
import ProductContext from '../Contexts/ProductContext';

const ProductList = () => {

  const {data} = useContext(ProductContext)
  const [products,setProducts] = useState(null)
  const { category } = useParams()
    
  useEffect(() => {
    filteredProducts()
  },[category])

  const filteredProducts = () => {
    const result = data?.filter(product => product.category === category)
    setProducts(result)
  }
  
  return (
    <div className='product-list'>
    <Filter category = {category} products = {products} setProducts = {setProducts}/>
    <div className='product-container'>
        {products?.map((product) => {
            return <Link to={`/products/${product.id}`} key={product.id} >
            <div className='product'>
              <div className="product-image">
                <img src={product.image} alt="" />
              </div>
              <div className="name-price">
                <p>{product.name}</p>
                <p>₹{product.price.toLocaleString('hi')}</p>
              </div>
            </div>
            </Link>
        })}
    </div>
    </div>
  )
}

export default ProductList