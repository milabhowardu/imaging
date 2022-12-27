import React from "react";
import classes from "./facilities.module.sass";
import Hero from "../../base-components/hero/hero.component";

import { ImLab } from "react-icons/im";

import background from "../../../assets/images/Facilities.jpg";

const Facilities = () => {
  return (
    <>
      <Hero background={background} title="" />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <strong>Facilites</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <ImLab size={25} /> Facilities: Biomedical Imaging
          </div>
        </div>


      </div>
    </>
  );
};

export default Facilities;