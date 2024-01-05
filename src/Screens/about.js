import React from 'react';
import { Container, Row, Col, NavbarBrand } from 'react-bootstrap';
import Navbar from './navbar';
const About = () => {
  return (
    <>
    <Navbar/>
    <Container className="mt-5 text-center">
            <h2 style={{ backgroundColor: 'darkblue', color: 'white', padding: '15px' }}>
            Our Mission
        </h2>
    <Row>

        <Col md={6}>
        <img
            src="/Images/logo.png"
            alt="Vogue Vista Image"
            className="img-fluid"
            style={{ maxWidth: '600px', maxHeight: '300px' }}
        />
        </Col>
        <Col md={6}>
        <p>
            Vouge Vista, a distinguished e-commerce platform headquartered in Pakistan, stands as a premier destination for acquiring exquisite clothing and accessories designed for both men and women. With a commitment to delivering quality and a strong focus on customer satisfaction, we prioritize the meticulous craftsmanship of our products. Our extensive range reflects our dedication to utilizing the finest materials and impeccable stitching, ensuring that each item meets the highest standards of excellence. As we set our sights on the future, Vouge Vista envisions a global presence, driven by the same dedication to quality and customer-centric values that define our identity. At the core of our ethos lies an unwavering commitment to providing an unparalleled shopping experience that transcends borders.
        </p>
        </Col>
    </Row>
      <Row className="mt-4 text-center">
        <Col>
         <p>
          Our mission at Vouge Vista is to revolutionize the fashion landscape by providing a meticulously curated selection of clothing and accessories that embody sophistication, quality, and individual expression. Dedicated to delivering unparalleled excellence, we prioritize the use of premium materials and precise craftsmanship in every product. As we aspire to extend our influence globally, our unwavering commitment revolves around empowering individuals to embrace their unique style while ensuring the highest standards of customer satisfaction. Vouge Vista envisions not just being a fashion destination but a symbol of authenticity, innovation, and timeless elegance.
          </p>
        </Col>
      </Row>
      <Row className="mt-4 text-center">
        <Col>
        <h2 style={{ backgroundColor: 'darkblue', color: 'white', padding: '15px' }}>
            Our Team
        </h2>
        <div class="card-group">
        <div class="card">
            <img class="card-img-top" src="./Images/Pathan.jpeg" alt="Card image cap" style={{height:500}}/>
            <div class="card-body">
            <h5 class="card-title">Zaid Khan</h5>
            <p class="card-text">Zaid, our dynamic COO, leads Vogue Vista with a visionary approach, driving innovation and global growth. His commitment to excellence sets the stage for redefining fashion, ensuring unparalleled quality and individual expression.</p>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src="./Images/Sidhu.jpg" alt="Card image cap" style={{height:500}}/>
            <div class="card-body">
            <h5 class="card-title">Muhammad Usama</h5>
            <p class="card-text">As CEO, Usama oversees Vogue Vista's operations with precision, ensuring seamless logistics and a commitment to quality. His leadership enhances the brand's efficiency, delivering an exceptional experience to our customers.</p>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src="./Images/Usman.JPG"  style={{height:500}} alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">Muhammad Usman Azeem</h5>
            <p class="card-text">Usman, our dynamic CMO, elevates Vogue Vista's brand with captivating marketing strategies. He ensures a vibrant market presence and fosters compelling connections with our customers.</p>
            </div>
        </div>
        </div>
            </Col>
        </Row>
        <Row className="mb-5"></Row>
        </Container>
        </>
        );
};

export default About;