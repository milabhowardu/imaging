import React from "react";
import classes from "./people.module.sass";
import Hero from "../../base-components/hero/hero.component";

import { IoMdPaper } from "react-icons/io";
import { HiArrowRight } from "react-icons/hi";

import background from "../../../assets/images/Header_people.jpg";
import pwang from "../../../assets/images/PWang.jpg";
import wtu from "../../../assets/images/WTu.jpg";

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
            <IoMdPaper size={28} /> Our Lab
          </div>
        </div>
        <div className={classes.peopleBlock}>
          {peopleLIst.map((people) => (
            <div className={classes.card}>
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
