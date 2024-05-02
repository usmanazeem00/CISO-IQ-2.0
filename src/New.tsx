import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./Screens/Login.jsx"
import About from './Screens/about.js'
import ProductCard from './Screens/productcard.js'
import Slideshow from './Screens/slideshow.js'
import Signup from "./Screens/Signup.js"
import ShoppingCart from './Screens/shoppingcart';
import ContactUs from "./Screens/contact_us_screen.js"
import CheckoutPage from "./Screens/checkout.js"
import { UserProvider } from "./Screens/userContext.js"
import OrderSuccess from "./Screens/success.jsx"
import AdminPanel from "./Screens/adminpanel.js"
import PriceItem from "./Screens/pricingComponent.js"
import App from "./App.tsx"
import Book from "./Book.tsx"
import Main from "./Screens/Main.jsx"
import SideMenu from "./Screens/menu.js"
function New()
{
return(
<>
<UserProvider>
      <Routes>
        <Route path="/app" element={<Book/>}/> 
        <Route path="/" element={<Main/>} /> 
        <Route path="/pricing" element={<PriceItem />} />
        <Route path="/products/:gender" element={<ProductCard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/men" element={<ProductCard />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/ordersuccess" element={<OrderSuccess />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </UserProvider>
</>
);
}
export default New