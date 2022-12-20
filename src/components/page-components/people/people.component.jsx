import React from "react";
import classes from "./people.module.sass";
import Hero from "../../base-components/hero/hero.component";

import background from "../../../assets/images/Header_people.jpg";


const People = () => {
  return (
    <>
      <Hero background={background} title="People" />
      <div className={classes.wrapper}>People</div>
    </>
  );
};

export default People;