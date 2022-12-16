import React, { useEffect } from "react";
import classes from "./nav-bar.module.sass";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  useEffect(() => {
    function handleResize() {
      let x = document.getElementById("myLinks");
			let w = document.documentElement.clientWidth;
			if(w >= 1250) {
				x.style.display = "flex";
			} else{
				x.style.display = "none";
			}
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuExpand = () =>{
    let x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.siteTopHat}>
        <div className={classes.navSecondary}></div>
      </div>
      <header className={classes.siteHeader}>
        <div className={classes.compartment}>
          <a href="http://www2.howard.edu" className={classes.siteLogo}>
            Howard University
          </a>
          <h3>
            <a href=".">
              Molecular Imaging <br />
              Laboratory
            </a>
          </h3>
        </div>
        <a className={classes.faBars} onClick={menuExpand}>
          <FaBars size={32}/>
        </a>
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
