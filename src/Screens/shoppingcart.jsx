import React, { useState } from "react";
import Navbar from "./navbar";
import { Button, Table } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../productActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { BsCartPlus } from 'react-icons/bs';
import { BiListOl } from "react-icons/bi";

const ShoppingCart = () => {
  const navigate = useNavigate();
    const dummyProductList = useSelector(state => state.addedProducts);
  
  const uniqueProducts = Array.from(new Set(dummyProductList.map((product) => product.id)))
  .map((id) => dummyProductList.find((product) => product.id === id));

  const q= dummyProductList.reduce((totalprice, product) => totalprice + product.price*product.quantity, 0);
  const [bill,setBill]=useState(q)
  console.log("TOTAL BILL: "+bill)
const [cartItems, setCartItems] = useState(uniqueProducts);
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    const updatedCart = [...cartItems, { ...item, quantity: 1 }];
    setCartItems(updatedCart);
  };

  const checkoutHandler = () => {
    // Add your logic for the checkout functionality
    console.log("Checkout clicked!");
    navigate('/checkout', { state: { price: bill,cart:cartItems} });
  };
  const removeItemFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const updatedCart = [...prevCartItems];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  };
  
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  
    console.log(`Removed ${id} from the cart.`);
    
    setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== id));
  };
  
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2 className="text-center">Shopping Cart</h2>
        {cartItems.length === 0 ? (
            <>
            <h6 className="text-center text-muted">Your Cart is Empty</h6>
            <div className="text-center">
              <BsCartPlus size={100} color="#ddd" />
            </div>
          </>        ) : (
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
                  <td>Rs.{item.price}</td>
                  <td>Qty: {item.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {cartItems.length > 0 && (
          <div className="text-center">
            <Button variant="primary" onClick={checkoutHandler}>
              Checkout
            </Button>
          </div>
        )}

        
      </div>
    </>
  );
};

export default ShoppingCart;
