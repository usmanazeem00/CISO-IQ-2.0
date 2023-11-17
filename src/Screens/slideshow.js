import React from 'react';
import { Carousel, Nav } from 'react-bootstrap';
import Navbar from './navbar';

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
          src="/Images/Cover 1.png"
          alt="Unable to Display Picture"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/Cover 2.png"
          alt="Unable to Display Picture"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/Cover 3.png"
          alt="Unable to Display Picture"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/Cover 4.png"
          alt="Unable to Display Picture"
          style={imageStyle}
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default CarouselComponent;
