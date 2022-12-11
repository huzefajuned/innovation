import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import GoogleButton from "react-google-button";
import { useUserAuth } from "../../context/UserAuthContext";
import { toast } from "react-toastify";
import styles from "./Login.module.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/Home");
      toast.success("Login Succesfully ");
    } catch (err) {
      toast.error(err.message);
    }
  };

  // const handleGoogleSignIn = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await googleSignIn();
  //     navigate("/home");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <>
      <div className={styles.container}>
        <h2> Login ✍️</h2>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.input_container}>
              <label>Username </label>
              <input
                type="email"
                name="email "
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.input_container}>
              <label>Password </label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.button_container}>
              <input type="submit" />
            </div>
          </form>
          <div className="p-4 box mt-3 text-center">
            Don't have an account? <Link to="/Signup">Sign up</Link>
          </div>
        </div>

        {/* <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div> */}
      </div>
    </>
  );
};

export default Login;
