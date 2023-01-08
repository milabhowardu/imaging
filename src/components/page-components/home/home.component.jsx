import React from "react";
import classes from "./home.module.sass";

import { GiBugleCall } from "react-icons/gi";
import { GiArchiveResearch } from "react-icons/gi";
import { MdOutlineEventAvailable } from "react-icons/md";
import { GoMegaphone } from "react-icons/go";
import { BsFillPersonLinesFill } from "react-icons/bs";

import Hero from "../../base-components/hero/hero.component";
import background from "../../../assets/images/HomePage.jpg";

import HowardRCMI from "../../../assets/images/HowardRCMI.jpg";
import research_atlas from "../../../assets/images/research_atlas-1_tn.jpg";
import research_tbi from "../../../assets/images/research_tbi-1_tn.jpg";
import research_chd from "../../../assets/images/research_chd-1.jpg";
import research_molecular_mr from "../../../assets/images/research_molecular_mr-1_tn.jpg";

const Home = () => {
  return (
    <>
      <Hero
        background={background}
        title="Howard University Imaging Core Facility"
      />
      <div className={classes.wrapper}>
        {/* <div className={classes.navPath}>
          HOME » <strong>ABOUT US</strong>
        </div> */}
        <div className={classes.homeHeader}>Molecular Imaging Lab</div>
        <div className={classes.homeBlurb}>
          The Howard University Biomedical Imaging Core uses scientific
          expertise and state-of-the-art laboratories equipped with the
          necessary modern imaging equipment for the support of biomedical
          research and training at Howard University.
        </div>

        <div className={classes.blockHeader}>
          <div>
            <GiBugleCall size={25} /> Our Vision & Goals
          </div>
        </div>
        <div className={classes.featuredInner}>
          <img src={HowardRCMI} />
          <div>
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
          </div>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <GiArchiveResearch size={25} /> Research Focus Areas
          </div>
        </div>

        <div className={classes.featured}>
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
        <div className={classes.blockHeader}>
          <div>
            <MdOutlineEventAvailable size={25} /> Event Announcements
          </div>
        </div>
        <div className={classes.featured}>
          Currently, there are no scheduled events planned.
        </div>
        <div className={classes.blockHeader}>
          <div>
            <BsFillPersonLinesFill size={25} /> OPEN POSITIONS
          </div>
        </div>
        <div className={classes.featured}>
          Currently, there are no open positions.
        </div>
        <div className={classes.blockHeader}>
          <div>
            <GoMegaphone size={28} /> Research Highlights
          </div>
        </div>
        <div  className={classes.featuredResearch}>
          <div className={classes.featuredResearchHight}>
            
            <div className={classes.researchImg}><img src={research_atlas} /></div>
            <div>
              <div className={classes.title}>High-Throughput Image Analysis of MRI and PET Imaging</div>
              <div className={classes.author}>Tsang-Wei Tu, Department of Radiology; Yeona Kang, Department of Mathematics; Nobuyuki Ishibashi, Cardiac Surgery Research Laboratory, Children's National</div>
            </div>
          </div>
          <div className={classes.featuredResearchHight}>
            <div className={classes.researchImg}><img src={research_tbi} /></div>
            <div>
              <div  className={classes.title}>Imaging Tissue Damage and Metabolic Disorders in Diffuse Traumatic Brain Injury</div>
              <div className={classes.author}>Tsang-Wei Tu, Department of Radiology; Joseph Frank, Radiology and Imaging Sciences, Clinical Center, National Institutes of Health</div>
            </div>
          </div>
          <div className={classes.featuredResearchHight}>
            <div className={classes.researchImg}><img src={research_chd} /></div>
            <div>
              <div  className={classes.title}>Brain Injury in Congenital Heart Disease</div>
              <div className={classes.author}>Nobuyuki Ishibashi, Cardiac Surgery Research Laboratory, Children's National</div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
