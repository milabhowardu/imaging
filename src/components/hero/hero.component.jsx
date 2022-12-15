import React from "react";
import classes from "./hero.module.sass";

const Hero = () => {
  return (
    <div className={classes.wrapper}>
      <ol>
        <li className={classes.hero}>
          <div className={classes.compartment}>
            <div className={classes.heroContent}>
              <h2>Howard University Imaging Core Facility </h2>
              <h3></h3>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Hero;
