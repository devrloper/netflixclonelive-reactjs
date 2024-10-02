import React, { useState } from "react";
import Footer from "../components/Footer";
import "../css/Login.css";

const SignIn = () => {
  const[count,setCount]=useState("Sign In");
  const [count1, setCount1] = useState("Email");
  const [count2, setCount2] = useState("Password");
  const [count3, setCount3] = useState("Sign In");
  const [count4, setCount4] = useState("Forgot Password?");
 

  const [userName, setUserName] = useState(""); // Renamed to userName
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve stored values from local storage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (userName === storedEmail && password === storedPassword) { // Updated to use userName
      alert("Sign In successful!");
      window.location.href = "./accounts"; // Redirect upon success
    } else {
      setErrorMessage("Invalid email or password");
    }
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
              <h2 className="my-5" style={{ overflow: "hidden" }}>{count}</h2>
              <form id="signInForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">{count1}</label>
                  <input
                    type="text"
                    className="form-control p-4"
                    id="email"
                    placeholder="Email"
                    value={userName} // Updated to use userName
                    onChange={(e) => setUserName(e.target.value)} // Updated to use setUserName
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">{count2}</label>
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
             <a href="./accounts"><button type="submit" className="btn btn-outline-secondary w-100 mt-2">{count3}</button></a>   
                {errorMessage && <div className="mt-3 text-danger">{errorMessage}</div>}
                <div className="mt-3 text-center">
                  <a href="./signup" className="link-primary">{count4}</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
