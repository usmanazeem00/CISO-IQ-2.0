import React from 'react';
import SecuredComponent from './Secured';
import WhyChooseCISOIQ from './WhyShaheen';
import Community from './community';
import Footer from './footer';
import LandingPage from './landing';
import Navbar from './navbar';
import NewsLetter from './newsLetter';
import SideMenu from './menu';
const Login = () => {
  return (
    <div style={{ backgroundColor: 'white', height: '100vh' }}>
      <Navbar/>
      <LandingPage/>
      <SecuredComponent/>
      <WhyChooseCISOIQ/>
      <Community/>
      <NewsLetter/>
      <div style={{height:'auto'}}>
 <Footer/>
      </div>
    </div>
  );
};

export default Login;