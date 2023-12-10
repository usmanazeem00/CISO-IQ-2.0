import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const OrderSuccess= () => {
    const navigate=useNavigate();

  const [logoHovered, setLogoHovered] = useState(false);

  const handleLogoHover = () => {
    setLogoHovered(true);
  };

  const handleLogoLeave = () => {
    setLogoHovered(false);
  };
useEffect(() => {
    
    // Redirect to "/home" after 5 seconds 
    const redirectTimer = setTimeout(() => { navigate('/home'); }, 5000); 
    // Clear the timer on component unmount
     return () => clearTimeout(redirectTimer); }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            transition: "transform 0.5s ease",
            transform: logoHovered ? "scale(1.2)" : "scale(1)",
          }}
          onMouseEnter={handleLogoHover}
          onMouseLeave={handleLogoLeave}
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            style={{ fontSize: "7rem", color: "#6520ff", marginRight: "20px" }}
          />
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{ fontSize: "3rem", color: "#28a745" }}
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          color: "#000",
          padding: "20px 0",
          textAlign: "center",
          marginBottom: "200px",
        }}
      >
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Order Placed</p>
        <p style={{ fontSize: "1.2rem" }}>Thank you for shopping with us!</p>
        <p style={{ fontSize: "1rem" }}>Happy Shopping!</p>
      </div>

      <div style={{ backgroundColor: "#000", color: "#fff", padding: "20px 0" }}>
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol className="text-center">
              <p>&copy; 2023 Vogue Vista. All Rights Reserved.</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default OrderSuccess;