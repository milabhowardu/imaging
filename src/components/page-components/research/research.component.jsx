import React from "react";
import classes from "./research.module.sass";
import Hero from "../../base-components/hero/hero.component";
import ReasrchHighlights from "./research-highlights/research-highlights.component";

import background from "../../../assets/images/ResearchPage.jpg";
import research_atlas from "../../../assets/images/research_atlas-1_tn.jpg";
import research_tbi from "../../../assets/images/research_tbi-1_tn.jpg";
import research_chd from "../../../assets/images/research_chd-1.jpg"
import research_molecular_mr from "../../../assets/images/research_molecular_mr-1_tn.jpg"


const Research = () => {
  const reaserchHighlightsList = [
    {
      researchImg: research_atlas,
      title: `High-Throughput Image Analysis of MRI and PET Imaging`,
      author: `Tsang-Wei Tu, Department of Radiology; Yeona Kang, Department of Mathematics; Nobuyuki Ishibashi, Cardiac Surgery Research Laboratory, Children's National`,
      description: `This project aims to create a three-dimensional MRI brain atlas for large laboratory animals, including Yorkshire piglet and olive baboon for high throughput multimodal image analysis of PET and MRI.`,
    },
    {
      researchImg: research_tbi,
      title: `Imaging Tissue Damage and Metabolic Disorders in Diffuse Traumatic Brain Injury`,
      author: `Tsang-Wei Tu, Department of Radiology; Joseph Frank, Radiology and Imaging Sciences, Clinical Center, National Institutes of Health`,
      description: `Traumatic brain injury (TBI) represents a serious public health problem in the United States. Health disparities exist among African Americans with a 35% higher TBI incidence than Caucasians have, but they are less likely to have appropriate follow-up monitoring after emergency department discharge. Using a well-characterized rat model of diffuse TBI, this project investigates the application of advanced neuroimaging techniques to identify the interrelations of trauma pathophysiology for diagnosis of diffuse TBI.`,
    },
    {
      researchImg: research_chd,
      title: `Brain Injury in Congenital Heart Disease`,
      author: `Nobuyuki Ishibashi, Cardiac Surgery Research Laboratory, Children's National`,
      description: `Advances in neuroimaging technology have provided a wealth of information regarding brain development and injury in children with congenital heart disease. In conjunction with clinical research, preclinical imaging studies using the translational porcine model will aid in acquiring a full picture of impaired brain development and neurological injury associated with congenital heart disease.`,
    },
    {
      researchImg: research_molecular_mr,
      title: `Molecular MR Imaging and Spectroscopy on Cancer and Brain Injury`,
      author: `Chao-Hsiung Hsu, Tsang-Wei Tu, Department of Radiology; Joseph Scafidi, School of Medicine, Johns Hopkins University`,
      description: `Molecular MR imaging and spectroscopy provide non-invasive detection of metabolites in the brain tissue and tumor to avoid invasive examinations. This study applies and CEST imaging and NMR spectroscopy to investigate the metabolic profiles in neonatal hypoxia and immunotoxin therapy of glioblastoma.`,
    },
  ];
  return (
    <>
      <Hero background={background} title="Research Activities" />
      <div className={classes.wrapper}>
        <div>HOMERE | SEARCH</div>
        <div background={classes.researchContent}>
          <div className={classes.header}>
            The <strong>M</strong>olecular <strong>I</strong>maging{" "}
            <strong>L</strong>aboratory provides state-of-the-art
            instrumentation and intellectual resources to support preclinical
            imaging research.
          </div>
          <h2>Research Highlights</h2>
          <div className={classes.textBlock}>
            {reaserchHighlightsList.map((research, idx) => (
              <ReasrchHighlights
                 key={`research${idx}`}
                researchImg={research.researchImg}
                title={research.title}
                author={research.author}
                description={research.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
