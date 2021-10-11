import React from "react";
import classes from "./Home.module.css";
import image from "../../images/hero.png";

function Home() {
  return (
    <div class={classes.header} id="home">
      <div className={classes.left}>
        <h1>
          When
          <span class={classes.highlight}>banking</span>
          meets
          <br />
          <span className={classes.highlight}>minimalist</span>
        </h1>
        <h4>A simpler banking experience for a simpler life.</h4>
        <button className={classes.btn}>Learn more</button>
      </div>
      <div className={classes.right}>
        <img src={image} alt="Minimalist bank items" />
      </div>
    </div>
  );
}

export default Home;
