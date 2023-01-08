import React from "react";
import classes from "./positions.module.sass";
import Hero from "../../base-components/hero/hero.component";

import { ImLab } from "react-icons/im";

import background from "../../../assets/images/Positions.jpg";

const Positions = () => {
  return (
    <>
      <Hero background={background} title="" />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <strong>Open Positions</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <ImLab size={25} /> Open Posistions
          </div>
        </div>
        <div className={classes.positions}>
            Currently, there are no scheduled events planned.
        </div>


      </div>
    </>
  );
};

export default Positions;