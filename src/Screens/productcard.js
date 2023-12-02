import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from './navbar';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
const ProductCard = (props) => {
  console.log(props)
  return (
    <div className="col-lg-4 col-md-12 mb-4">
      <div className="card">
        <div>&nbsp;</div>
        <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
          <img src={props[4]} style={{ width: 200, height: 400 }} className="w-100" />
          <a href="#!">
            <div className="mask">
              <div className="d-flex justify-content-start align-items-end h-100"></div>
            </div>
            <div className="hover-overlay">
              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </div>
          </a>
        </div>
        <div className="card-body">
          <a href="/" className="text-reset">
            <h5 className="card-title mb-3">{props[1]}</h5>
          </a>
          <a href="/" className="text-reset">
            <p>{props.description}</p>
          </a>
          <h6 className="mb-3">
              <s>{props[6]+props[6]*0.25}</s><strong className="ms-2 text-danger">{props[6]}</strong>
            </h6>
        </div>
      </div>
    </div>
  );
};

const BestsellersSection = () => {
  const [products, setProducts] = useState([]);
  const { gender } = useParams();
  const Gender = gender === "men" ? "Male" : "Female";
  console.log(Gender);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/');
        if (response.ok) {
          const data = await response.json();
          // Filter products based on the gender
          const filteredProducts = data.products.filter((pord) => pord[5] === Gender);
          setProducts(filteredProducts);
        } else {
          console.error('Failed to fetch products:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [Gender]);

  return (
    <>
      <Navbar />
      <section style={{ backgroundColor: '#eee' }}>
        <div className="text-center container py-5">
          <h4 className="mt-4 mb-5"><strong>{gender.toUpperCase() + "'S COLLECTION"}</strong></h4>

          <div className="row">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BestsellersSection;
