const express = require('express');
const mongoose = require('mongoose');
const Users = require('./user.model');
const Product=require('./product.model')
const CheckOut=require('./checkout.model')
const bodyParser = require('body-parser')
const app = express();
const nodemailer = require('nodemailer');
app.use(bodyParser.json())
 
app.post('/send-email', async (req, res) => {
  try {
    
    const { to, subject, html } = req.body;

    let mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'azeemmuhammadusman@gmail.com',
        pass: 'sxuxxjwhzcwcngpn'
      }
    });

    let mailDetails = {
      from: 'azeemmuhammadusman@gmail.com',
      to,
      subject,
      html
    };

    const info = await mailTransporter.sendMail(mailDetails);
    console.log('Email sent successfully:', info);

    res.status(200).json({ message: 'Email sent successfully', info });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/api", async (req, res) => {
  try {
    // Read all users from the database
    const allUsers = await Users.find({});
    console.log('All Users:', allUsers);

    // Send the users in the response
    res.json({ users: allUsers.map(user =>( [user.name,user.password])) });
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Read the user from the database based on email
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the hashed password with the provided password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    console.log('User:', user);

    // Send the user data in the response
    return res.status(200).json({ user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error('Error reading user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post("/api/findcustomer/:email", async (req, res) => {
  try {
    const  email = req.params.email;
console.log(email)
    // Read the user from the database based on email and password
    const nuser = await Users.findOne({email: email });

    if (!nuser) {
      return res.status(404).json({ error: 'User not found' });
    }

    console.log('User:', nuser);

    // Send the user data in the response
   return res.status(200).json(nuser);
  } catch (error) {
    console.error('Error reading user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//get for a user

app.get('/api/orders/count/:useremail', async (req, res) => {
  try {
    const { useremail } = req.params;
const a=Users.findOne({email:useremail});
console.log(a)
if (a){
    const userOrdersCount = await CheckOut.aggregate([
      {
        $match: {
          useremail: useremail,
        },
      },
      {
        $group: {
          _id: null,
          totalOrders: { $sum: 1 },
          totalPurchase: { $sum: '$totalBill' },
        },
      },
    ]);

    const count = userOrdersCount[0]?.totalOrders || 0;
    const bill = userOrdersCount[0]?.totalPurchase || 0;
    res.json({ useremail, ordersCount: count,totalBill:bill });}
    else { res.status(500).json({ error: 'Internal Server Error' });}
  } catch (error) {
    console.error('Error retrieving orders count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



const bcrypt = require('bcrypt');
app.post("/api/login/add", async (req, res) => {
  try {
    const { name,email, password } = req.body;

    // Read the user from the database based on email and password
    const user = await Users.findOne({ email: email});

    if (user) {
      console.log("already Exists")
      return res.status(404).json({ error: 'User Already Exists' });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("SAVED")
    const newuser = new Users({ name:name, email, password: hashedPassword });
    const saveduser=await newuser.save()
   return res.status(200).json({ user: newuser });
  } catch (error) {
    console.error('Error reading user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    // Read all users from the database
    const allproducts = await Product.find({});
    console.log('All Products:', allproducts)

    // Send the users in the response
    res.json({products:allproducts.map(product=>([product.productid,product.title,product.quantity,product.description,product.image,product.gender,product.price]))});
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// POST endpoint to add a product
app.post('/api/products/add', async (req, res) => {
  try {
    // Extract product data from the request body
   const { productid, title, gender, price,description,image, quantity } = req.body;
   const existingProduct = await Product.findOne({ productid:productid });

   if (existingProduct) {
     return res.status(404).json({ error: 'Product with Same ID Already Exists' });
   }
    // Create a new Product instance
   const newProduct = new Product({
       productid,
       title,
       gender,
       price,
       description,
       image,
       quantity,
   })
    const savedProduct = await newProduct.save();

    // Send the saved product in the response
    res.status(201).json({ product: savedProduct });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE endpoint to remove a product by ID
app.delete('/api/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    console.log(productId)
    // Check if the product with the given ID exists
    const existingProduct = await Product.findOne({ productid:productId });

    if (!existingProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Remove the product from the database
    await Product.findOneAndDelete({ productid:productId });

    res.status(204).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//Now when a Product is purchased we should Update Its quanity
//Update
app.put('/api/products/update/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { productid: req.params.id },
      { $set: { quantity: req.body.quantity } },
      { new: true }
    ).exec();

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    console.log(updatedProduct);
    res.send("Updated!")
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).send('Error occurred');
  }
});

//Now when a Product is purchased we should Update Its quanity
//Update
app.put('/api/products/purchase/:id', async (req, res) => {
  try {
    const a=await Product.findOne({productid:req.params.id})
    if (a){
    const b=a.quantity
    console.log(b)
    if (b>0){
    const updatedProduct = await Product.findOneAndUpdate(
      { productid: req.params.id },
      { $set: { quantity: b-1 } },
      { new: true }
    ).exec();


    res.send("Purchase Successful")
  }
  else{
    res.send("Insufficient Quantity")
  }
    }
    else 
    {
      res.send("Not Found")
    }
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).send('Error occurred');
  }
});


//Get a specific Gender Products
app.get('/api/products/:gender', async (req, res) => {
  try {
    const gender = req.params.gender || 'Uni'; 
    const allproducts = await Product.find({ gender: gender });
    
     // Send the users in the response
     res.json({products:allproducts.map(product=>([product.productid,product.title,product.quantity,product.description,product.image,product.gender,product.price]))});
    } catch (error) {
      console.error('Error reading data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Stripe Code
app.post('/charge', async (req, res) => {
  const { token,amounts } = req.body;

  try {
    // Create a charge using the token
    const charge = await stripe.charges.create({
      amount: amounts, // Amount in cents
      currency: 'usd',
      description: 'Example Charge',
      source: token.id,
    });

    // Handle successful payment
    console.log('Charge:', charge);
    res.status(200).json({ success: true, message: 'Payment succeeded' });
  } catch (error) {
    // Handle payment failure
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Payment failed' });
  }
});
//Get Quantity
app.get('/api/products/:productId/totalQuantitySold', async (req, res) => {
  try {
    const productId = req.params.productId;

    const totalQuantitySold = await CheckOut.aggregate([
      { $unwind: '$products' },
      { $match: { 'products.id': productId } },
      { $group: { _id: null, totalQuantity: { $sum: '$products.quantity' } } }
    ]);

    if (totalQuantitySold.length > 0) {
      res.json({ totalQuantitySold: totalQuantitySold[0].totalQuantity });
    } else {
      res.json({ totalQuantitySold: 0 });
    }
  } catch (error) {
    console.error('Error retrieving total quantity sold:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// add a checkout
app.post('/api/checkout', async (req, res) => {
  try {
    const {orderid, useremail, products, totalBill, paymentMethod } = req.body;
    console.log('Received Request Payload:', req.body);
    const newCheckout = new CheckOut({
      orderid,
      useremail,
      products,
      totalBill,
      paymentMethod,
    });
console.log("PRODUCTS",products)
    const savedCheckout = await newCheckout.save();
console.log('Saved Checkout:', savedCheckout);
res.json(newCheckout)
    
  } catch (error) {
    console.error('Error reading product data:', error);
    res.status(500).json({ error: 'Internal Servers Error' });
  }
}); 


mongoose.connect('mongodb://localhost:27017/Users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check for successful connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});


