import React,{useContext} from 'react'
import './style.css';
import  {GiShoppingCart} from 'react-icons/gi';
import {Link} from 'react-router-dom';
import { CardContextData } from '../Global/CardContext'
import Card from './Card';


export default function Navbar() {
  const {qty} =useContext(CardContextData);
  return (
    <>

    <div className="navbarContainer" style={{marginBottom:"5rem"}}>
        <div className="leftContainer">
        <h2 style={{paddingLeft:"5rem",color:"#DA6A00"}}>
          <Link to='/' className='logo'>SelloBuyo </Link>  
        </h2>
        </div>
     
        <div className="right">
           <Link to='card'> <GiShoppingCart style={{width:"3rem",height:"3rem"}}/></Link> 
                <p className='zero' style={{color:"white"}}>{
             
                qty 
              }</p>
        </div>
    </div>
    </>
  )
}
