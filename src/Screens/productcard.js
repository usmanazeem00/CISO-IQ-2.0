import Navbar from './navbar';
import React, { useState } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { addToCart, removeFromCart } from '../productActions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
var a=1
const ProductCard = (props) => {
 
  const dummyProductList = useSelector(state => state.addedProducts);
  console.log(dummyProductList)
  const [buttonColor, setButtonColor] = useState('primary');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();

  
function hasDuplicateId(products, targetId) {
  const idSet = new Set();
  
  for (const product of products) {
    if (product.id === targetId && idSet.has(targetId)) {
      return true;
    } else {
      idSet.add(product.id);
    }
  }

  return false;
}

  const handleAddToCart = () => {
    if (addedToCart || quantity <= 0) {
      console.log(`Product ${props[1]} is already in the cart or quantity is not valid.`);
      return;
    }

    if(!hasDuplicateId(dummyProductList,props[0])){
      
    setAddedToCart(true);
    setButtonColor('danger'); 
    props.updateTotalQuantity(quantity);
    const addedProduct = {
      id: props[0],
      name:props[1],
      price: props[6],
      image: props[4],
      quantity: quantity,
    };
    dispatch(addToCart(addedProduct));
    console.log(`Added ${quantity} ${props[1]}(s) to the cart`);}
  };

  const handleIncreaseQuantity = () => {
    if (!addedToCart) {
      setQuantity(quantity + 1);
    } else {
      console.log(`Product ${props[1]} is already in the cart. Cannot increase quantity.`);
    }
  };

  const handleDecreaseQuantity = () => {
    if (!addedToCart && quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      console.log(`Product ${props[1]} is already in the cart or quantity is at the minimum.`);
    }
  };
  return (
    <div className="col-lg-4 col-md-12 mb-4">
      <div className="card">
        <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
        <img src={props[4]} style={{ width: 300, height: 400 }} className="w-100" />
        </div>
        <div className="card-body">
          <a href="/" className="text-reset">
            <h5 className="card-title mb-3">{props[1]}</h5>
          </a>
          <a href="/" className="text-reset">
            <p>{props[5].toLowerCase()==="male"?"Male":"Female"}</p>
          </a>
            <h6 className="mb-3">
            <s>{props[6]+props[6]*0.25}</s><strong className="ms-2 text-danger">{props[6]}</strong>
            </h6>
         
          <InputGroup className="mb-3 mx-auto d-flex justify-content-center">
            <Button variant="outline-secondary" onClick={handleDecreaseQuantity}>-</Button>
            <Button variant="outline-secondary" onClick={handleIncreaseQuantity}>+</Button>
          </InputGroup>
          <p>Quantity: {quantity}</p>

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
  const dummyProductList = useSelector(state => state.addedProducts);
 const q= dummyProductList.reduce((totalQuantity, product) => totalQuantity + product.quantity, 0);
  const [totalQuantity, setTotalQuantity] = useState(q);
  const handleUpdateTotalQuantity = (quantity) => {
    setTotalQuantity((prevTotal) => prevTotal + quantity);
  };
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState(products);

  const handleSearchChange = (event) => {
    const { value } = event.target;
const filtered = products.filter(product =>
      product[1].toLowerCase().includes(value.toLowerCase())|| product[0]==parseInt(value)|| product[3].toLowerCase().includes(value.toLowerCase())
    );
console.log(filtered)
    setFiltered(filtered);
    if(value.length===0)
    {
setFiltered(products)
    }
  
  };
  const { gender } = useParams();
  const Gender = gender === "men" ? "Male" : "Female";
  console.log(Gender);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/');
        if (response.ok) {
          const data = await response.json();
          var filteredProducts=[{}]
          // Filter products based on the gender
          if(gender){
           filteredProducts = data.products.filter((pord) => pord[5] === Gender);
          }
          else
          {
         filteredProducts = data.products 
          }
          setProducts(filteredProducts);
         setFiltered(filteredProducts)
          console.log(filteredProducts)
        } else {
          
          console.error('Failed to fetch products:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    a=2
    fetchProducts();
  }, [Gender]);
  

  return (
    <>
    { gender?
    <Navbar totalQuantity={totalQuantity}/>:undefined
}

      <section style={{ backgroundColor: '#eee' }}>
        <div className="text-center container py-5">
          <h4 className="mt-4 mb-5"><strong>{gender?gender.toUpperCase():undefined} COLLECTION</strong></h4>
          <div>
          <input type="text" style={{width:'90%',height:50,marginLeft:10}} placeholder='Search Products'  onChange={handleSearchChange}/>
          </div>
          <p>Total Quantity in Cart: {totalQuantity}</p>
          <div className="row">
            {filtered.map((products1, index) => (
              <ProductCard
                key={index}
                {...products1}
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