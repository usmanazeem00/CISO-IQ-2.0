import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Colors } from './Colors';

const Community = () => {  
   const styles={
        top:{fontWeight:'600',fontSize:20,color:'#06163B'},
        middle:{fontWeight:'600',fontSize:67,color:'#06163B'},
        end:{fontWeight:'400',fontSize:21,color:'#06163B'}
    }  
      return (
        <Container fluid style={{background: 'linear-gradient(111.19deg, #F8F7F7 -0.49%, #D6E9FB 142.36%)', padding: 0}}>
          <Row style={{alignItems:'center', margin: 0}}>
            <Col lg={6} md={12}>
              <div className="text" style={{height:'100%'}}>
                <div style={styles.top}>
                    Join Our Community
                </div>
                <h2 style={styles.middle}>Uniting Cyber Guardians for a Safer Digital World</h2>
                <div style={styles.end}>
                Welcome to the Cyber Security Firm Community Page! We're a united force dedicated to fortifying digital landscapes against threats. Through collaboration and innovation, we empower businesses and individuals, advocating for a safer online world. Join us in shaping the future of cyber security. Welcome to our community of vigilance and responsibility.
                </div>
                <button style={{backgroundColor:'#200063',fontSize:20,fontWeight:'600',borderRadius:8,color:'white',marginTop:32,paddingRight:12,paddingLeft:12,paddingTop:8,paddingBottom:8,width:'60%'}}>
                    Join Now
                </button>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <img
                src="/Images/community.png"
                alt="Community Image"
                style={{width: '100%', height: 'auto'}} // Adjusted image size
                className="img-fluid d-lg-block d-md-none"
              />
            </Col>
          </Row>
        </Container>
      ); 
};

export default Community;
