import React,{useContext} from 'react';
import './style.css';
import {productsContext} from '../Global/ContextApi';
import CardContext from '../Global/CardContext';
import {CardContextData} from '../Global/CardContext'
export default function Product() {
  const {products}=useContext(productsContext);
  const {dispatch}=useContext(CardContextData);
  return (
   <>
  
   <div className="products">
    {
      products.map((product)=>(
 
        <div className="productss" key={product.id}>
          <div className="product_img">
            <img src={product.image} alt='not found'/>
          </div>
          <div className="product_detail">
            <div className="product_name">
              <h3>
              {product.name }
            

              </h3>
            </div>
            <div className="product_price">
              ${product.price}.00
            </div>
            <div className="addToCard">
              <button type='button ' onClick={()=>{
                dispatch({type:'Add To Card', id:product.id,product})
              }}>Add To Card</button>
            </div>

          </div>
        </div>

      ))
      
    }
   </div>
   
   </>
  );
}
