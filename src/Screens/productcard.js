import Navbar from './navbar';
import React, { useState } from 'react';
import { Button, InputGroup } from 'react-bootstrap';

const ProductCard = ({ imageUrl, badges, productName, category, originalPrice, discountedPrice, updateTotalQuantity }) => {
  const [buttonColor, setButtonColor] = useState('primary');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (addedToCart || quantity <= 0) {
      console.log(`Product ${productName} is already in the cart or quantity is not valid.`);
      return;
    }

    setAddedToCart(true);
    setButtonColor('danger'); // Change button color to red when pressed
    updateTotalQuantity(quantity);
    console.log(`Added ${quantity} ${productName}(s) to the cart`);
  };

  const handleIncreaseQuantity = () => {
    if (!addedToCart) {
      setQuantity(quantity + 1);
    } else {
      console.log(`Product ${productName} is already in the cart. Cannot increase quantity.`);
    }
  };

  const handleDecreaseQuantity = () => {
    if (!addedToCart && quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      console.log(`Product ${productName} is already in the cart or quantity is at the minimum.`);
    }
  };
  return (
    <div className="col-lg-4 col-md-12 mb-4">
      <div className="card">
        <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
          <img src={imageUrl} className="w-100" alt="Product" />
          <a href="#!">
            <div className="mask">
              <div className="d-flex justify-content-start align-items-end h-100">
                {badges && badges.map((badge, index) => (
                  <h5 key={index}><span className={`badge ${badge.color} ms-2`}>{badge.text}</span></h5>
                ))}
              </div>
            </div>
            <div className="hover-overlay">
              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </div>
          </a>
        </div>
        <div className="card-body">
          <a href="/" className="text-reset">
            <h5 className="card-title mb-3">{productName}</h5>
          </a>
          <a href="/" className="text-reset">
            <p>{category}</p>
          </a>
          {discountedPrice ? (
            <h6 className="mb-3">
              <s>{originalPrice}</s><strong className="ms-2 text-danger">{discountedPrice}</strong>
            </h6>
          ) : (
            <h6 className="mb-3">{originalPrice}</h6>
          )}

          <InputGroup className="mb-3 mx-auto d-flex justify-content-center">
            <Button variant="outline-secondary" onClick={handleDecreaseQuantity}>-</Button>
            <Button variant="outline-secondary" onClick={handleIncreaseQuantity}>+</Button>
          </InputGroup>
          <p>Quantity: {quantity}</p>

          {/* Add the "Add to Cart" button in the center */}
          <Button
            variant={buttonColor}
            onClick={handleAddToCart}
            className="mt-3 mx-auto d-block"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

const BestsellersSection = () => {

  const [totalQuantity, setTotalQuantity] = useState(0);
  const handleUpdateTotalQuantity = (quantity) => {
    setTotalQuantity((prevTotal) => prevTotal + quantity);
  };

  const products = [
    {
      imageUrl: './Images/Cover 1.png',
      badges: [{ text: 'New', color: 'bg-primary' }],
      productName: 'Product 1',
      category: 'Category 1',
      originalPrice: '$61.99',
      discountedPrice: null,
    },
    {
      imageUrl: './Images/Cover 2.png',
      badges: [{ text: 'New', color: 'bg-danger' }],
      productName: 'Product 2',
      category: 'Category 2',
      originalPrice: '$71.99',
      discountedPrice: '$59.99',
    },
    {
      imageUrl: './Images/Cover 3.png',
      badges: [{ text: 'Sale', color: 'bg-danger' }],
      productName: 'Product 3',
      category: 'Category 3',
      originalPrice: '$49.99',
      discountedPrice: '$39.99',
    },
    // Add more product objects as needed
  ];

  return (
    <>
    <Navbar totalQuantity={totalQuantity}/>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="text-center container py-5">
          <h4 className="mt-4 mb-5"><strong>Bestsellers</strong></h4>
          <p>Total Quantity in Cart: {totalQuantity}</p>
          <div className="row">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                updateTotalQuantity={handleUpdateTotalQuantity}
              />
            ))}
          </div>
        </div>
      </section>
     
    </>
  );
};

export default BestsellersSection;