import React from "react";
import { useState } from "react";
import './Main.css'
import SideMenu from "./menu";
import  Home from './Home'
import Header from "./Header";
import SideBar from "./Sidebar";
export default function Main()
{
    const [open,setOpen]=useState(false)
    const toggleBar=()=>setOpen(!open)
    return(
        <div className="grid-container">
            <Header Open={toggleBar}/>
            <SideBar openSideBarToggle={open} Open={toggleBar}/>
            <Home/>
        </div>
    )
}