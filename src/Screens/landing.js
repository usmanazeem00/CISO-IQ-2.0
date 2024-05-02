import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Colors } from "./Colors";

const LandingPage = () => {
  const styles = {
    middle: { fontWeight: "500", fontSize: 64, color: "white" },
    main: { fontWeight: "700", fontSize: 64, color: "white" },
    end: { fontWeight: "700", fontSize: 64, color: "white" },
    end2: { fontWeight: "400", fontSize: 18, color: "white",marginTop:20 },
    end3: { fontWeight: "400", fontSize: 14, color: "#CAC9CC" },
  };
  return (
    <Container fluid style={{ backgroundColor: Colors.purple1, padding: 0 }}>
      <Row style={{ alignItems: "center", margin: 0 }}>
        <Col lg={6} md={12}>
          <div className="text" style={{ height: "100%" }}>
            <h2 style={styles.middle}>Cradle Your Source Code Safely With <h2 style={styles.main} >CISO IQ</h2></h2>
            <div style={styles.end2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum congue metus quis accumsan euismod.
            </div>
            <div>
              <div
                style={{
                    marginTop:20,
                  display: "flex",
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius:12,
                  padding:'10px 20px'
                }}
              >
                <input style={{width:'80%',marginLeft:10,borderWidth:0,borderColor:'white', outline: 'none' }} placeholder="Enter your Email"/>
                {/* Adjust margin as needed */}
                <button
                  style={{
                    backgroundColor: "#150043",
                    color: "white",
                    fontSize: "16px",
                    borderRadius: 12,
                    padding: "5px 10px",
                  }}
                >
                  Start Trial
                </button>
              </div>
            </div>
            <div style={styles.end2}>or continue with  Google  Github</div>
            <div style={styles.end3}>
              By clicking “Continue” you agree to our Terms of Use and Privacy
              Policy.
            </div>
          </div>
        </Col>
        <Col lg={6} md={12}>
          <img
            src="/Images/community.png"
            alt="Community Image"
            style={{ width: "100%", height: "auto" }} // Adjusted image size
            className="img-fluid d-lg-block d-md-none"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
