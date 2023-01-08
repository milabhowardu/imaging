import React from "react";
import classes from "./facilities.module.sass";
import Hero from "../../base-components/hero/hero.component";

import { ImLab } from "react-icons/im";

import background from "../../../assets/images/Facilities.jpg";
import Bruker from "../../../assets/images/imaging-Facilities-Bruker.jpg";
import PET from "../../../assets/images/imaging-facilities-BrukerPET.jpg";
import IVISSpectrum2 from "../../../assets/images/imaging-facilities-IVISSpectrum2.jpg";

const Facilities = () => {
  return (
    <>
      <Hero background={background} title="" />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <strong>Facilites</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <ImLab size={25} /> Facilities: Biomedical Imaging
          </div>
        </div>
        <div className={classes.faclities}>
          Optical Imaging, Positron Emission Tomography, Molecular Biology, and
          Radiochemistry research support facilities and a mechanical and
          electronic shop for constructing RF probes
        </div>

        <div className={classes.featuredInner}>
          <img src={Bruker} />
          <div>
            <h2>MRI and MRS</h2>
            The laboratory has two state-of-the-art NMR machines: A Bruker
            Avance III 7.0 Tesla (300 MHz), 21 cm horizontal bore MRI/MRS system
            and a Bruker Avance 9.4 Tesla (400 MHz), 89 mm vertical bore MRI/MRS
            system.
          </div>
        </div>
        <div className={classes.featuredInner}>
          <div>
            <h2>PET/SPECT/CT</h2>
            The laboratory has a Bruker Albira PET/SPECT/CT machine currently
            undergoing installation and testing.
          </div>
          <img src={PET} />
        </div>
        <div className={classes.featuredInner}>
          <img src={IVISSpectrum2} />
          <div>
            <h2> Fluorescent and Bioluminescent Optical Imaging</h2>
            The laboratory has a PerkinElmer IVIS Spectrum imaging system which
            has brought physics and biology together for the practice of
            real-time in vivo imaging.
          </div>
        </div>

        <div className={classes.faclities}>
          <h2>Scheduling</h2>
          <div>
            For new projects, please contact Dr. Paul Wang (pwang@howard.edu) to schedule an initial meeting to discuss feasibility and project timeline.
          </div>
          <div>
            For scheduling established projects: Please use Idea Elan or contact Stephen Lin (stephen.lin@howard.edu)

          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
