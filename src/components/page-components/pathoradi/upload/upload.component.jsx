import React, { useState, useRef } from "react";
import classes from "./upload.module.sass";
import Hero from "../../../base-components/hero/hero.component";

import { FaCloudUploadAlt } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
import FileUpload from "./file-upload/file-upload.component";

const Upload = () => {

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <a href="/pathoradi">PathRadi</a> » <strong>upload</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <FaCloudUploadAlt size={25} /> Upload Raw Image(s)
          </div>
        </div>
        <div className={classes.upload}>
          <form onSubmit={handleSubmit}>

            <div className={classes.field}>
              <label for="name"> User Name</label>
              <input type="text" id="name" />
            </div>
            <div className={classes.field}>
              <label for="project"> Project Name</label>
              <input type="text" id="project" />
            </div>
            <div className={classes.field}>
              <label for="pixel"> Pixel resolution of the slides</label>
              <input type="text" id="pixel" />
            </div>
            <div className={classes.field}>
              <label for="thickness">  Slide thickness</label>
              <input type="text" id="thickness" />
            </div>
            <div className={classes.field}>
              <label for="sample"> Sample ID(optional)</label>
              <input type="text" id="sample" />
            </div>
            <div className={classes.field}>
              <FileUpload
                accept=".jpg,.png,.jpeg"
                label="Upload raw image to get result"
                multiple
                updateFilesCb={updateUploadedFiles}
              />
            </div>

            <div className={classes.submitField}>
                <input type="submit" name="submit" value="SUBMIT"  />
                <input type="submit" name="submit" value="CLEAR" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Upload;
