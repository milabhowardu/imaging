import React from "react";
import classes from "./home.module.sass";
import Hero from "../../base-components/hero/hero.component";
import background from "../../../assets/images/HomePage.jpg";

const Home = () => {
  return (
    <>
      <Hero
        background={background}
        title="Howard University Imaging Core Facility"
      />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <strong>ABOUT US</strong>
        </div>
        <div className={classes.featuredInner}>
          <h3>Mission</h3>
          <p>
            The Howard University Molecular Imaging Lab supports discovery,
            learning and interdisciplinary research using advanced imaging
            technology for the research community in Howard University and the
            Washington DC area.
          </p>
        </div>
        <div className={classes.featuredInner}>
          <h3>Objectives</h3>
          <p>
            <ul>
              <li>
                To provide state-of-the-art instrumentation, technical expertise
                and services for molecular, cellular and <i>in vivo</i> imaging
              </li>
              <li>
                To offer student and faculty training opportunities in
                biomedical imaging sciences through methodology-centered
                seminars, workshops, mini-courses and internships
              </li>
              <li>
                To foster new interdisciplinary research collaborations using
                modern imaging techniques
              </li>
            </ul>
          </p>
        </div>

        <div className={classes.featuredInner}>
          <h3>Research Focus Areas</h3>
          <p>
            <strong>Imaging of Disease Animal Models</strong>
          </p>
          <ul>
            <li>
              Tumor Models (breast, prostate, melanoma, head and neck cancers)
            </li>
            <li>
              Disease Models (Alzheimer's disease, cardiovascular disease)
            </li>
          </ul>

          <p>
            <strong>Neuroscience Imaging</strong>
          </p>
          <ul>
            <li>Functional Imaging</li>
            <li>Developmental Disability and Acquired Brain Disorders</li>
            <li>Stroke and Traumatic Brain Injury</li>
            <li>
              Disorders of Mental Health (nicotine addiction, neurochemical
              anatomy)
            </li>
          </ul>

          <p>
            <strong>Image Processing and Data Analysis</strong>
          </p>
          <ul>
            <li>High-throughput Image Data Analysis</li>
            <li>Feature Detection and Pattern Recognition in Medical Images</li>
            <li>Deep Learning in Medical Imaging</li>
          </ul>

          <p>
            <strong>Nanomedicine</strong>
          </p>
          <ul>
            <li>
              Development of Nanoparticles (therapeutic / diagnostic agents,
              targeted drug delivery)
            </li>
            <li>Safety and Toxicity of Nanoparticle Usage</li>
          </ul>

          <p>
            <strong>Pharmacological Applications</strong>
          </p>
          <ul>
            <li>
              Drug Development, Translational Studies (muscle dystrophy,
              Schizophrenia)
            </li>
            <li>
              <em>In vivo</em> Drug Metabolism (pharmacokinetics, multidrug
              interaction in CNS)
            </li>
          </ul>

          <p>
            <strong>
              <em>In Vitro</em> Cell Imaging
            </strong>
          </p>
          <ul>
            <li>
              Endocytosis of nanoparticles on intact Cells (mechanism of
              targeting)
            </li>
            <li>Elucidation of Metabolic Pathways (molecular imaging)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
