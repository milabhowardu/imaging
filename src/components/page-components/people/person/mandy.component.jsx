import React from "react";

import Person from "./common/person.component";

import mandy from "../../../../assets/images/Mandy.jpg";

const Mandy = () => {
  const person = {
    image: mandy,
    name: "Mandy Chang, PhD",
    title: "Postdoctoral Fellow",
    phone: "(202) 865-3760",
    email: "beming.chang@howard.edu",
    biography: ``,
    areasofExpertise: [],
    publicationsList:
      `
      `,
  };
  return (
    <>
      <Person person={person}/>
    </>
  );
  
};

export default Mandy;
