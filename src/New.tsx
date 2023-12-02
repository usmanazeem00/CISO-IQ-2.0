import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./Screens/Login.jsx"
import About from './Screens/about.js'
import ProductCard from './Screens/productcard.js'
import Slideshow from './Screens/slideshow.js'
import Signup from "./Screens/Signup.js"
import ContactUs from "./Screens/contact_us_screen.js"

function New()
{
return(
<>
<Routes>
<Route path="/" element={<Login />}/>
<Route path="/home" element={<Slideshow/>}/>
<Route path="/products/:gender" element={<ProductCard />}/>
<Route path="/about" element={<About />}/>
<Route path="/contact_us" element={<ContactUs />}/>
<Route path="/signup" element={<Signup/>}/>
</Routes>
</>
);
}
export default New