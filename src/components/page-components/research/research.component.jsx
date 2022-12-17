import React from "react";
import classes from "./research.module.sass";
import Hero from "../../base-components/hero/hero.component";
import ReasrchHighlights from "./research-highlights/research-highlights.component";

import background from "../../../assets/images/ResearchPage.jpg";

const Research = () => {
  return (
    <>
      <Hero background={background} title="Research Activities" />
      <div className={classes.wrapper}>
        <div>HOMERE | SEARCH</div>
        <div className={classes.researchContent}>
          <div className={classes.header}>
            The <strong>M</strong>olecular <strong>I</strong>maging{" "}
            <strong>L</strong>aboratory provides state-of-the-art
            instrumentation and intellectual resources to support preclinical
            imaging research.
          </div>
          <h2>Research Highlights</h2>
          <div className={classes.textBlock}>
            <ReasrchHighlights />
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
