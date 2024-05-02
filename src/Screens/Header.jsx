import React from "react";
import { useState } from "react";
import { BsJustify } from "react-icons/bs";
export default function Header({Open})
{
    return(
        <header className="header">
          <div className="menu-icon">
<BsJustify className="icon" onClick={Open}/>
            </div>
        </header>
    )
}