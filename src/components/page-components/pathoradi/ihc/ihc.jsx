import React, { useRef, useEffect } from "react";
import classes from "./ihc.module.sass";

import Hero from "../../../base-components/hero/hero.component";
import { FaBrain } from "react-icons/fa";
import background from "../../../../assets/images/Facilities.jpg";
import SearchBox from "../searchBox/search-box.component";

// import { select } from "d3";

const data = [25, 30, 45, 60, 20];

const Ihc = () => {
  const svgRef = useRef();
  
//   useEffect(()=>{
//     console.log(svgRef);
//     const svg = select(svgRef.current);
//     svg.selectAll(("circle")
//         .data(data)
//         .join(
//             enter => enter.append("circle"),
//             update => update.att("class", "updated"),
//             exit => exit.remove()
//         ));
//   }, []);

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <a href="/pathoradi">PathRadi</a> » <strong>IHC</strong>
        </div>
        {/* <SearchBox /> */}
        <div className={classes.blockHeader}>
          <div>
            <FaBrain size={25} /> IHC
          </div>
        </div>

        <svg className={classes.ihcCanvas} ref={svgRef}></svg>

      </div>
    </>
  );
};

export default Ihc;
