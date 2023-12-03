import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const AdminPanel = () => {
  const navigation=useNavigate()
  const [formData, setFormData] = useState({
    productid: '',
      title: '',
      gender: '',
      price: 0,
      description:'',
      image: '',
      quantity: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'productid' || name === 'price' || name === 'quantity' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

try {
       const response = await fetch('/api/products/add', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
       });

       if (!response.ok) {
         // Handle the error, e.g., show a message to the user
         console.error('Failed to add product:', response.statusText);
         return;
       }

       const data = await response.json();
//       // Handle the response data as needed
alert('Product Added Successfully')
       console.log('Product added successfully:', data.product);
     } catch (error) {
       // Handle any unexpected errors
       console.error('Error adding product:', error.message);
   }

    // Clear the form fields after submission
    setFormData({
      productid: 0,
      title: '',
      gender: '',
      price: 0,
      description:'',
      image: '',
      quantity: 0,
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-5">
          <img
            src={"/Images/logo.png"}
            alt="Vogue Vista Image"
            className="img-fluid"
            style={{ height:500,width:500 }}
          />
        </div>
        <div className="col-md-6">
          <h2 style={{ backgroundColor: 'black', color: 'white', padding: '15px' }}>
            Admin Panel
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Product ID:</label>
              <input
           type="number"
                name="productid"
                value={formData.productid}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Image URL:</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Product Name:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description:</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
  <label className="form-label">Gender:</label>
  <select
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    className="form-select"
  >
    <option value="" disabled hidden>Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
</div>

            <div className="mb-3">
              <label className="form-label">Price:</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Quantity:</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link to="/" className="btn btn-outline-danger ms-3" style={{position:'absolute', right:30}}>
              Logout
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
