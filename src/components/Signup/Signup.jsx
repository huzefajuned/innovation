import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";
import styles from "./Signup.module.css";
import { toast } from "react-toastify";

const Signup = () => {
  const [email, setEmail] = useState("");
  // const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError("");
    try {
      await signUp(email, password);
      navigate("/Home");
      toast.success("SignUp & Logged In  ✅");
    } catch (err) {
      // setError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h2> SignUp 👍</h2>
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
            Already have an account? <Link to="/Login">Log In</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
