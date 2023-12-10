import React from 'react';
import { BiCart } from 'react-icons/bi';
import { Link } from "react-router-dom";
import Slideshow from './slideshow.js';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
const Navbar = ({ totalQuantity }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-navy" style={{ backgroundColor: 'navy' }}>
        <div className="container-fluid" style={{ backgroundColor: 'navy', color: 'white' }}>
          <h4>Vouge Vista</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ color: 'white' }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link ms-5" style={{ color: 'white' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products/men" className="nav-link ms-5 men-link" style={{ color: 'white' }}>
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products/women" className="nav-link ms-5 women-link" style={{ color: 'white' }}>
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact_us" className="nav-link ms-5" style={{ color: 'white' }}>
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link ms-5" style={{ color: 'white' }}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link ms-5" style={{ color: 'white' }}>
                  <BiCart style={{ fontSize: '30px', fontWeight: 'bold' }} />
                  {totalQuantity > 0 && (
                    <span className="badge bg-danger rounded-circle ms-1">
                      {totalQuantity}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit" style={{backgroundColor:'green',color:'white'}}>
                Search
              </button>
            </form>
            {/* Logout button */}
            <Link to="/" className="btn btn-outline-danger ms-3" style={{ position: 'absolute', right: 30,backgroundColor:'red',color:'white' }}>
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
