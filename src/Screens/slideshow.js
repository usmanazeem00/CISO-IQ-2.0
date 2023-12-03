import React from 'react';
import { Carousel, Nav } from 'react-bootstrap';
import Navbar from './navbar';
import BestsellersSection from './productcard';

const CarouselComponent = () => {
  const imageStyle = {
    maxHeight: '600px', // Adjust the value as needed
    margin: 'auto', // Center the image horizontally
  };

  
  return (
    <>
    <Navbar/>
    <Carousel interval={2000}>
      {/* Adjust the interval value (in milliseconds) as needed */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/def.png"
          alt="Unable to Display Picture"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/ghi.png"
          alt="Unable to Display Picture"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/def.png"
          alt="Unable to Display Picture"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/abc.png"
          alt="Unable to Display Picture"
          style={imageStyle}
        />
      </Carousel.Item>
    </Carousel>
    <BestsellersSection/>
    </>
  );
}

export default CarouselComponent;
