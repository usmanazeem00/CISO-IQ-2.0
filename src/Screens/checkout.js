
import React from 'react';
import html2pdf from 'html2pdf.js';
import { loadStripe } from '@stripe/stripe-js';

import {
    MDBAccordion,
    MDBAccordionItem,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBTypography,
  } from 'mdb-react-ui-kit';
  import { useLocation } from 'react-router-dom';
  import { useUser} from './userContext';
  import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../productActions';
  const CheckoutPage = () => {
    const dispatch=useDispatch()
    const dummyProductList = useSelector(state => state.addedProducts);
    const { userEmail } = useUser();
    const navigate=useNavigate();
    console.log(userEmail)
    const location = useLocation();
    const price = location.state ? location.state.price : null;
    const cart = location.state ? location.state.cart : null;
    console.log(cart)
    var [item,setitem]=useState(cart)
    console.log("Bill is "+price)
    const [paymentMethod, setPaymentMethod] = useState('cash');

    const handlePaymentMethodChange = (method) => {
      setPaymentMethod(method);
    };
    
    const handlePlaceOrder = async () => {
      var  orderidnum = Math.floor(Math.random() * 90000) + 10;
      orderidnum=orderidnum.toString().padStart(5, '0')
      // Prepare the data for the checkout request
      const allProducts = cart.map(({ id, quantity }) => ({ id, quantity }));
      const checkoutData = {
        orderid:orderidnum,
        useremail: userEmail,
        products: allProducts,
        totalBill: price,
        paymentMethod: paymentMethod,
      };
     
    
      try {
        // Make a POST request to the server
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(checkoutData),
        });

        if(response)
        {
          console.log(response.data)
        }
        const text=checkoutData.totalBill+"\n"
        //const prod=item.map((i)=>{return "Product : "+ i.name+" "+"Quantity : "+i.quantity+"\n"})
    
       const x= item.map((l)=>
        {
         return `<li><strong>${(l.name)}  Quantity :${l.quantity}</strong></li>`
        }
        )
        for (var a in x)
        {
          console.log(a)
        }
        const pdfOptions = {
          margin: 10,
          filename: `order_confirmation+${orderidnum}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };
        const pdfContent = `
        <html>
          <body>
            <p>Dear User,</p>
            <p>Your order has been successfully placed.</p>
            <p>Order details:</p>
            <ul>
              <li>Price: PKR <strong>${price}</strong></li>
              ${x}
            </ul>
            <p>It will reach you soon. Thank you for shopping with us!</p>
          </body>
        </html>
      `;
        html2pdf().from(pdfContent).set(pdfOptions).save();
      
    
        console.log(userEmail)
        //console.log(prod)
        const emailData = {
          to: [userEmail,"l202064@lhr.nu.edu.pk"],
          subject: `Order Placed ${orderidnum}`,
          html: `
          <html>
            <body>
              <p>Dear User,</p>
              <p>Your order has been successfully placed.</p>
              <p>Order details:</p>
              <ul>
                <li>Price: PKR <strong>${price}</strong></li>
                ${x}
                <!-- Add more details as needed -->
              </ul>
              <p>It will reach you soon. Thank you for shopping with us!</p>
            </body>
          </html>
        `,
      };
        if (response.ok) {
          const cart2 = location.state ? location.state.cart : null;
          console.log("OK")
          console.log(cart2)
          cart2.forEach(productId => {
            dispatch(removeFromCart(productId.id));
          });
          // Successful response, you may want to handle the success case here
          const responseData = await response.json();
          console.log('Checkout success:', responseData);

          fetch('/send-email', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData),
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.text();
})
.then(data => {
    console.log(data);
    console.log("EMAIL SENT")
    navigate('/ordersuccess');
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
      //    sendOrderConfirmationEmail("l202064@lhr.nu.edu.pk");
          // Optionally, navigate to a success page
         // navigate('/order-success');
        } else {
          // Handle the error case
          const errorData = await response.json();
          console.error('Checkout error:', errorData);
          // Optionally, show an error message to the user
        }
      } catch (error) {
        console.error('Error during checkout:', error);
        // Optionally, show a generic error message to the user
      }
    };


    //Stripe
    const handleStripe = async (e) => {
      e.preventDefault();

  const stripe = await loadStripe('your_publishable_key');
  const elements = stripe.elements();
const card={}
  try {
    const result = await stripe.createToken(elements.getElement(card));

    if (result.error) {
      //setError(result.error.message);
    } else {
      // Send the token to your server for further processing
      const response = await fetch('http://localhost:3001/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: result.token.id }), // Send the token ID
      });

      if (response.ok) {
        console.log('Payment successful!');
       
      } else {
        const errorData = await response.json();
        console.error('Payment failed:', errorData.message);
      
      }
    }
  } catch (error) {
    console.error('Error:', error);
    //setError('An error occurred. Please try again.');
  }
    };


  return (
    <div>
    
    <MDBContainer className="my-5 py-5" style={{maxWidth: '1000px', marginLeft: '450px'}}>
        
        <MDBRow>
          
          <MDBCol md="8">
            {/* Cart Summary Section */}
        {cart && cart.length > 0 && (
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0 text-font text-uppercase">
                Cart Summary
              </MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              {cart.map((item) => (
                <MDBRow key={item.id} className="mb-3">
                  <MDBCol md="2">
                    <MDBCardImage
                      src={item.image}
                      className="img-fluid"
                      alt={item.name}
                      style={{ maxWidth: '50px', maxHeight: '50px' }}
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <span className="text-font">{item.name}</span>
                  </MDBCol>
                  <MDBCol md="2">
                    <span className="text-font">Qty: {item.quantity}</span>
                  </MDBCol>
                  <MDBCol md="2">
                    <span className="text-font">{item.price * item.quantity}</span>
                  </MDBCol>
                </MDBRow>
              ))}
              <MDBRow className="mb-4">
                <MDBCol md="8"></MDBCol>
                <MDBCol md="2">
                  <MDBTypography tag="h6" className="mb-0 text-font">
                    Total
                  </MDBTypography>
                </MDBCol>
                <MDBCol md="2">
                  <MDBTypography tag="h6" className="mb-0 text-font">
                    {price}
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        )}
            <MDBCard className="mb-4">
              <MDBCardBody>
                <p className="text-uppercase h4 text-font">Delivery City:</p>
                <MDBRow>
                  <MDBCol md="1">
                  <MDBCardImage
                    src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                    className="rounded-circle me-2"
                    style={{ width: '35px' }}
                    alt="Pakistan"
                    />
                  </MDBCol>
                  <MDBCol md="8">
                    <select className="custom-select">
                      <option value="1">Lahore</option>
                      <option value="2">Karachi</option>
                      <option value="3">Islamabad</option>
                      <option value="4">Sialkoat</option>
                      <option value="5">Faislabad</option>
                      <option value="6">Hyderabad</option>
                      <option value="7">Multan</option>
                    </select>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBAccordion className="card mb-4">
              <MDBAccordionItem collapseId={1} className="border-0" headerTitle='Promo/Student Code or Vouchers'>
                <MDBInput label='Enter code' type='text' />
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBCol>
          <MDBCol md="8" className="mb-4">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0 text-font text-uppercase">Delivery address</MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <form>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='First name' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Last name' type='text' />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='Company name' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Email' type='text' />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='Address' type='text' />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='Email' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Phone' type='text' />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='Additional information' type='text'/>
                    </MDBCol>
                  </MDBRow>
                </form>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4">
          <MDBCardHeader className="py-3">
            <MDBTypography tag="h5" className="mb-0 text-font text-uppercase">
              Payment Method
            </MDBTypography>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBRow className="mb-3">
              <MDBCol>
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={() => handlePaymentMethodChange('cash')}
                  />
                  Pay by Cash
                </label>
              </MDBCol>
              <MDBCol>
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => handlePaymentMethodChange('card')}
                  />
                  Pay by Card
                </label>
              </MDBCol>
            </MDBRow>

            {/* Card Details Input - Conditionally rendered based on the selected method */}
            {paymentMethod === 'card' && (
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput label='Card Number' type='text' />
                </MDBCol>
                <MDBCol>
                  <MDBInput label='Expiration Date' type='text' />
                </MDBCol>
                <MDBCol>
                  <MDBInput label='CVV' type='text' />
                </MDBCol>
              </MDBRow>
            )}
          </MDBCardBody>
        </MDBCard>
            <div className="text-center">
              <MDBBtn className="button-order col-md-10" onClick={handlePlaceOrder}>Place order</MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
    </MDBContainer>
    </div>
  );
};
export default CheckoutPage;