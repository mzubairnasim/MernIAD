import React,{ useEffect, useState} from 'react'
// import data  from '../data'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct } from '../actions/productActions'
export default function ProductScreen(props) {

    const [qty,setqty]=useState(1)

    // console.log(props.match.params.id)
    // const product=data.products.find( x=> x._id ===props.match.params.id)

    const productDetails=useSelector(state=>state.productDetails)
    const {product,error,loading}=productDetails
    const dispatch=useDispatch()

    useEffect(() => {
       dispatch(detailsProduct(props.match.params.id))
        return () => {
        //  
        }
    }, [])


    const addcart=()=>{
         props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
    }


    return (
        <div>
        <div className='back-to-result'>
            <Link to='/'>Back</Link>
        </div>
        {loading?<div>loading...</div>:error?<div>{error}</div>:
         <div className='details'>

            <div >
                <img src={product.image} alt="" style={{width:500,height:500}} />
            </div>

            <div className='details-info'>
                    <ul>
                        <li>
                          <h4>{product.name}</h4>  
                        </li>
                        <li>{product.rating}  Stars  {product.numReviews}</li>
                        <li>
                            ${product.price}
                        </li>
                        <li>
                            Description
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
            </div>

                            <div className='details-action'>
                                <ul>
                                    <li>
                                        Price:{product.price}
                                    </li>
                                    {/* <li>
                                       Status:{product.status}
                                    </li> */}
                                    <li>
                                        QTy <select value={qty} onChange={e=>setqty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map(x=>
                                            <option value={x+1}>{x+1}</option>
                                            )}
                                        </select>
                                    </li>
                                    <li>
                                        <button className='button primary' onClick={addcart}>Add to Cart</button>
                                    </li>
                                </ul>
                            </div>

        </div>
          
        }
       
        </div>
    )
}
