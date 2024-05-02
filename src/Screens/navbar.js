import React from 'react';
import { Link } from "react-router-dom";
import { Colors } from './Colors';

const Navbar = ({ totalQuantity }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-navy" style={{ backgroundColor: Colors.purple1, borderRightWidth:0, borderLeftWidth:0, borderTopWidth:0, borderBottomWidth:0.5, borderStyle:'solid', borderColor:'white'}}>
        <div className="container-fluid" style={{ backgroundColor: Colors.purple1, color: 'white', display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
          <div className="d-flex justify-content-start align-items-center">
            <img
              src="/Images/logo.png"
              alt="Crescent Cyber Image"
              className="img-fluid"
              style={{ maxWidth: '57px', maxHeight: '51px' }}
            />
            <h4>Crescent Cyber</h4>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            style={{ backgroundColor:'white' }}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ color: 'white'}}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link men-link" style={{ color: 'white', fontWeight:'600', fontSize:16 }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScWBdMqB257cQZ7ZbrY78-MjF_pwyGXkmgJ1TDNOvkEblMpag/viewform" className="nav-link men-link" style={{ color: 'white', fontWeight:'600', fontSize:16 }}>
                  Take An Assessment
                </a>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link" style={{ color: 'white', fontWeight:'600', fontSize:16 }}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ color: 'white', fontWeight:'600', fontSize:16 }}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ color: 'white', fontWeight:'600', fontSize:16 }}>
                  CISO IQ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ color: 'white', fontWeight:'600', fontSize:16 }}>
                  Company
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ color: 'white', borderWidth:1,textAlign:'center', borderColor:'white', borderRadius:5, borderStyle:'solid', fontWeight:'600', fontSize:17 }}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ color: 'white', textAlign:'center',backgroundColor:'white', color:'#371F6B', borderRadius:5,marginLeft:16, fontWeight:'600', fontSize:17 }}>
                  Try for Free
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
