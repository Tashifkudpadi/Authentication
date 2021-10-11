import React from "react";
import classes from "./Slogan.module.css";

function Slogan() {
  return (
    <>
      <div className={classes.main}>
        <h2>
          The best day to join Bankist was one year ago. The second best is
          today!
        </h2>
        <span>Open your free account today!</span>
      </div>
      <hr />
    </>
  );
}

export default Slogan;
