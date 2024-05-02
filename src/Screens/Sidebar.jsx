import React from "react";
import { useState } from "react";
import { SplitButton } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";
import { BsFillGearFill,BsHouseFill,BsFlagFill } from "react-icons/bs";
import './Main.css'
export default function SideBar({openSideBarToggle,Open}) {
  return (
    <aside id="sidebar" className={openSideBarToggle?"sidebar-responsive":""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src='/Images/CISOIQ.png' style={{width:158,height:37}} alt="CISO IQ"/>
        </div>
        <span className="icon close_icon" onClick={Open}>X</span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="#">
            <BsHouseFill className="icon" />
            Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFlagFill className="icon" />
           Features
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillGearFill className="icon" />
           RepoSafe
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillGearFill className="icon" />
            RepoCatcher
          </a>
        </li>
      </ul>
    </aside>
  );
}
