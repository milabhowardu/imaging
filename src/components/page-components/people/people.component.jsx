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
import artur from "../../../assets/images/Artur.jpg";

const People = () => {
  const peopleLIst = [
    {
      image: pwang,
      name: "Paul C. Wang, PhD",
      title: "Professor, Director",
      phone: "(202) 865-3711",
      email: "pwang@howard.edu",
      moreInfo: "",
    },
    {
      image: wtu ,
      name: "Tsang-Wei Tu, PhD",
      title: "Assistant Professor",
      phone: "(202) 865-3742",
      email: "tsangwei.tu@howard.edu",
      moreInfo: "",
    },
    {
      image: linCrop ,
      name: "Stephen Lin, MEng",
      title: "Lab Manager",
      phone: "(202) 865-3729",
      email: "stephen.lin@howard.edu",
      moreInfo: "",
    },
    {
      image: chhsu ,
      name: "Chao-Hsiung Hsu, PhD",
      title: "Postdoctoral Fellow",
      phone: "(202) 865-7938",
      email: "chaohsiung.hsu@howard.edu",
      moreInfo: "",
    },
    {
      image: artur ,
      name: "Artur Agaronyan, BS",
      title: "Research Assistant",
      phone: "(202) 865-3741",
      email: "stephen.lin@howard.edu",
      moreInfo: "aagarony@terpmail.umd.edu",
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
          {peopleLIst.map((people, idx) => (
            <div className={classes.card} key={`people${idx}`}>
              <div className={classes.people}>
                <img src={people.image} />
                <div className={classes.name}>{people.name}</div>
                <div className={classes.title}>
                  <p>{people.title} </p>
                  <p>{people.phone}</p>
                  <p>{people.email}</p>
                </div>
              </div>
              <div className={classes.viewMore}>
                
                <div>View More</div>
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
