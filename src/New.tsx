import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./Screens/Login.jsx"
import About from './Screens/about.js'
import ProductCard from './Screens/productcard.js'
import Slideshow from './Screens/slideshow.js'
import Signup from "./Screens/Signup.js"
import ShoppingCart from './Screens/shoppingcart';

function New()
{
return(
<>
<Routes>
<Route path="/" element={<Login />}/>
<Route path="/home" element={<Slideshow/>}/>
<Route path="/products" element={<ProductCard />}/>
<Route path="/about" element={<About />}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/men" element={<ProductCard/>}/>
<Route path="/cart" element={<ShoppingCart/>}/>
</Routes>
</>
);
}
export default New