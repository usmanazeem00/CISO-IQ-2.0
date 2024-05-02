import React, { useState } from 'react';
import './SideMenu.css'; // Import your CSS file for styling

function SideMenu() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div style={{ position: 'absolute', right: 0, top: 0 }}>
        {/* Show toggle button only on desktop view */}
      </div>
      {/* Show close button only on mobile view */}
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <div style={{position:'absolute',backgroundColor:'yellow',width:'100%',borderStyle:'solid',borderWidth:1,borderColor:'black'}}>
HELLO
      </div>



        <nav>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'red'}}>
        <div style={{color:'#2F4858',fontSize:32,fontWeight:'700'}}>Staff Docker</div>
        <button onClick={closeMenu} className="close-button">X</button>
        </div>
          <ul>
            <li><div style={{textAlign:'center',height:55,alignContent:'center'}}>Home</div></li>
            <li><div style={{textAlign:'center',height:55,alignContent:'center'}}>Profile</div></li>
          </ul>
        </nav>
      </div>
      <div className="content">
      </div>
    </div>
  );
}

export default SideMenu;
