import './App.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import ProductContext from './Contexts/ProductContext'
import CartContext from './Contexts/CartContext'

function App() {

  const [data,setData] = useState(null);
  const [cart,setCart] = useState([])

  useEffect(() => {
    axios.get('/api/data')
    .then((response) => {
        setData(response.data.products)
    })
  },[])

  return (
    <>
      <ProductContext.Provider value={{data,setData}}>
      <CartContext.Provider value={{cart,setCart}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path={`/:category`} element={<ProductList/>}/>
        <Route path={`/products/:productId`} element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </CartContext.Provider>
      </ProductContext.Provider>
    </>
  )
}

export default App
