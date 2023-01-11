import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/page-components/home/home.component';
import Research from './components/page-components/research/research.component';
import FullPublications from './components/page-components/research/full-publications/full-publications.component';
import People from './components/page-components/people/people.component';
import Pwang from './components/page-components/people/person/pwang.component';
import Wtu from './components/page-components/people/person/wtu.component';
import Test from './components/page-components/test/test.component';
import NotFound from './components/page-components/not-found/not-found.component';

import NavBar from './components/base-components/navbar/nav-bar.component';
import Footer from './components/base-components/footer/footer.component';
import Slin from './components/page-components/people/person/slin.component';
import Hhsu from './components/page-components/people/person/hhsu.component';
import Swashington from './components/page-components/people/person/swashington.component';
import Aagaronyan from './components/page-components/people/person/aagaronyan.component';
import Facilities from './components/page-components/facilities/facilities.component';
import Events from './components/page-components/events/events.component';
import Contact from './components/page-components/contact/contact.component';
import Positions from './components/page-components/positions/positions.component';


import research_atlas from "./assets/images/research_atlas-1_tn.jpg";
import research_atlas_1 from "./assets/images/imaging-research_petatlas-1.jpg";
import research_atlas_2 from "./assets/images/imaging-research_petatlas-2.jpg";

import research_tbi from "./assets/images/research_tbi-1_tn.jpg";
import research_tbi_1 from "./assets/images/research_tbi-1.jpg";

import research_chd from "./assets/images/research_chd-1.jpg";

import research_molecular_mrs from "./assets/images/research_molecular_mr-1_tn.jpg";
import research_molecular_mrs_1 from "./assets/images/research_molecular_mr-1.jpg";
import research_molecular_mrs_2 from "./assets/images/research_molecular_mr-2.jpg";


import HighLight from './components/page-components/research/research-highlights/highlight/highlight.component';



function App() {

  const reaserchHighlightsList = [
    {
      researchImg: research_atlas,
      highlight: "petatlas",
      title: `High-Throughput Image Analysis of MRI and PET Imaging`,
      author: `Tsang-Wei Tu, Department of Radiology; Yeona Kang, Department of Mathematics; Nobuyuki Ishibashi, Cardiac Surgery Research Laboratory, Children's National`,
      description: `This project aims to create a three-dimensional MRI brain atlas for large laboratory animals, including Yorkshire piglet and olive baboon for high throughput multimodal image analysis of PET and MRI.`,
      hightlightImg: [{img: research_atlas_1, blur: `Baboon brain atlas in (A) Axial (B) Coronal and (C) 3D View.`}, {img: research_atlas_2, blur: `<strong>Pipeline for high-throughput MRI-PET image analysis.</strong><br />
      A three-dimensional population-representative baboon brain atlas is created in the MIL for atlas-based analysis of MRI and functional PET images.`}],
      references: [`Agaronyan A, Syed R, Kim R, Hsu CH, Love SA, Hooker JM, Reid AE, Wang PC, Ishibashi N, Kang Y, Tu TW. A Baboon Brain Atlas for Magnetic Resonance`,`Imaging and Positron Emission Tomography Image Analysis.
      Front Neuroanat. 2022 Jan 14;15:778769. doi: 10.3389/fnana.2021.778769. PMID: 35095430; PMCID: PMC8795914.`]
    },
    {
      researchImg: research_tbi,
      highlight: "tbi",
      title: `Imaging Tissue Damage and Metabolic Disorders in Diffuse Traumatic Brain Injury`,
      author: `Tsang-Wei Tu, Department of Radiology; Joseph Frank, Radiology and Imaging Sciences, Clinical Center, National Institutes of Health`,
      description: `Traumatic brain injury (TBI) represents a serious public health problem in the United States. Health disparities exist among African Americans with a 35% higher TBI incidence than Caucasians have, but they are less likely to have appropriate follow-up monitoring after emergency department discharge. Using a well-characterized rat model of diffuse TBI, this project investigates the application of advanced neuroimaging techniques to identify the interrelations of trauma pathophysiology for diagnosis of diffuse TBI.`,
      hightlightImg: [{img: research_tbi_1, blur: `<strong>Diffusion and magnetization transfer MRI of diffuse TBI.</strong>
      <br/>
      Significance maps of the DTI-FA (A) and MTR (B) over a 30-days period following diffuse TBI. Decreases of DTI FA were most prominent in the major white matter tracts, suggesting superior specificity in detecting diffuse axonal injury. The changes of MTR at 3.5 ppm not only showed in the white matter tracts, but also in the gray matter regions, including cortex, striatum, thalamus, and hippocampus.`}],
      references: [
        `Tu TW, Williams RA, Lescher JD, Jikaria N, Turtzo LC, Frank JA. Radiological-pathological correlation of diffusion tensor and magnetization transfer imaging in a closed head traumatic brain injury model. Ann Neurol. 2016 Jun;79(6):907-20. doi: 10.1002/ana.24641. Epub 2016 Apr 18. PMID 27230970`,
        `Tu TW, Ibrahim W, Jikaria N, Munasinghe J, Witko, Hammoud D, Frank JA, On the detection of cerebral metabolic depression in experimental traumatic brain injury using Chemical Exchange Saturation Transfer (CEST)-weighted MRI., Scientific Reports, 2018 Jan; 8:669. PMID 29330386 PMC5766554`,
        `Tu TW, Lescher JD, Williams RA, Jikaria N, Turtzo LC, Frank JA, Abnormal injury response in spontaneous mild ventriculomegaly Wistar rat brains: a diffusion tensor and magnetization transfer imaging study, Journal of Neurotrauma, 2017 Jan 1;34(1):248-256. PMID 26905805 PMC5198143`
      ]
    },
    {
      researchImg: research_chd,
      highlight: "chd",
      title: `Brain Injury in Congenital Heart Disease`,
      author: `Nobuyuki Ishibashi, Cardiac Surgery Research Laboratory, Children's National`,
      description: `Advances in neuroimaging technology have provided a wealth of information regarding brain development and injury in children with congenital heart disease. In conjunction with clinical research, preclinical imaging studies using the translational porcine model will aid in acquiring a full picture of impaired brain development and neurological injury associated with congenital heart disease.`,
      hightlightImg: [{img: research_chd, blur: `<strong>High-resolution brain MRI of Yorkshire piglet model of congenital heart disease.</strong>
      <br/>
      T2w MRI and diffusion MRI demonstrate contrast of piglet brain anatomy and white matter tracks for visualizing brain injury in congenital heart disease.`}],
      references: [
        `Stinnett GR, Lin S, Korotcov AV, Korotcova L, Morton PD, Ramachandra SD, Pham A, Kumar S, Agematsu K, Zurakowski D, Wang PC, Jonas RA, Ishibashi N. Microstructural Alterations and Oligodendrocyte Dysmaturation in White Matter After Cardiopulmonary Bypass in a Juvenile Porcine Model. J Am Heart Assoc. 2017 Aug 15;6(8):e005997.doi: 10.1161/JAHA.117.005997. PMID 28862938 PMC5586442`
      ]
    },
    {
      researchImg: research_molecular_mrs,
      highlight: "mrs",
      title: `Molecular MR Imaging and Spectroscopy on Cancer and Brain Injury`,
      author: `Chao-Hsiung Hsu, Tsang-Wei Tu, Department of Radiology; Joseph Scafidi, School of Medicine, Johns Hopkins University`,
      description: `Molecular MR imaging and spectroscopy provide non-invasive detection of metabolites in the brain tissue and tumor to avoid invasive examinations. This study applies and CEST imaging and NMR spectroscopy to investigate the metabolic profiles in neonatal hypoxia and immunotoxin therapy of glioblastoma.`,
      hightlightImg: [{img: research_molecular_mrs_1, blur: `<strong>Molecular CEST MRI of U87-EGFRvIII tumor xenografts.</strong><br />
      CEST imaging detects a distinct pattern of glucose uptake between a tumor treated by DT390-BiscFv806 recombinant immunotoxin treatment (RIT) and a tumor treated by PBS vehicle. The results suggest that the RIT could significantly inhibit the growth of an established U87-EGFRvIII glioblastoma tumor xenograft.`}, {img: research_molecular_mrs_2, blur: `<strong>1H-MRS of hippocampal metabolites in the in vivo and in situ mouse brain.</strong><br />
      (A) T2w MRI of a mouse brain labelled with a voxel of interest on hippocampus for 1H-MRS of (B) in vivo, (C) no fixation, and (D) focused beam microwave irradiation (FBMI) fixation. (E) Comparison of hippocampal metabolite concentrations between the data acquired by in vivo (under isoflurane anesthesia) and in situ (no fixation and FBMI fixation) 1H-MRS.`}],
      references: [`Meng J, Liu YY, Gao SY, Lin S, Gu XB, Pomper MG, Wang PC, Shan L. A Bivalent Recombinant Immunotoxin with High Potency against Tumors with EGFR and EGFRvIII Expression. Cancer Biol Ther. Oct 2015. PMID 26467217 PMC4847807`,`Hsu CH, Lin S, Ho AC, Johnson TD, Wang PC, Scafidi J, Tu TW. Comparison of in vivo and in situ detection of hippocampal metabolites in mouse brain using 1H-MRS. NMR Biomed. 2020 Nov 30:e4451. doi: 10.1002/nbm.4451. Epub ahead of print. PMID: 33258202 PMID 33258202`]
    },
  ];

  return (
    <> 
    <NavBar />
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>

            <Route exact path="/research" element={<Research reaserchHighlightsList={reaserchHighlightsList}/>}/>
            <Route exact path="/research/full" element={<FullPublications />}/>
            <Route exact path="/research/petatlas" element={<HighLight research={reaserchHighlightsList[0]}/>}/>
            <Route exact path="/research/tbi" element={<HighLight research={reaserchHighlightsList[1]}/>}/>
            <Route exact path="/research/chd" element={<HighLight research={reaserchHighlightsList[2]}/>}/>
            <Route exact path="/research/mrs" element={<HighLight research={reaserchHighlightsList[3]}/>}/>

            <Route exact path="/people" element={<People />}/>
            <Route exact path="/imaging-people-pwang" element={<Pwang />}/>
            <Route exact path="/imaging-people-wtu" element={<Wtu />}/>
            <Route exact path="/imaging-people-slin" element={<Slin />}/>
            <Route exact path="/imaging-people-chhsu" element={<Hhsu />}/>
            <Route exact path="/imaging-people-swashington" element={<Swashington />}/>
            <Route exact path="/imaging-people-aagaronyan" element={<Aagaronyan />}/>
            
            <Route exact path="/facilities" element={<Facilities />}/>
            <Route exact path="/events" element={<Events />}/>
            <Route exact path="/positions" element={<Positions />}/>
            <Route exact path="/contact" element={<Contact />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
    <Footer />
  </>
  );
}

export default App;
