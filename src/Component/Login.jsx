import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  const [isLoggedin, setIsLoggedin] = useState(false);

 

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("user_Password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("user_Email").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  const logout = () => {
    localStorage.removeItem('user_Email');
    setIsLoggedin(false);
    nav("/login");
  };

  const logout1 = () => {
    localStorage.removeItem('user_Password');
    setIsLoggedin(false);
    nav("/login");
  };

  return (
    <div>
        <div className="log container">
            <div className="row">
                <div className="col-md-6 offset-3">


      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        
        <>
        <p><button onClickCapture={()=>{ logout(); logout1();}}>logout user</button></p>

        <Home />
      </>
        
      )}

      
    </div>
    </div>
            </div>
        </div>
  );
}

export default Login;