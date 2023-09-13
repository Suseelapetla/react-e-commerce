import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../Contexts/ProductContext'

const Navbar = () => {

  const {data} = useContext(ProductContext)
  const [click,setClick] = useState(false)
  const [menu,setMenu] = useState(false)
  const [searchResult,setSearchResult] = useState([])
  const categories = ["Mobile","Laptop","Earphones","Watch"]
  
  const searchProduct = (e) => {
    if(e.target.value.length > 2){
      const result = data.filter((product)=> 
        product.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearchResult(result)
    }
    else{
      setSearchResult([])
    }
  }

  const closeSearchBox = (e) => {
    if(e.target.className != "input"){
      setClick(false)
      setSearchResult([])
    }
  }


  return (
    <>
    <div className='navbar'>
      <i class="fa-solid fa-bars" onClick={() => {menu ? setMenu(false) : setMenu(true)}}></i>
      <Link to="/">
        <h1 className='logo'>electro.</h1>
      </Link>
      <div className="categories">
        {categories.map((category,idx) => {
          return <Link to = {`/${category}`} key={idx} state={{data : data}}>
                <li>{category}</li>
          </Link>
        })}
      </div>
      <i className="fa-solid fa-magnifying-glass" onClick={() => {click ? setClick(false) : setClick(true)}}></i>
      <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
    </div>
    {click && 
      <div className="search" onClick={e=>closeSearchBox(e)}>
        <input className="input" type="text" placeholder='Search' onChange={e=>searchProduct(e)}/>
        <div className="searchResult">
          {searchResult.map((product)=>{
            return <Link to={`/products/${product.id}`}>
              {product.name}
            </Link>
          })}
        </div>
    </div>}
    {menu && <div className="menu">
      <h1 className='logo'>electro.</h1>
      <div className="categories">
        <Link to="/" onClick={() => setMenu(false)}><li>Home</li></Link>
        {categories.map((category,idx) => {
          return <Link to = {`/${category}`} key={idx} state={{data : data}} onClick={() => setMenu(false)}>
                <li>{category}</li>
          </Link>
        })}
      </div>
    </div>}
    </> 
  )
}

export default Navbar