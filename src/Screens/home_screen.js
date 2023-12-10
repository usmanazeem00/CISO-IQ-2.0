import React from "react"
// import AppFunc from "./AppFunc.tsx"
// import AppClass from "./AppClass.tsx"
// import Display from "./Display.jsx"
import Login from "./Login.jsx"
import Navbar from './navbar.js'
import Slideshow from './slideshow.js'
import ProductCard from './productcard.js'
import About from './about.js'
import { UseSelector } from "react-redux/es/hooks/useSelector.js"
function HomeScreen(){
const dummyProductList = useSelector(state => state.addedProducts);
const a=dummyProductList.length()
alert(a)
return(
<>
<Navbar/>
<Slideshow/>
<ProductCard/>
<About/>
</>
);
}
export default HomeScreen