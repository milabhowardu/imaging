import React from "react";
import classes from "./people.module.sass";
import Hero from "../../base-components/hero/hero.component";

import { IoPersonCircleSharp } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";

import background from "../../../assets/images/Header_people.jpg";
import pwang from "../../../assets/images/PWang.jpg";
import wtu from "../../../assets/images/WTu.jpg";
import linCrop from "../../../assets/images/Lin_Crop.jpg";
import chhsu from "../../../assets/images/CHHsu.jpg";
import stuart from "../../../assets/images/SWashington.jpg";
import artur from "../../../assets/images/Artur.jpg";

const People = () => {
  const peopleLIst = [
    {
      image: pwang,
      name: "Paul C. Wang, PhD",
      title: "Professor, Director",
      phone: "(202) 865-3711",
      email: "pwang@howard.edu",
      moreInfo: "/imaging-people-pwang",
    },
    {
      image: wtu ,
      name: "Tsang-Wei Tu, PhD",
      title: "Assistant Professor",
      phone: "(202) 865-3742",
      email: "tsangwei.tu@howard.edu",
      moreInfo: "/imaging-people-wtu",
    },
    {
      image: linCrop ,
      name: "Stephen Lin, MEng",
      title: "Lab Manager",
      phone: "(202) 865-3729",
      email: "stephen.lin@howard.edu",
      moreInfo: "/imaging-people-slin",
    },
    {
      image: chhsu ,
      name: "Chao-Hsiung Hsu, PhD",
      title: "Postdoctoral Fellow",
      phone: "(202) 865-7938",
      email: "chaohsiung.hsu@howard.edu",
      moreInfo: "/imaging-people-chhsu",
    },
    {
      image: stuart ,
      name: "Stuart Washington, PhD",
      title: "Postdoctoral Fellow",
      phone: "(202) 865-4980",
      email: "sdw4@georgetown.edu",
      moreInfo: "/imaging-people-swashington",
    },
    {
      image: artur ,
      name: "Artur Agaronyan, BS",
      title: "PhD Student",
      phone: "(202) 865-3741",
      email: "aagarony@terpmail.umd.edu",
      moreInfo: "/imaging-people-aagaronyan",
    },
  ];
  return (
    <>
      <Hero background={background} title="" />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <strong>People</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <IoPersonCircleSharp size={30} /> Our Member
          </div>
        </div>
        <div className={classes.peopleBlock}>
          {peopleLIst.map((person, idx) => (
            <div className={classes.card} key={`person${idx}`}>
              <div className={classes.people}>
                <img src={person.image} />
                <div className={classes.name}>{person.name}</div>
                <div className={classes.title}>
                  <p>{person.title} </p>
                  <p>{person.phone}</p>
                  <p>{person.email}</p>
                </div>
              </div>
              <div className={classes.viewMore}>
                
                <div><a href={person.moreInfo}>View More</a></div>
                <div className={classes.narrow}>
                      <HiArrowRight size={15}/>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default People;
