import React from 'react';
import { BiCart } from 'react-icons/bi';
import { Link } from "react-router-dom";
import Slideshow from './slideshow.js';

const Navbar = ({ totalQuantity }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link ms-5">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link ms-5">
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link ms-5">
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact_us" className="nav-link ms-5">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link ms-5">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link ms-5">
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
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {/* Logout button */}
            <Link to="/" className="btn btn-outline-danger ms-3" style={{position:'absolute', right:30}}>
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;