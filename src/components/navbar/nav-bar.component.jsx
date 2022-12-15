import React from "react";
import classes from "./nav-bar.module.sass";

const NavBar = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.siteTopHat}>
        <div className={classes.navSecondary}></div>
      </div>
      <header class={classes.siteHeader}>
        <div class={classes.compartment}>
          <a href="http://www2.howard.edu" class={classes.siteLogo}>
            Howard University
          </a>
          <h3>
            <a href=".">
              Molecular Imaging <br />
              Laboratory
            </a>
          </h3>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
