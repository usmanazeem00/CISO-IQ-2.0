// OrderSuccess.jsx

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const OrderSuccess = () => {
    const navigate=useNavigate()

    useEffect(() => {
        // Redirect to "/home" after 5 seconds
        const redirectTimer = setTimeout(() => {
          navigate('/home');
        }, 5000);

        // Clear the timer on component unmount
        return () => clearTimeout(redirectTimer);
    }, []);

    return (
        <div>
            <h1>Your order was successful!</h1>
            <p>Redirecting to home page...</p>
        </div>
    );
};

export default OrderSuccess;
