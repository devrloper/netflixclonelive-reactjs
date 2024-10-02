
import React, { useState } from 'react';
import Footer from "../components/Footer";

const SignUpForm = () => {
  const[count,setCount]=useState("Sign Up");
  const [count1, setCount1] = useState("Name");
  const [count2, setCount2] = useState("Email address");
  const [count3, setCount3] = useState("Password");
  const [count4, setCount4] = useState("Remember me");
  const[count5,setCount5]=useState("Create Account");
  const[count6,setCount6]=useState("OR");
  const[count7,setCount7]=useState(" Use a Sign In Code");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); 

    // Store values in local storage
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email); // Store the email
    localStorage.setItem('userPassword', password);

    alert('Account created successfully!');
    window.location.href = './login';
  };

  return (
    <div>
      <div className="container-fluid container1">
        <div className="overlay"></div>
        <div className="row content">
          <div className="col-xl-1"></div>
          <div className="col-xl-2" id="logo"></div>
          <div className="col-xl-2"></div>
          <div className="col-xl-2"></div>
          <div className="col-xl-2"></div>
          <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="form-container">
              <h2 className="my-5">{count}</h2>
              <form id="signUpForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">{count1}</label>
                  <input
                    type="text"
                    className="form-control p-4"
                    id="Name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">{count2}</label>
                  <input
                    type="email"
                    className="form-control p-4"
                    id="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">{count3}</label>
                  <input
                    type="password"
                    className="form-control p-4"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">{count4}</label>
                </div>
                <button type="submit" className="btn btn-outline-secondary w-100 mt-2">{count5}</button>
                <p style={{ textAlign: 'center', marginBottom: 0, marginTop: '10px' }}>{count6}</p>
                <button type="button" className="btn btn-outline-secondary w-100 mt-2" onClick={() => window.location.href = './login'}>
                 {count7}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpForm;
