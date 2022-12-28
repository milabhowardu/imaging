import React from "react";
import classes from "./contact.module.sass";
import Hero from "../../base-components/hero/hero.component";

import { FiMapPin } from "react-icons/fi";

import background from "../../../assets/images/Direction.jpg";
import map from "../../../assets/images/Map.png";

const Contact = () => {
  return (
    <>
      <Hero background={background} title="" />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <strong>Contact Us</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <FiMapPin size={25} /> Location
          </div>
        </div>
        <div className={classes.contact}>
          <div className={classes.map}>
            
            <div className={classes.info}>
              <div className={classes.infoHeader}>Directions</div>
              <div className={classes.infoContext}>
                The Molecular Imaging Lab offices are located in the Howard
                University Cancer Center. Visitors may access the lab via the
                Hospital Main entrance at: 2041 Georgia Ave NW, Washington DC,
                20060
              </div>
              <div className={classes.infoHeader}>Parking</div>
              <div className={classes.infoContext}>
                There are two paid parking lots in the area, one in front of the
                hospital at 2041 Georgia Ave NW, and one behind the hospital at
                the intersection of 5th St NW and V St NW. Street parking may
                also be available in the area.
              </div>
              <div className={classes.infoHeader}>Public Transportation</div>
              <div className={classes.infoContext}>
                <p>
                  The closest Metro stations are Shaw/Howard University (North
                  Entrance) and U St/African-Amer Civil War Memorial/Cardozo
                  (East Entrance). Both Metro stations are served by the Yellow
                  and Green Lines of DC's Metro System.
                </p>
                <p>
                  The area is also served by DC Metrobus lines 70/79, which run
                  along Georgia Ave/7th St NW, and lines 90/92/96, which run
                  along Florida Ave/U St NW.
                </p>
              </div>
            </div>
            <iframe src="https://maps.google.com/maps?t=m&amp;output=embed&amp;iwloc=near&amp;z=16&amp;q=520+W+Street+NW%2C+washington%2C+DC+20059" aria-label="" className={classes.googleMap}></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
