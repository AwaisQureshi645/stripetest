import React, { createContext, useState } from 'react'
import camera from '../images/camera.jpg';
import headPhone from '../images/headphone.jpg';
import iphone7 from '../images/iphone7.jpg';
import iphone13 from '../images/iphone13.jpg';
import laptop from '../images/laptop.jpg';
import watch from '../images/watch.jpg';
import shoe from '../images/shoe.jpg';
import earbuds from '../images/earbud.jpg';


export const productsContext = createContext();
export default function ContextApi(props) {

    const [products] = useState([
        { id: 1, name: "Camera", price: 200, image: camera, status: 'hot' },
        { id: 2, name: "HeadPhone", price: 300, image: headPhone, status: 'new' },
        { id: 3, name: "iphone7", price: 500, image: iphone7, status: 'hot' },
        { id: 4, name: "iphone13", price: 400, image: iphone13, status: 'hot' },
        { id: 5, name: "laptop", price: 200, image: laptop, status: 'hot' },
        { id: 6, name: "watch", price: 240, image: watch, status: 'new' },
        { id: 7, name: "shoe", price: 200, image: shoe, status: 'hot' },
        { id: 8, name: "earbuds", price: 100, image: earbuds, status: 'new' },


    ])

    return (
        <div>
            <productsContext.Provider value={{ products: [...products] }}>
                {props.children}
            </productsContext.Provider>
        </div>
    )
}
