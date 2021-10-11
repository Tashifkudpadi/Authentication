import React from "react";
import classes from "./Cookies.module.css";

function Cookies(props) {
  return (
    <div className={classes.cookies}>
      <p>We use cookies for better functionality and analytics.</p>
      <button type="submit" onClick={props.onConfirm}>
        Got it!
      </button>
    </div>
  );
}

export default Cookies;
