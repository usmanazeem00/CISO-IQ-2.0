import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fpassword, setFPassword] = useState('');
  const [userEmail, setEmail] = useState('');
    const [back,setback]=useState([{}])
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlefpasswordChange = (e) => setFPassword(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubmit=async(event)=>
  {
    event.preventDefault();
    if(fpassword!=password||username.length===0||userEmail.length<5)
    {
      alert("Signup Issue Kindly Re-Enter Credentials")
    }
    else 
    {
        try {
          const response = await fetch("/api/login/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name:username, email: userEmail, password:password }),
          });
    
          if (response.ok) {
            alert("Signup Done")
            const a = await response.json();
            console.log("abc")
            navigate('/');
          } else {
            const errorData = await response.json();
            alert("Issue in Signup")
            // Handle login failure, e.g., show an error message to the user
          }
        } catch (error) {
          console.error('Error:', error);
        }}
    };

  return (
    <div style={{ backgroundColor: 'white', height: '100vh' }}>
      <section className="vh-100" style={{backgroundColor: 'silver'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{
                borderRadius: 25,
                boxShadow: '0 0 20px 5px rgba(0,0, 255, 0.4), 0 0 50px 15px rgba(0, 0, 255, 0.2)',
                animation: 'glow-animation 1.5s infinite alternate',
              }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{color:'blueviolet'}}>Sign up</p>


                <form className="mx-1 mx-md-4" onSubmit={handleSubmit} >
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" onChange={handleUsernameChange}/>
                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" onChange={handleEmailChange} />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" onChange={handlePasswordChange} minLength={3}/>
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" onChange={handlefpasswordChange} minLength={3}/>
                      <label className="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div style={{marginLeft:20,paddingBottom:20}}>
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg" style={{backgroundColor:'blueviolet'}}>Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Signup;
