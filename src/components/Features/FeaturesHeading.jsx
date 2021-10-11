import React from "react";
import classes from "./FeaturesHeading.module.css";

function FeaturesHeading() {
  return (
    <div className={classes.features} id="features">
      <h2>Features</h2>
      <p>
        Everything you need in a modern bank <br /> and more.
      </p>
    </div>
  );
}

export default FeaturesHeading;
