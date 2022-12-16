import React from "react";
import classes from "./nav-bar.module.sass";

const NavBar = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.siteTopHat}>
        <div className={classes.navSecondary}></div>
      </div>
      <header className={classes.siteHeader}>
        <div className={classes.compartment}>
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
        <nav className={classes.nav} id="myLinks">
          <ul>
            <li>
              <a href=".">About Us</a>
            </li>
            <li>
               <a href="/research">
                Research
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
