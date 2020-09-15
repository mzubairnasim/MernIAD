import React,{useState,useEffect} from 'react'

import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {

  // const [products, setproducts] = useState([])

    const productList = useSelector(state => state.productList)
    const {products,error,loading}=productList
    const dispatch=useDispatch()

  useEffect(() => {
     dispatch(listProducts())
    return()=>{
    }
  }, [])
    return loading? <div>loading...</div>:error?<div>{error}</div>:(
        <div>
           <ul className="products">
        {products.map(value=>
          <li key={value._id}>
            <div className="product">
              <Link  to={'/product/'+ value._id}>
              <img  src={value.image} alt="product" style={{width:150,height:150}}/>
              </Link> 
              <div className="product-name">
              <Link to={'/product/'+ value._id}>{value.name}</Link>
              </div>
              <div className="product-brand">{value.brand}</div>
              <div className="product-price">${value.price}</div>
              <div className="product-rating">{value.rating} Stars {value.numReviews}</div>
            </div>
          </li>
          )}
         
        
        </ul>
        </div>
    )
}
