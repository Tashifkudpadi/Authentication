import React from "react";
import classes from "./FeaturesContent.module.css";
import firstLeftImg from "../../images/digital.jpg";
import secondImg from "../../images/grow.jpg";
import thirdImg from "../../images/card.jpg";

function featuresContent() {
  return (
    <div className={classes.container}>
      <div className={classes.first}>
        <div className={classes.firstLeft}>
          <img src={firstLeftImg} alt="" />
        </div>
        <div className={classes.firstRight}>
          <span>
            <i class="fas fa-desktop"></i>
          </span>
          <h2>100% Digital bank</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus.
          </p>
        </div>
      </div>
      <div className={classes.second} id="second">
        <div className={classes.secondLeft}>
          <span>
            <i class="fas fa-chart-line"></i>
          </span>
          <h2>Watch your money grow</h2>
          <p>
            Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
            inventore ab? Nulla incidunt eius numquam sequi iste pariatur
            quibusdam!
          </p>
        </div>
        <div className={classes.secondRight}>
          <img src={secondImg} alt="err" />
        </div>
      </div>
      <div className={classes.third}>
        <div className={classes.thirdLeft}>
          <img src={thirdImg} alt="" />
        </div>
        <div className={classes.thirdRight}>
          <span>
            <i class="far fa-credit-card"></i>
          </span>
          <h2>Free Debit card included</h2>
          <p>
            Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
            eveniet consequatur odit quam quos possimus assumenda dicta fuga
            inventore ab.
          </p>
        </div>
      </div>
    </div>
  );
}

export default featuresContent;
