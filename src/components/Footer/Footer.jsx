import React from "react";
import classes from "./Footer.module.css";

import icon from "../../images/icon.png";

function Footer() {
  return (
    <div className={classes.main}>
      <ul>
        <li>About</li>
        <li>Pricing</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <li>Careers</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>

      <img src={icon} alt="" />

      <span className={classes.span}>
        © Copyright by_
        <a href="https://tashif.netlify.app" target="_blank">
          Tashif Kudpadi,
        </a>
        Use for learning or your portfolio. Don't use to teach. Don't claim as
        your own product.
      </span>
    </div>
  );
}

export default Footer;
