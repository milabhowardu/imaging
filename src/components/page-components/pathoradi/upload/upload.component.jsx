import React, { useState, useRef } from "react";
import classes from "./upload.module.sass";
import Hero from "../../../base-components/hero/hero.component";

import { FaCloudUploadAlt } from "react-icons/fa";   

const Upload = ( ) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <a href="./pathoradi">PathRadi</a> » <strong>upload</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <FaCloudUploadAlt size={25} /> Upload raw image to get result 
          </div>
        </div>

        <div>
          <input type="file" ref={fileInputField} />
        </div>
      </div>
    </>
  );
};

export default Upload;