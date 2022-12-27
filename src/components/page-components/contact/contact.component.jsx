import React from "react";
import classes from "./contact.module.sass";
import Hero from "../../base-components/hero/hero.component";

import { FiMapPin } from "react-icons/fi";

import background from "../../../assets/images/Direction.jpg";

const Contact = () => {
  return (
    <>
      <Hero background={background} title="" />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <strong>Contact</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <FiMapPin size={25} /> Location
          </div>
        </div>


      </div>
    </>
  );
};

export default Contact;