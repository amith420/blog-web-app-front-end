import axios from "../axios";
import { useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {

  const emailref = useRef();
  const passwordref = useRef();

  const navigate = useNavigate()

  function login(e) {
    e.preventDefault();

    const email = emailref.current.value;
    const password = passwordref.current.value;

    axios({
      method: 'post',
      url: '/user/login',
      data: {
        email, password
      }
    }).then((response) => {
      if (response.data) {
        localStorage.setItem("isLoggedIn", true)
        localStorage.setItem("userId", response.data.id)
        localStorage.setItem("role", response.data.role)
        localStorage.setItem("userName", response.data.name)
        if (response.data.role === "admin") {
          localStorage.setItem("isAdmin", true)
          navigate("/admin")
        } else {
          localStorage.setItem("isAdmin", false)
          navigate("/homepage")
        }
      } else {
        alert("Incorrect user name or password");
      }
    }).catch((error) => {
      console.log(error);
    })

  }

  return (
    <div className="login-div-container">
      <form className='login-form-div' onSubmit={login}>
        <h1 className='login-header'>LOGIN</h1>
        <br />
        <input className="login-input-fields" type="email" id="usermail" placeholder="enter email" required ref={emailref} /> <br /><br />
        <input className="login-input-fields" type="password" id="userpassword" placeholder="enter password" required ref={passwordref} /> <br />
        <button className="login-register-create-edit-button">LOGIN</button>
        <br /><br />
        Don't have an account? <Link to={"/registration"}>register</Link>
      </form>
    </div>
  );
};

export default LoginPage;
