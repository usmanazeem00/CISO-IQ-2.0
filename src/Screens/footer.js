import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSkype, FaGooglePlus, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Colors } from './Colors';

const Footer = () => {
  const footerStyle = {
    backgroundColor: Colors.footer,
    padding: '20px 0',
  };

  const iconStyle = {
    color: 'white',
    fontSize: '20px',
    marginLeft: '10px',
  };

  return (
    <footer className="footer" style={footerStyle}>
      <Container fluid className="text-left">
        <Row className="align-items-center" style={{ margin: 0 }}>
          <Col lg={6} md={12}>
            <div className="d-flex flex-column">
              <img
                src="/Images/footerImage.png"
                alt="Vogue Vista Image"
                className="img-fluid"
                style={{ maxWidth: '391px', maxHeight: '72px' }}
              />
              <p style={{ fontSize: 16, fontWeight: '600', color: 'white', maxWidth: '391px' }}>
                eLörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.
              </p>
            </div>
          </Col>
          <Col lg={6} md={12}>
          <div className="d-flex flex-row">
        <div style={{ fontSize: 18, fontWeight: '400', color: 'white', maxWidth: '391px',display:'flex',flexDirection:'column', }}>
        <div style={{ fontSize: 22, fontWeight: '700', color: 'white', maxWidth: '391px' }}>Quick Links</div>
            <div>Feature </div>
            <div>Pricing</div>
            <div>About</div>
            <div>Contact</div>
            <div>Contact</div>
            <div>Take Assessment</div>
          </div>
          <div style={{ fontSize: 22, fontWeight: '700', color: 'white', maxWidth: '391px',marginLeft:20,marginRight:20,display:'flex',flexDirection:'column',alignItems:'center' }}>
          <div style={{ fontSize: 18, fontWeight: '400', color: 'white', maxWidth: '391px',display:'flex',flexDirection:'column', }}>
        <div style={{ fontSize: 22, fontWeight: '700', color: 'white', maxWidth: '391px' }}>Resources</div>
            <div>Articles</div>
            <div>TBD</div>
          </div>
          </div>
          <div style={{ fontSize: 18, fontWeight: '400', color: 'white', maxWidth: '391px',display:'flex',flexDirection:'column', }}>
        <div style={{ fontSize: 22, fontWeight: '700', color: 'white', maxWidth: '391px' }}>Contact</div>
            <div>📞 (415) 201-6370</div>
            <div>✉️ info@crescentcyber.com</div>
            <div>📍 623 Harrison St., 2nd Floor{'\n'}San Francisco, CA 94107</div>
          </div>
        </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className='text-center'>
        <small style={{ color: 'white' }} className="copyright">
          Copyright &copy; 2023 Crescent Cyber Limited. All Rights Reserved.
        </small>
        <br/>
        <a href="https://www.skype.com/" className="pull-right" target="_blank" rel="noopener noreferrer">
          <small style={iconStyle}><FaSkype /></small>
        </a>
        <a href="https://plus.google.com/" className="pull-right" target="_blank" rel="noopener noreferrer">
          <small style={iconStyle}><FaGooglePlus /></small>
        </a>
        <a href="https://www.linkedin.com/" className="pull-right" target="_blank" rel="noopener noreferrer">
          <small style={iconStyle}><FaLinkedin /></small>
        </a>
        <a href="https://twitter.com/" className="pull-right" target="_blank" rel="noopener noreferrer">
          <small style={iconStyle}><FaTwitter /></small>
        </a>
        <a href="https://www.facebook.com/" className="pull-right" target="_blank" rel="noopener noreferrer">
          <small style={iconStyle}><FaFacebook /></small>
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
