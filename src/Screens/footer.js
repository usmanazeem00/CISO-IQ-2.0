import React from 'react';
import { Container } from 'react-bootstrap';
import { FaSkype, FaGooglePlus, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f8f9fa', // Adjust the background color as needed
    padding: '20px 0',
  };

  const copyrightStyle = {
    color: 'grey',
  };

  const iconStyle = {
    color: 'grey',
    marginLeft: '10px',
    fontSize: '20px',
  };

  return (
    <footer className="footer" style={footerStyle}>
      <Container className="text-left">
        <small style={copyrightStyle} className="copyright">
          Copyright &copy; 2023 Vogue-Vista Limited. All Rights Reserved.
        </small>
        <a href="https://www.skype.com/" className="pull-right" target="_blank" rel="noopener noreferrer">
  <small style={iconStyle}>
    <FaSkype />
  </small>
</a>

<a href="https://plus.google.com/" className="pull-right" target="_blank" rel="noopener noreferrer">
  <small style={iconStyle}>
    <FaGooglePlus />
  </small>
</a>

<a href="https://www.linkedin.com/" className="pull-right" target="_blank" rel="noopener noreferrer">
  <small style={iconStyle}>
    <FaLinkedin />
  </small>
</a>

<a href="https://twitter.com/" className="pull-right" target="_blank" rel="noopener noreferrer">
  <small style={iconStyle}>
    <FaTwitter />
  </small>
</a>

<a href="https://www.facebook.com/" className="pull-right" target="_blank" rel="noopener noreferrer">
  <small style={iconStyle}>
    <FaFacebook />
  </small>
</a>
      </Container>
    </footer>
  );
};

export default Footer;
