import React from "react";
import classes from "./person.module.sass";

import { IoPersonCircleSharp } from "react-icons/io5";

const Person = ({ person }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.navPath}>
        HOME » <strong>People</strong>
      </div>
      <div className={classes.blockHeader}>
        <div>
          <IoPersonCircleSharp size={30} /> Biomedical Imaging
        </div>
      </div>
      <div className={classes.person}>
        <div className={classes.personInfo}>
          <img src={person.image} />
          <div>
            <div className={classes.name}>{person.name}</div>

            <div className={classes.title}>{person.title} </div>
          </div>
        </div>
        <div>
          <div className={classes.header}>Biography</div>
          <div dangerouslySetInnerHTML={{__html: person.biography}}></div>
        </div>
        <div>
          <div  className={classes.header}>Areas of Expertise</div>
          <div>{person.areasofExpertise}</div>
        </div>
        <div>
          <div  className={classes.header}>Publications List</div>
          <div>{person.publicationsList}</div>
        </div>
        <div>
          <div  className={classes.header}>Contact Info</div>
          <div>{person.phone}</div>
          <div>{person.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Person;
