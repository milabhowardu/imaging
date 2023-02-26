import React from "react";
import classes from "./ihc.module.sass";
import Hero from "../../../base-components/hero/hero.component";

import { ImLab } from "react-icons/im";

import background from "../../../../assets/images/Facilities.jpg";
import SearchBox from "../searchBox/search-box.component";

const Ihc = () => {
  return (
    <>
      <Hero
        title="Visualization for IHC/MRI"
        subtitle=" Upload raw image to get result. "
        register="Register"
      />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » PathRadi » <strong>IHC</strong>
        </div>
        {/* <SearchBox /> */}

        {/* <div className={classes.blockHeader}>
          <div>
            <ImLab size={25} /> IHC
          </div>
        </div> */}

      </div>
    </>
  );
};

export default Ihc;