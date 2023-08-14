import React from 'react'
import { createContext , useReducer } from 'react'
import {CardRefuser} from './cardRefuser';
export const CardContextData=createContext();



export default function CardContext(props) {
const [card,dispatch]=useReducer(CardRefuser,
    {shoppingCard:[],totalPrice:0,qty:0});
  return (
   <>
   <CardContextData.Provider value={{...card,dispatch}}>
    {props.children}
   </CardContextData.Provider>
   
   </>
  )
}
