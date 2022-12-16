import React from "react";
import classes from "./hero.module.sass";

const Hero = ({background}) => {
  return (
    <div className={classes.wrapper}>
      <ol>
        <li className={classes.hero} style={{background: `url(${background}) center center / cover no-repeat`}}>
          <div className={classes.compartment}>
            <div className={classes.heroContent}>
              <h2>Howard University Imaging Core Facility </h2>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Hero;
