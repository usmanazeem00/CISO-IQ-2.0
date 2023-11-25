import React from "react"
// import AppFunc from "./AppFunc.tsx"
// import AppClass from "./AppClass.tsx"
// import Display from "./Display.jsx"
import Login from "./Login.jsx"
import Navbar from './navbar.js'
import Slideshow from './slideshow.js'
import ProductCard from './productcard.js'
import About from './about.js'
function HomeScreen()
{
return(
//   {  <AppFunc emotion={"sad"} Age={33} Gender={"MALE"}/>}
// {<AppClass emotion={"sad"} Age={33}/>}
//<Display name="Usman" age="21"/>Log
//<Login/>
<>
<Navbar/>
<Slideshow/>
<ProductCard/>
<About/>
</>
);
}
export default HomeScreen