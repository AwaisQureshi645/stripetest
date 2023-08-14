import React, { useContext, useState } from 'react'
import './styleCards.css';
import { CardContextData } from '../Global/CardContext'
import { GrAddCircle } from 'react-icons/gr';
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri'
import StripeCheckOut from 'react-stripe-checkout';
import Empty from './Empty';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// toast.configure();
export default function Card() {

  const notify = () => toast("Wow so easy!");

  const { shoppingCard, totalPrice, qty, dispatch } = useContext(CardContextData);
  const handleToken = async (token) => {
    try {
 
      const product = { name: 'All Products', price: totalPrice }
      const response = await axios.post("http://localhost:3000/checkout", {
        product,
        token,
      });
      const { status } = response.data;
      if (status === "success") {
        dispatch({type:'Empty'})
        props.history.push('/');
  
        toast.success("You have paid successfully and continues shopping  ", { position: toast.POSITION.TOP_RIGHT })
window.alert("successfully ")
      } else {
        dispatch({ type: 'EMPTY' })
       
      }
      console.log(response);


    } catch (e) {
     
    }


  }
  return (

    <>
      <div className="card_container">
        <div className="card_detail">
          {
            shoppingCard.length > 0 ?

              shoppingCard.map(card => (

                <div className="card" key={card.id}>
                  <img src={card.image} alt="image not found" />
                  <span className='card-product-name' >{card.name}</span>
                  <span className='card-product-price' >${
                    card.qty > 0 ?
                      card.price * card.qty : card.price}.00</span>
                  <GrAddCircle className='cardIcons' onClick={() => dispatch({ type: "inc", id: card.id, card: card })} />
                  <span className='card-product-Quality' >{
                    card.qty > 0 ?
                      card.qty : "1"}</span>
                  <AiOutlineMinusCircle className='cardIcons' onClick={() => dispatch({ type: "dec", id: card.id, card: card })} />
                  <RiDeleteBinLine className='cardIcon' onClick={() => dispatch({ type: "delete", id: card.id, card: card })} />
                </div>
              ))
              : (<Empty />)}

        </div>
        {shoppingCard.length > 0 ?
          <div className="cardSummary">
            <div className="summary">
              <h3>Cart Summary </h3>
            </div>
            <div className="TotalItem">
              <div className="items">Toal items :</div>
              <div className="items" style={{ color: "#DA6A00" }}>{qty}</div>
            </div>
            <div className="TotalPriceSection">
              <div className="TotalPrice">Total Price  </div>
              <div className="TotalPrice" style={{ color: "#DA6A00" }}>${totalPrice}.00</div>
            </div>
            <div className="StripeButton">
              <StripeCheckOut onClick={notify}
               stripeKey='pk_test_51MFeFBLjMxsRcJtMH6eI9oWOoBP95zrWtoY0jSkgUrPzyfcQvPX8ayPL5ro31SdQ8Rcd3pc7A4mBmVGJ9vKN5BLa00UeXZsjoi'
                token={handleToken}
                billingAddress
                shippingAddress
                amount={totalPrice * 100}
                name='All Products'
              ></StripeCheckOut>

            </div>
          </div>
          : ""
        }
      </div>

    </>
  )
}
