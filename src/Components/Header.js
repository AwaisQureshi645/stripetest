import React from 'react'
import Bannar from './Bannar';
import Heading from './Heading';
import ContextApi from '../Global/ContextApi';
import Product from './product';
export default function Header() {
  return (
   <>
   
<Bannar/>
<Heading/>
<ContextApi>
  <Product/>
</ContextApi>
   
   
   </>
  )
}
