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
import research_chd from "./assets/images/research_chd-1.jpg";
import research_molecular_mrs from "./assets/images/research_molecular_mr-1_tn.jpg";
import HighLight from './components/page-components/research/research-highlights/highlight/highlight.component';



function App() {

  const reaserchHighlightsList = [
    {
      researchImg: research_atlas,
      highlight: "petatlas",
      title: `High-Throughput Image Analysis of MRI and PET Imaging`,
      author: `Tsang-Wei Tu, Department of Radiology; Yeona Kang, Department of Mathematics; Nobuyuki Ishibashi, Cardiac Surgery Research Laboratory, Children's National`,
      description: `This project aims to create a three-dimensional MRI brain atlas for large laboratory animals, including Yorkshire piglet and olive baboon for high throughput multimodal image analysis of PET and MRI.`,
      hightlightImg: [research_atlas_1, research_atlas_2 ],
      hightlightImgBlur: [`Baboon brain atlas in (A) Axial (B) Coronal and (C) 3D View.`, `<strong>Pipeline for high-throughput MRI-PET image analysis.<strong><br />
      A three-dimensional population-representative baboon brain atlas is created in the MIL for atlas-based analysis of MRI and functional PET images.`], 
      references: [`Agaronyan A, Syed R, Kim R, Hsu CH, Love SA, Hooker JM, Reid AE, Wang PC, Ishibashi N, Kang Y, Tu TW. A Baboon Brain Atlas for Magnetic Resonance`,`Imaging and Positron Emission Tomography Image Analysis.
      Front Neuroanat. 2022 Jan 14;15:778769. doi: 10.3389/fnana.2021.778769. PMID: 35095430; PMCID: PMC8795914.`]
    },
    {
      researchImg: research_tbi,
      highlight: "tbi",
      title: `Imaging Tissue Damage and Metabolic Disorders in Diffuse Traumatic Brain Injury`,
      author: `Tsang-Wei Tu, Department of Radiology; Joseph Frank, Radiology and Imaging Sciences, Clinical Center, National Institutes of Health`,
      description: `Traumatic brain injury (TBI) represents a serious public health problem in the United States. Health disparities exist among African Americans with a 35% higher TBI incidence than Caucasians have, but they are less likely to have appropriate follow-up monitoring after emergency department discharge. Using a well-characterized rat model of diffuse TBI, this project investigates the application of advanced neuroimaging techniques to identify the interrelations of trauma pathophysiology for diagnosis of diffuse TBI.`,
    },
    {
      researchImg: research_chd,
      highlight: "chd",
      title: `Brain Injury in Congenital Heart Disease`,
      author: `Nobuyuki Ishibashi, Cardiac Surgery Research Laboratory, Children's National`,
      description: `Advances in neuroimaging technology have provided a wealth of information regarding brain development and injury in children with congenital heart disease. In conjunction with clinical research, preclinical imaging studies using the translational porcine model will aid in acquiring a full picture of impaired brain development and neurological injury associated with congenital heart disease.`,
    },
    {
      researchImg: research_molecular_mrs,
      highlight: "mrs",
      title: `Molecular MR Imaging and Spectroscopy on Cancer and Brain Injury`,
      author: `Chao-Hsiung Hsu, Tsang-Wei Tu, Department of Radiology; Joseph Scafidi, School of Medicine, Johns Hopkins University`,
      description: `Molecular MR imaging and spectroscopy provide non-invasive detection of metabolites in the brain tissue and tumor to avoid invasive examinations. This study applies and CEST imaging and NMR spectroscopy to investigate the metabolic profiles in neonatal hypoxia and immunotoxin therapy of glioblastoma.`,
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
