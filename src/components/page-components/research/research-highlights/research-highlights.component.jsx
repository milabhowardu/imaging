import React from "react";
import classes from "./research-highlights.module.sass";

const ReasrchHighlights = (props) => {
  const { researchImg, title, author, description } = props;
  return (
    <div className={classes.researchHightlights}>
      <img src={researchImg} />
      <div>
        <div>
          <h2>{title}</h2>
          <div className={classes.author}>{author}</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ReasrchHighlights;
