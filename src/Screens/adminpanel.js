import React, { useState } from 'react';

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    imageUrl: '',
    badges: [{ text: '', color: '' }],
    productName: '',
    category: '',
    originalPrice: '',
    discountedPrice: '',
  });

  const badgeColors = ['bg-danger', 'bg-primary']; 
  const badgeTexts = ['New', 'Sale']; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBadgeChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      badges: [{ ...prevData.badges[0], [field]: value }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({
      imageUrl: '',
      badges: [{ text: '', color: '' }],
      productName: '',
      category: '',
      originalPrice: '',
      discountedPrice: '',
    });
  };

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-6 mb-5">
        <img
          src={"/Images/transparent logo.png"}
          alt="Vogue Vista Image"
          className="img-fluid"
          style={{ maxWidth: '700px', maxHeight: '600px' }}
        />
      </div>
      <div className="col-md-6">
        <h2 style={{ backgroundColor: 'black', color: 'white', padding: '15px' }}>
          Admin Panel
        </h2>
  
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Image URL:</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="form-control"
            />
          </div>
  
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Badge Text:</label>
              <select
                name="badgeText"
                value={formData.badges[0].text}
                onChange={(e) => handleBadgeChange('text', e.target.value)}
                className="form-select"
              >
                <option value="" disabled hidden>Select Badge Text</option>
                {badgeTexts.map((text, index) => (
                  <option key={index} value={text}>
                    {text}
                  </option>
                ))}
              </select>
            </div>
  
            <div className="col-md-6 mb-3">
              <label className="form-label">Badge Color:</label>
              <select
                name="badgeColor"
                value={formData.badges[0].color}
                onChange={(e) => handleBadgeChange('color', e.target.value)}
                className="form-select"
              >
                <option value="" disabled hidden>Select Badge Color</option>
                {badgeColors.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          </div>
  
          <div className="mb-3">
            <label className="form-label">Product Name:</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="form-control"
            />
          </div>
  
          <div className="mb-3">
            <label className="form-label">Category:</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-control"
            />
          </div>
  
          <div className="mb-3">
            <label className="form-label">Original Price:</label>
            <input
              type="text"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleChange}
              className="form-control"
            />
          </div>
  
          <div className="mb-3">
            <label className="form-label">Discounted Price:</label>
            <input
              type="text"
              name="discountedPrice"
              value={formData.discountedPrice}
              onChange={handleChange}
              className="form-control"
            />
          </div>
  
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default AdminPanel;
