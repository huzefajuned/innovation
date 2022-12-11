import React, { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Nav/Nav.module.css";

const Nav = () => {
  const { user, logOut } = useUserAuth();

  const isUserLoggedIn = user?.email;

  const navigate = useNavigate();

  return (
    <>
      {isUserLoggedIn == "" ||
      isUserLoggedIn == undefined ||
      isUserLoggedIn == null ? (
        <nav>
          <div className={styles.logo}>
            <span onClick={() => navigate("/")}>Innov. Tech</span>
          </div>
          <div className={styles.buttons}>
            <button onClick={() => navigate("/Login")}>lOGIN</button>
          </div>
        </nav>
      ) : (
        <nav>
          {/* if isUserLoggedIn is true? */}
          <div className={styles.logo}>
            <span onClick={() => navigate("/")}>Innov. Tech</span>
          </div>
          <div className={styles.buttons}>
            <button onClick={() => logOut()}>Logout</button>
            <div>
              <a>User -{isUserLoggedIn}</a>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
