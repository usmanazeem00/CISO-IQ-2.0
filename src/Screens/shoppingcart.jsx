import React, { useState } from "react";
import Navbar from "./navbar";
import { Button, Table } from "react-bootstrap"; // Import Bootstrap components

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const dummyProductList = [
    {
      id: 1,
      name: "Product 1",
      price: 20,
      image: "https://via.placeholder.com/50",
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 30,
      image: "https://via.placeholder.com/50",
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      price: 40,
      image: "https://via.placeholder.com/50",
      quantity: 1,
    },
  ];

  const addItemToCart = (item) => {
    const updatedCart = [...cartItems, { ...item, quantity: 1 }];
    setCartItems(updatedCart);
  };

  const removeItemFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2 className="text-center">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <h6 className="text-center text-muted">Your Cart is Empty</h6>
        ) : (
          <Table
            bordered
            hover
            responsive
            className="text-center"
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
          >
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>Qty: {item.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeItemFromCart(index)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        <h2 className="mt-4">Product List</h2>
        <ul className="list-unstyled">
          {dummyProductList.map((product) => (
            <li key={product.id} className="mb-3">
              <div className="d-flex align-items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="ml-3">
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <Button
                    variant="primary"
                    onClick={() => addItemToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShoppingCart;
