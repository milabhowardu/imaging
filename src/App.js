import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/page-components/home/home.component";
import Research from "./components/page-components/research/research.component";
import FullPublications from "./components/page-components/research/full-publications/full-publications.component";
import People from "./components/page-components/people/people.component";
import Pwang from "./components/page-components/people/person/pwang.component";
import Wtu from "./components/page-components/people/person/wtu.component";
import Test from "./components/page-components/test/test.component";
import NotFound from "./components/page-components/not-found/not-found.component";

import NavBar from "./components/base-components/navbar/nav-bar.component";
import Footer from "./components/base-components/footer/footer.component";
import Slin from "./components/page-components/people/person/slin.component";
import Hhsu from "./components/page-components/people/person/hhsu.component";
import Swashington from "./components/page-components/people/person/swashington.component";
import Aagaronyan from "./components/page-components/people/person/aagaronyan.component";
import Facilities from "./components/page-components/facilities/facilities.component";
import Events from "./components/page-components/events/events.component";
import Contact from "./components/page-components/contact/contact.component";
import Positions from "./components/page-components/positions/positions.component";

import research_atlas from "./assets/images/research_atlas-1_tn.jpg";
import research_atlas_1 from "./assets/images/imaging-research_petatlas-1.jpg";
import research_atlas_2 from "./assets/images/imaging-research_petatlas-2.jpg";

import research_tbi from "./assets/images/research_tbi-1_tn.jpg";
import research_tbi_1 from "./assets/images/research_tbi-1.jpg";

import research_chd from "./assets/images/research_chd-1.jpg";

import research_molecular_mrs from "./assets/images/research_molecular_mr-1_tn.jpg";
import research_molecular_mrs_1 from "./assets/images/research_molecular_mr-1.jpg";
import research_molecular_mrs_2 from "./assets/images/research_molecular_mr-2.jpg";

import HighLight from "./components/page-components/research/research-highlights/highlight/highlight.component";
import Facility from "./components/page-components/facilities/facility/facility.component";

import facility_mri_1 from "./assets/images/imaging-facilities-bruker7t.jpg";
import facility_mri_2 from "./assets/images/imaging-facilities-bruker94t.jpg";
import mri_sample_1 from "./assets/images/imaging-home-MRI-Sample-1536x1012.jpg";
import mri_sample_2 from "./assets/images/imaging-facilities-mri-tumor.jpg";
import mri_sample_3 from "./assets/images/imaging-facilities-mri-brain.jpg";


import facility_optical_1 from "./assets/images/imaging-facilities-IVISSpectrum2.jpg";
import optical_sample_1 from "./assets/images/imaging-home-Optical-Fluorescence.jpg";
import optical_sample_2 from "./assets/images/imaging-home-Optical-Cancer.jpg";
import optical_sample_3 from "./assets/images/imaging-facilities-optical-highthroughput-1536x627.jpg";

import facility_pet_1 from "./assets/images/imaging-facilities-BrukerPET.jpg";
import PathoRadi from "./components/page-components/pathoradi/pathoradi";
import Ihc from "./components/page-components/pathoradi/ihc/ihc.component";
import Upload from "./components/page-components/pathoradi/upload/upload.component";
import Mandy from "./components/page-components/people/person/mandy.component";
import Sunny from "./components/page-components/people/person/sunny.component";


function App() {
  const reaserchHighlightsList = [
    {
      researchImg: research_atlas,
      highlight: "petatlas",
      title: `High-Throughput Image Analysis of MRI and PET Imaging`,
      author: `Tsang-Wei Tu, Department of Radiology; Yeona Kang, Department of Mathematics; Nobuyuki Ishibashi, Cardiac Surgery Research Laboratory, Children's National`,
      description: `This project aims to create a three-dimensional MRI brain atlas for large laboratory animals, including Yorkshire piglet and olive baboon for high throughput multimodal image analysis of PET and MRI.`,
      hightlightImg: [
        {
          img: research_atlas_1,
          blur: `Baboon brain atlas in (A) Axial (B) Coronal and (C) 3D View.`,
        },
        {
          img: research_atlas_2,
          blur: `<strong>Pipeline for high-throughput MRI-PET image analysis.</strong><br />
      A three-dimensional population-representative baboon brain atlas is created in the MIL for atlas-based analysis of MRI and functional PET images.`,
        },
      ],
      references: [
        `Agaronyan A, Syed R, Kim R, Hsu CH, Love SA, Hooker JM, Reid AE, Wang PC, Ishibashi N, Kang Y, Tu TW. A Baboon Brain Atlas for Magnetic Resonance, Imaging and Positron Emission Tomography Image Analysis.
      Front Neuroanat. 2022 Jan 14;15:778769. doi: 10.3389/fnana.2021.778769. <a href='https://pubmed.ncbi.nlm.nih.gov/35095430/'/>PMID: 35095430</a>; <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8795914/'/>PMCID: PMC8795914</a>.`,
      ],
    },
    {
      researchImg: research_tbi,
      highlight: "tbi",
      title: `Imaging Tissue Damage and Metabolic Disorders in Diffuse Traumatic Brain Injury`,
      author: `Tsang-Wei Tu, Department of Radiology; Joseph Frank, Radiology and Imaging Sciences, Clinical Center, National Institutes of Health`,
      description: `Traumatic brain injury (TBI) represents a serious public health problem in the United States. Health disparities exist among African Americans with a 35% higher TBI incidence than Caucasians have, but they are less likely to have appropriate follow-up monitoring after emergency department discharge. Using a well-characterized rat model of diffuse TBI, this project investigates the application of advanced neuroimaging techniques to identify the interrelations of trauma pathophysiology for diagnosis of diffuse TBI.`,
      hightlightImg: [
        {
          img: research_tbi_1,
          blur: `<strong>Diffusion and magnetization transfer MRI of diffuse TBI.</strong>
      <br/>
      Significance maps of the DTI-FA (A) and MTR (B) over a 30-days period following diffuse TBI. Decreases of DTI FA were most prominent in the major white matter tracts, suggesting superior specificity in detecting diffuse axonal injury. The changes of MTR at 3.5 ppm not only showed in the white matter tracts, but also in the gray matter regions, including cortex, striatum, thalamus, and hippocampus.`,
        },
      ],
      references: [
        `Tu TW, Williams RA, Lescher JD, Jikaria N, Turtzo LC, Frank JA. Radiological-pathological correlation of diffusion tensor and magnetization transfer imaging in a closed head traumatic brain injury model. Ann Neurol. 2016 Jun;79(6):907-20. doi: 10.1002/ana.24641. Epub 2016 Apr 18. <a href="https://pubmed.ncbi.nlm.nih.gov/27230970/">PMID 27230970</a>`,
        `Tu TW, Ibrahim W, Jikaria N, Munasinghe J, Witko, Hammoud D, Frank JA, On the detection of cerebral metabolic depression in experimental traumatic brain injury using Chemical Exchange Saturation Transfer (CEST)-weighted MRI., Scientific Reports, 2018 Jan; 8:669. <a href='https://pubmed.ncbi.nlm.nih.gov/29330386/'>PMID: 29330386</a> <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5766554/'>PMC5766554</a>`,
        `Tu TW, Lescher JD, Williams RA, Jikaria N, Turtzo LC, Frank JA, Abnormal injury response in spontaneous mild ventriculomegaly Wistar rat brains: a diffusion tensor and magnetization transfer imaging study, Journal of Neurotrauma, 2017 Jan 1;34(1):248-256. <a href='https://pubmed.ncbi.nlm.nih.gov/26905805/'>PMID 26905805</a> <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5198143/'>PMC5198143</a>`,
      ],
    },
    {
      researchImg: research_chd,
      highlight: "chd",
      title: `Brain Injury in Congenital Heart Disease`,
      author: `Nobuyuki Ishibashi, Cardiac Surgery Research Laboratory, Children's National`,
      description: `Advances in neuroimaging technology have provided a wealth of information regarding brain development and injury in children with congenital heart disease. In conjunction with clinical research, preclinical imaging studies using the translational porcine model will aid in acquiring a full picture of impaired brain development and neurological injury associated with congenital heart disease.`,
      hightlightImg: [
        {
          img: research_chd,
          blur: `<strong>High-resolution brain MRI of Yorkshire piglet model of congenital heart disease.</strong>
      <br/>
      T2w MRI and diffusion MRI demonstrate contrast of piglet brain anatomy and white matter tracks for visualizing brain injury in congenital heart disease.`,
        },
      ],
      references: [
        `Stinnett GR, Lin S, Korotcov AV, Korotcova L, Morton PD, Ramachandra SD, Pham A, Kumar S, Agematsu K, Zurakowski D, Wang PC, Jonas RA, Ishibashi N. Microstructural Alterations and Oligodendrocyte Dysmaturation in White Matter After Cardiopulmonary Bypass in a Juvenile Porcine Model. J Am Heart Assoc. 2017 Aug 15;6(8):e005997.doi: 10.1161/JAHA.117.005997. <a href='https://pubmed.ncbi.nlm.nih.gov/28862938/'>PMID 28862938</a> <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5586442/'/>PMC5586442</a>`,
      ],
    },
    {
      researchImg: research_molecular_mrs,
      highlight: "mrs",
      title: `Molecular MR Imaging and Spectroscopy on Cancer and Brain Injury`,
      author: `Chao-Hsiung Hsu, Tsang-Wei Tu, Department of Radiology; Joseph Scafidi, School of Medicine, Johns Hopkins University`,
      description: `Molecular MR imaging and spectroscopy provide non-invasive detection of metabolites in the brain tissue and tumor to avoid invasive examinations. This study applies and CEST imaging and NMR spectroscopy to investigate the metabolic profiles in neonatal hypoxia and immunotoxin therapy of glioblastoma.`,
      hightlightImg: [
        {
          img: research_molecular_mrs_1,
          blur: `<strong>Molecular CEST MRI of U87-EGFRvIII tumor xenografts.</strong><br />
      CEST imaging detects a distinct pattern of glucose uptake between a tumor treated by DT390-BiscFv806 recombinant immunotoxin treatment (RIT) and a tumor treated by PBS vehicle. The results suggest that the RIT could significantly inhibit the growth of an established U87-EGFRvIII glioblastoma tumor xenograft.`,
        },
        {
          img: research_molecular_mrs_2,
          blur: `<strong>1H-MRS of hippocampal metabolites in the in vivo and in situ mouse brain.</strong><br />
      (A) T2w MRI of a mouse brain labelled with a voxel of interest on hippocampus for 1H-MRS of (B) in vivo, (C) no fixation, and (D) focused beam microwave irradiation (FBMI) fixation. (E) Comparison of hippocampal metabolite concentrations between the data acquired by in vivo (under isoflurane anesthesia) and in situ (no fixation and FBMI fixation) 1H-MRS.`,
        },
      ],
      references: [
        `Meng J, Liu YY, Gao SY, Lin S, Gu XB, Pomper MG, Wang PC, Shan L. A Bivalent Recombinant Immunotoxin with High Potency against Tumors with EGFR and EGFRvIII Expression. Cancer Biol Ther. Oct 2015. <a href='https://pubmed.ncbi.nlm.nih.gov/27230970/'>PMID 26467217</a> <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4847807/'>PMC4847807</a>`,
        `Hsu CH, Lin S, Ho AC, Johnson TD, Wang PC, Scafidi J, Tu TW. Comparison of in vivo and in situ detection of hippocampal metabolites in mouse brain using 1H-MRS. NMR Biomed. 2020 Nov 30:e4451. doi: 10.1002/nbm.4451. Epub ahead of print. PMID: 33258202 <a href='https://pubmed.ncbi.nlm.nih.gov/33258202/'>PMID 33258202</a>`,
      ],
    },
  ];

  const facilitiesList = {
    mri: {
      title: `MRI Facilities`,
      blurb: `The laboratory has two state-of-the-art NMR machines: a Bruker Avance III 7 Tesla (300 MHz), 21cm horizontal bore MRI/MRS system and a Bruker Avance 9.4 Tesla (400 MHz), 89 mm vertical bore MRI/MRS system. Both MRI/MRS systems are capable of performing MRI as well as spectroscopy studies. The NMR laboratory has acquisition workstations, a storage server and several workstations for spectroscopy data and image processing.`,
      fcilitiesItem: [
        {
          img: facility_mri_1,
          blurb: `
        <h2>Bruker 7T MRI</h2>
        <ul>
          <li>Bruker 7 Tesla (300MHz) MRI/MRS </li>
          <li>210mm horizontal bore Magnex magnet, 112mm clear space </li>
          <li>RF Coils: Volume, surface, and custom-made coils </li>
          <li>AVANCE III Console, Paravision 6 (PV6) software </li>
          <li>Detectable nuclei: 1H
        </ul>
        `,
        },
        {
          img: facility_mri_2,
          blurb: `
        <h2>Bruker 9.4T MRI</h2>
        <ul>
          <li>Bruker 9.4 Tesla (400MHz) MRI/MRS </li>
          <li>89mm vetical bore Oxford magnet </li>
          <li>RF Coils: Volume, surface, and custom-made coils </li>
          <li>AVANCE 400 Console, Paravision 5.1 (PV5) software </li>
          <li>Detectable nuclei: 1H, 19F, 13C, 31P </li>
        </ul>
        `,
        },
      ],
      sampleImg: [
        {
          img: mri_sample_1,
          blurb: `
        Example MRI studies for animal models of cardiac, renal, gastroenterological and musculoskeletal diseases and biology.
        `,
        },
        {
          img: mri_sample_2,
          blurb: `
        A mouse tumor (MDA-MB-231 solid tumor xenograft marked with arrow) visualized using Dynamic Contrast Enhanced MRI with Magnevist (upper row) and a targeted (Transferrin-Liposome-Magnevist) nanocomplex (lower row). The targeted nanocomplex exhibited a stronger and heterogeneous signal enhancement.
        `,
        },
        {
          img: mri_sample_3,
          blurb: `
        In vivo (upper row) and ex vivo (lower row) normal mouse brain images visualized using a high resolution T2 weighted fast spin-echo MRI sequence. This sequence is designed to detect Alzheimer's pathology (amyloid plaques) in the brains and spinal cords of transgenic mice, which become detectable by MRI at 6-8 months of disease progression.
        `,
        },
      ],
    },

    optical: {
      title: `Optical Imaging`,
      blurbImg: facility_optical_1,
      blurb: `The laboratory has a PerkinElmer IVIS® Spectrum imaging system which has brought physics and biology together for the practice of real-time in vivo imaging. It is one of the most versatile and advanced in vivo imaging system available on the market today. This IVIS Imaging System includes a sensitive CCD camera, a dark imaging chamber to minimize incident light, and specialized software to quantify and analyze the results.
      <br /><br />
      Stylized photo showing two researchers talking in front of optical imaging machineFor advanced fluorescence imaging, the IVIS Spectrum has the capability to use either trans-illumination (from the bottom) or epi-illumination (from the top) to illuminate in vivo fluorescent sources. 3D diffuse fluorescence tomography can be performed to determine source localization and concentration using the combination of structured light and trans illumination fluorescent images. The instrument is equipped with 10 narrow band excitation filters (30nm bandwidth) and 18 narrow band emission filters (20nm bandwidth) that assist in significantly reducing autofluorescence by the spectral scanning of filters and the use of spectral unmixing algorithms. In addition, the spectral unmixing tools allow the researcher to separate signals from multiple fluorescent reporters within the same animal.
      <br /><br />
      The IVIS Imaging Systems are currently being used for genomics, biotechnology, and pharmaceutical product research and development. Data gathered from animal models based on the real-time in vivo imaging technology allow researchers to better understand the mechanisms of diseases and drug effects.`,
      fcilitiesItem: [
        {
          img: facility_optical_1,
          blurb: `
        <h2>PerkinElmer IVIS Spectrum</h2>
        <ul>
          <li>High-sensitivity in vivo imaging of fluorescence and bioluminescence </li>
          <li>High throughput imaging – 23cm FOV, up to 5 mice simultaneously </li>
          <li>High resolution – up to 20micron when using 3.9cm FOV </li>
          <li>28 high efficiency filters (10 excitation, 18 emission) – 430-850nm </li>
        </ul>
        `,
        },
      ],
      sampleImg: [
        {
          img: optical_sample_1,
          blurb: `
        A preferential accumulation of fluorescent signal in breast cancer xenografts after intravenous injection of Transferrin labeled with near-infrared dye. The fluorescence signal in the tumor was detectable as early as 10 min, reached a maximum around 2 h and then decreased gradually.
        `,
        },
        {
          img: optical_sample_2,
          blurb: `
        Bio-luminescence images of breast cancer metastasis in the lungs (a) initial inoculation of <103 cancer cells, (b) a week later.
        `,
        },
        {
          img: optical_sample_3,
          blurb: `
        <b>Image-based Real-time Evaluation of Molecular Events.</b>
        <br/>
        HC11 mammary epithelial cells transfected with a luciferase construct of the beta-casein gene promoter (p-344/-1betac-Lux). The promoter activity was imaged optically in real time following lactogenic induction. The imaging signal intensity was closely correlated with that measured using a luminometer following protein extraction and consistent with the messenger RNA (mRNA) level of the endogenous beta -casein gene.
        `,
        },
      ],
    },

    pet: {
      title: `PET/SPECT/CT`,
      blurb: `The laboratory is currently in the process of installing and testing a Bruker Albira PET/SPECT/CT machine. The PET component consists of a two-ring PET system containing 8 LYSO crystal detectors in each ring. The CT system has a 10-50 kVp microfocus X-ray source and a 2400×2400 digital detector. This PET/CT machine has an MRI compatible animal management system.`,
      fcilitiesItem: [
        {
          img: facility_pet_1,
          blurb: `
          <h2>Bruker Albira PET/SPECT/CT Machine</h2>
          <ul>
            <li>PET: 8 LYSO crystal detector </li>
            <li>SPECT: 2 rotating gamma cameras </li>
            <li>CT: 10-50 kVp X-ray </li>
            <li>105mm bore size </li>
          </ul>
          <div>
            <a href="https://www.bruker.com/content/bruker/int/en/products-and-solutions/preclinical-imaging/nuclear-molecular-imaging/albirasi.html"> More Information </a>
          </div>
        `,
        },
      ],
    },
  };

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route
            exact
            path="/research"
            element={
              <Research reaserchHighlightsList={reaserchHighlightsList} />
            }
          />
          <Route exact path="/research/full" element={<FullPublications />} />
          <Route
            exact
            path="/research/petatlas"
            element={<HighLight research={reaserchHighlightsList[0]} />}
          />
          <Route
            exact
            path="/research/tbi"
            element={<HighLight research={reaserchHighlightsList[1]} />}
          />
          <Route
            exact
            path="/research/chd"
            element={<HighLight research={reaserchHighlightsList[2]} />}
          />
          <Route
            exact
            path="/research/mrs"
            element={<HighLight research={reaserchHighlightsList[3]} />}
          />

          <Route exact path="/people" element={<People />} />
          <Route exact path="/people/pwang" element={<Pwang />} />
          <Route exact path="/people/wtu" element={<Wtu />} />
          <Route exact path="/people/slin" element={<Slin />} />
          <Route exact path="/people/chhsu" element={<Hhsu />} />
          <Route
            exact
            path="/people/swashington"
            element={<Swashington />}
          />
          <Route
            exact
            path="/people/mandy"
            element={<Mandy />}
          />
          <Route
            exact
            path="/people/aagaronyan"
            element={<Aagaronyan />}
          />
          <Route
            exact
            path="/people/sunny"
            element={<Sunny />}
          />

          <Route exact path="/facilities" element={<Facilities />} />
          <Route
            exact
            path="/facility/mri"
            element={<Facility facility={facilitiesList.mri} />}
          />
          <Route
            exact
            path="/facility/optical"
            element={<Facility facility={facilitiesList.optical} />}
          />
          <Route
            exact
            path="/facility/pet"
            element={<Facility facility={facilitiesList.pet} />}
          />

          <Route exact path="/events" element={<Events />} />
          <Route exact path="/positions" element={<Positions />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

          <Route exact path="/pathoradi" element={<PathoRadi />} />
          <Route exact path="/pathoradi/ihc" element={<Ihc />} />
          <Route exact path="/pathoradi/upload" element={<Upload />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
