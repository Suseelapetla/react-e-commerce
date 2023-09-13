import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import ProductContext from '../Contexts/ProductContext'

const Filter = (props) => {

    const category = props.category
    const products = props.products
    const setProducts = props.setProducts
    const {data} = useContext(ProductContext)
    const [brands,setBrands] = useState(null)
    const [filtered,setFiltered] = useState([])
    const defaultProducts = data?.filter((product) => product.category == category)
    
    useEffect(() => {
        axios.get('/api/data')
        .then((response) => {
            setBrands(response.data.brands)
        })
    },[])

    useEffect(() => {
        filterByBrand()
    },[filtered])
    
    const SelectBrands = (brand,e) => {
        if(!filtered.includes(brand)){
            setFiltered([...filtered,brand])
            e.target.style.backgroundColor = "transparent"
            e.target.style.color = "#000"
        }else{
            setFiltered(filtered.filter((item) => item != brand)) 
            e.target.style.backgroundColor = "#000"
            e.target.style.color = "#fff"
        }
    }

    const filterByBrand = () => {
        if(filtered.length>0) {
            const result = filtered.map((brand,idx) => data?.filter((product) => product.brand === brand && product.category == category))
            setProducts(result.flat())
        }
        else{
            setProducts(defaultProducts)
        }
    }

    const handleChange = (e) => {
        const result = products.sort((a,b) => {
            if(e.target.value == "ascending"){
                return a.price - b.price
            }else if(e.target.value == "descending"){
                return b.price - a.price
            }
        }).map((num) => num);
        setProducts(result)
        if(e.target.value == "default"){
            setProducts(defaultProducts)
        }
    }
    

  return (
    <div className='filter'>
        <div className="brands">
        {brands?.[category]?.map((brand,idx) => {
            return <button onClick={e => SelectBrands(brand,e)}>{brand}</button>
        })}
        </div>
        <label for="sort">
        Sort by: 
        <select name="sort" onChange={e =>handleChange(e)}>
            <option value="default" on>--select--</option>
            <option value="ascending" >
                Price: Low to High
            </option>
            <option value="descending">
                Price: High to Low
            </option>
        </select>
        </label>
    </div>
  )
}

export default Filter

