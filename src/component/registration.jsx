import axios from "../axios";
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {

  const nameref = useRef();
  const emailref = useRef();
  const dobref = useRef();
  const passwordref = useRef();
  const repasswordref = useRef();

  const navigate = useNavigate()

  useEffect(() => {
    if ((localStorage.getItem("role") == "admin")) {
      return navigate('/admin')
    }
  }, [])

  function register(e) {
    e.preventDefault();

    const name = nameref.current.value;
    const email = emailref.current.value;
    const dateofbirth = dobref.current.value;
    const password = passwordref.current.value;
    const repassword = repasswordref.current.value;

    if (password !== repassword) {
      alert("Password doesnot match");
      return;
    } else {
      axios({
        method: 'post',
        url: '/user/create',
        data: {
          name, email, dateofbirth, password
        }
      }).then((response) => {
        if (response.data) {
          alert("success")
          navigate("/")
        } else {
          alert("user already exist");
        }
      }).catch((error) => {
        console.log(error);
      })
    }
  }
  return (
    <div className="reg-div-container">
      <form onSubmit={register}>
        <h1>REGISTER</h1>
        <br />
        <input className="register-input-fields" type="text" placeholder="enter name" required ref={nameref} /><br /><br />
        <input className="register-input-fields" type="email" placeholder="enter email" required ref={emailref} /> <br /><br />
        <input className="register-input-fields" type="date" placeholder="enter d.o.b" required ref={dobref} /> <br /><br />
        <input className="register-input-fields" type="password" placeholder="enter password" required ref={passwordref} /> <br /><br />
        <input className="register-input-fields" type="password" placeholder="confirm-password" required ref={repasswordref} /><br /><br />
        <button className="login-register-create-edit-button" >Register</button><br /><br />
        Back to login. <Link to={"/"}>login</Link>
      </form>
    </div>
  );
};

export default Registration;
