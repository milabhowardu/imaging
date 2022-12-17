import React from "react";
import classes from "./research-highlights.module.sass";

import research_atlas from "../../../../assets/images/research_atlas-1_tn.jpg";
import research_tbi from "../../../../assets/images/research_tbi-1_tn.jpg";
import research_chd from "../../../../assets/images/research_chd-1.jpg";
import research_molecular_mr from "../../../../assets/images/research_molecular_mr-1_tn.jpg";

const ReasrchHighlights = () => {
  const reaserchHighlightsList = [
    {
      researchImg: research_atlas,
      title: `High-Throughput Image Analysis of MRI and PET Imaging`,
      author: `Tsang-Wei Tu, Department of Radiology; Yeona Kang, Department of Mathematics; Nobuyuki Ishibashi, Cardiac Surgery Research Laboratory, Children's National`,
      description: `This project aims to create a three-dimensional MRI brain atlas for large laboratory animals, including Yorkshire piglet and olive baboon for high throughput multimodal image analysis of PET and MRI.`,
    },
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
      {reaserchHighlightsList.map((research) => (
        <div className={classes.researchHightlights}>
          <img src={research.researchImg} />
          <div>
            <div>
              <h2>{research.title}test</h2>
              <div className={classes.author}>{research.author}</div>
              <div>{research.description}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ReasrchHighlights;