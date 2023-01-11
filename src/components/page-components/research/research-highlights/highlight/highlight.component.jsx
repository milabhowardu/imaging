import React from "react";
import classes from "./highlight.module.sass";

import { IoMdPaper } from "react-icons/io";

const HighLight = ({ research }) => {
  // const {
  //   name,
  //   title,
  //   email,
  //   phone,
  //   biography,
  //   areasofExpertise,
  //   publicationsListLink,
  //   publicationsList,
  // } = person;

  return (
    <div className={classes.wrapper}>
      <div className={classes.navPath}>
        HOME » <strong>Research HighLight</strong>
      </div>
      <div className={classes.blockHeader}>
        <div>
          <IoMdPaper size={30} /> {research.title}
        </div>
      </div>
      
    </div>
  );
};

export default HighLight;
