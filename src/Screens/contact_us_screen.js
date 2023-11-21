import React from 'react';
import { Container, Row, Col, NavbarBrand } from 'react-bootstrap';
import Navbar from './navbar';
import styled, {ThemeProvider } from "styled-components";


const ContactUs = () => {
    const theme = {
        colors: {
          white: '#ffffff',
          btn: '#add8e6',
        },
    };
    const headingStyle = {
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        borderBottom: '2px solid #333',
        paddingBottom: '5px',
        marginTop: '20px',
    };

    const highlightStyle = {
        backgroundColor: '#000',
        color: '#fff',
        padding: '5px',
      };
      
      
    const Wrapper = styled.section`
    // padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
                background-color: ${theme.colors.white};
              border: 1px solid ${theme.colors.btn};
              color: ${theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return (
    <Wrapper>
    <Navbar/>
    <h2 style={headingStyle}>Contact the technical team of <span style={highlightStyle}>Vogue Vista</span></h2>
    
    <div style={{ display: 'flex', maxWidth: '1200px', margin: 'auto', marginTop: '20px', marginBottom: '20px' }}>

  <div style={{ flex: 1 }}>

    <img src="/Images/black.png" alt="Your Logo" style={{ maxWidth: '100%', height: 'auto' }} />
  </div>

  <div style={{ flex: 1, marginLeft: '20px' }}>
  <div style={{ backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <form action='https://formspree.io/f/xknlaava' method='POST' style={{ display: 'grid', gap: '15px' }}>
          <div style={{ display: 'grid', gap: '8px' }}>
            <label htmlFor='username' style={{ fontWeight: 'bold' }}>Username</label>
            <input type='text' id='username' name='UserName' required autoComplete='off' style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ display: 'grid', gap: '8px' }}>
            <label htmlFor='email' style={{ fontWeight: 'bold' }}>EMAIL</label>
            <input type='email' id='email' name='email' required autoComplete='off' style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ display: 'grid', gap: '8px' }}>
            <label htmlFor='message' style={{ fontWeight: 'bold' }}>Message:</label>
            <textarea id='message' name='message' cols='30' rows='10' required autoComplete='off' placeholder='Enter Your Message' style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}></textarea>
          </div>
          <div style={{ display: 'grid', gap: '8px' }}>
            <button type='submit' style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>SEND</button>
          </div>
        </form>
      </div>
  </div>
</div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5515130266126!2d74.30043917457454!3d31.48152117423175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903f08ebc7e8b%3A0x47e934f4cd34790!2sFAST%20NUCES%20Lahore!5e0!3m2!1sen!2s!4v1700580396033!5m2!1sen!2s" 
    width="100%" 
    height="450" 
    style={{border:0}}
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
    </iframe>

    
        </Wrapper>
        );
};

export default ContactUs;



