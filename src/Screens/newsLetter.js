import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Colors } from './Colors';

const NewsLetter = () => {
  const styles = {
    middle: { fontWeight: "500", fontSize: 64, color: "white" },
    main: { fontWeight: "700", fontSize: 64, color: "white" },
    end: { fontWeight: "700", fontSize: 64, color: "white" },
    end2: { fontWeight: "400", fontSize: 18, color: "white",marginTop:20 },
    end3: { fontWeight: "400", fontSize: 14, color: "#CAC9CC" },
  };
  return (
    <div style={{ padding: '30px',background:'linear-gradient(260.88deg, rgba(43, 27, 78, 0.9) -43.8%, #1D0158 100%)' }}>
    <Container fluid style={{ }}>
      <Row style={{ alignItems: "center", margin: 0 }}>
        <Col lg={6} md={12}>
          <img
            src="/Images/newsLetter.png"
            alt="Community Image"
            style={{ width: "100%", height: "auto" }} // Adjusted image size
            className="img-fluid d-lg-block d-md-none"
          />
        </Col>
        <Col lg={6} md={12}>
          <div className="text" style={{ height: "100%" }}>
            <h2 style={styles.middle}>Subscribe to Our NewsLetter</h2>
            <div style={styles.end2}>
            We're a united force dedicated to fortifying digital landscapes against threats. Through collaboration and innovation, we empower businesses and individuals, advocating for a safer online world. Join us in shaping the future of cyber security.
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
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default NewsLetter;