import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useUser } from './userContext';
const Login = () => {
  const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const { setUser } = useUser();
  const [back,setback]=useState([{}])
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const navigate = useNavigate();

  const handleSubmit =async(event)=>{
    event.preventDefault();
if(username==="admin"&&password==="123")
{
  navigate('/admin')
}

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password }),
      });

      if (response.ok) {
        const a = await response.json();
        setUser(username);
        navigate('/home');
      } else {
        const errorData = await response.json();
        alert("Wrong Credentials")
        // Handle login failure, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
    }
   
  };

  useEffect(()=>{
fetch("/api").then(
  response=>response.json()
).then(
  data=>setback(data)
)
  },[])
  return (
    <div style={{ backgroundColor: 'black', height: '100vh' }}>
     <div style={{ color: 'white' }}>
</div>

      <div className="row justify-content-center">
        <img src="/Images/loginlogo.png" style={{ height: 250, width: 250 }} alt="Logo" />
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="card"
              style={{
                borderRadius: 40,
                marginTop: -50,
                boxShadow: '0 0 20px 5px rgba(255,255, 255, 0.4), 0 0 50px 15px rgba(255, 255, 255, 0.2)',
                animation: 'glow-animation 1.5s infinite alternate',
              }}
            >
              <div className="card-body">
                <h2 className="card-title text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username" style={{ fontWeight: '600' }}>
                      User Email:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your username"
                      autoComplete="off"
                      required
                      onChange={handleUsernameChange}
                      style={{ borderRadius: 40 }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" style={{ fontWeight: '600' }}>
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      minLength={3}
                      required
                      onChange={handlePasswordChange}
                      placeholder="Enter your password"
                      style={{ borderRadius: 40 }}
                    />
                  </div>
                  <div className="row justify-content-center">
                    <p style={{ fontWeight: '600' }}>Don't have an account?</p>&nbsp;
                    <Link to="/signup" style={{ color: 'blue' }}>
                      SignUp
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    style={{ backgroundColor: 'black', borderRadius: 40 }}
                    onClick={()=>{console.log("CLICKED")}}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;