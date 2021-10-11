import React, { useEffect } from "react";
import classes from "./Navbar.module.css";
import logo from "../../images/logo.png";

function Navbar(props) {
  useEffect(() => {
    let lastScrollTop = 0;
    let navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });
  }, []);

  return (
    <nav className={classes.navbar} id="navbar">
      <div className={classes.left}>
        <a href="#home">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className={classes.right}>
        <ul className={classes.lists}>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#operation">Operations</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <button className={classes.btn}>Open Account</button>
          <button className={classes.btn} onClick={props.onConfirm}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
