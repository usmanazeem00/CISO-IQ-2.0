import React from 'react';
import { Link } from "react-router-dom";
import { Colors } from './Colors';

const Navbar = ({ totalQuantity }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-navy" style={{ backgroundColor: Colors.white1, borderRightWidth:0, borderLeftWidth:0, borderTopWidth:0, borderBottomWidth:0.5, borderStyle:'solid', borderColor:'white'}}>
        <div className="container-fluid" style={{ backgroundColor: Colors.white1, color: 'white', display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
          <div className="d-flex justify-content-start align-items-center">
            <img
              src="/Images/CISOIQ.png"
              alt="Crescent Cyber Image"
              className="img-fluid"
              style={{ width: '157px', height: '38px' }}
            />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ }}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{backgroundColor:'white'}} onMouseOver={e=>e.target.backgroundColor='white'}>
                <form className="d-flex" style={{borderStyle:'solid',borderWidth:1,borderColor:'Gray/100',borderRightWidth:0}}>
                  <input className="form-control me-2" type="search" placeholder="Search Here" aria-label="Search here" />
                  <button className="btn btn-outline-light" type="submit" style={{borderStyle:'solid',borderWidth:1,borderColor:'Gray/100',marginLeft:0}}><img src='/Images/searchIcon.png' style={{width:24,height:24}}/></button>
                </form>
              </li>
              <li className="nav-item" style={{marginTop: '0px',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Link to="/pricing" className="nav-link rounded-circle d-inline-flex align-items-center justify-content-center"
                // Add hover effect
  onMouseOver={(e) => { e.target.style.background = 'linear-gradient(149.98deg, #1B1464 -29.42%, #139B6D 225.31%)'; }}
  onMouseOut={(e) => { e.target.style.background = ''; }}
                style={{borderWidth:1,borderStyle:'solid',borderColor:'black',  color: 'black', fontWeight:'600', fontSize:16, width: '40px', height: '40px', backgroundColor: 'lightgray',marginLeft:10 }}>
                  All
                </Link>
                <Link to="/" className="nav-link rounded-circle d-inline-flex align-items-center justify-content-center"
                
  onMouseOver={(e) => { e.target.style.background = 'linear-gradient(149.98deg, #1B1464 -29.42%, #139B6D 225.31%)'; }}
  onMouseOut={(e) => { e.target.style.background = 'white'; }}
                style={{ color: 'black',fontWeight:'600', fontSize:16, width: '48px', height: '48px', backgroundColor: 'white',marginLeft:10 }}>
                 <img src='/Images/gitHub.png' style={{width:36,height:36}}/>
                </Link>
                <Link to="/" className="nav-link rounded-circle d-inline-flex align-items-center justify-content-center"
                // Add hover effect
  onMouseOver={(e) => { e.target.style.background = 'linear-gradient(149.98deg, #1B1464 -29.42%, #139B6D 225.31%)'; }}
  onMouseOut={(e) => { e.target.style.background = 'white'; }}
                style={{ color: 'black', fontWeight:'600', fontSize:16, width: '48px', height: '48px', backgroundColor: 'white',marginLeft:10 }}>
                 <img src='/Images/gitLab.png' style={{width:36,height:36}}/>
                </Link>
                <Link to="/" className="nav-link rounded-circle d-inline-flex align-items-center justify-content-center"
                // Add hover effect
  onMouseOver={(e) => { e.target.style.background = 'linear-gradient(149.98deg, #1B1464 -29.42%, #139B6D 225.31%)'; }}
  onMouseOut={(e) => { e.target.style.background = 'white'; }}
                style={{ color: 'black', fontWeight:'600', fontSize:16, width: '48px', height: '48px', backgroundColor: 'white',marginLeft:10 }}>
                 <img src='/Images/bitBucket.png' style={{width:38,height:36}}/>
                </Link>
                <Link to="/" className="nav-link rounded-circle d-inline-flex align-items-center justify-content-center"
                // Add hover effect
  onMouseOver={(e) => { e.target.style.background = 'linear-gradient(149.98deg, #1B1464 -29.42%, #139B6D 225.31%)'; }}
  onMouseOut={(e) => { e.target.style.background = 'white'; }}
                style={{ color: 'black', fontWeight:'600', fontSize:16, width: '48px', height: '48px', backgroundColor: 'white',marginLeft:10 }}>
                 <img src='/Images/huggingFace.png' style={{width:36,height:36}}/>
                </Link>
              </li>
              <li className='nav-item'>
              <Link to="/" className="nav-link rounded-circle d-column-flex align-items-center justify-content-center"

                style={{ color: 'black', fontWeight:'600', fontSize:16, width: '48px', height: '48px', backgroundColor: 'white',marginLeft:'50%' }}>
                 <img src='/Images/eagle.jpg' style={{width:36,height:36}}/>
                 <div style={{fontSize:10}}>Analyst</div>
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
