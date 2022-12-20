import React from "react";
import classes from "./research.module.sass";
import Hero from "../../base-components/hero/hero.component";
import ReasrchHighlights from "./research-highlights/research-highlights.component";

import background from "../../../assets/images/ResearchPage.jpg";
import SupportedResearchProjects from "./supported-research-projects/supported-research-projects.component";
import SelectedPublications from './selected-publications/selected-publications.component';

const Research = () => {
  return (
    <>
      <Hero background={background} title="Research Activities" />
      <div className={classes.wrapper}>
      <div className={classes.navPath}>HOME  »  <strong>RESEARCH</strong></div>
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
          <h2>Supported Research Projects</h2>
          <div className={classes.textBlock}>
            <SupportedResearchProjects />
          </div>
          <h2>Selected Publications</h2>
          <div className={classes.textBlock}>
            <SelectedPublications />
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
