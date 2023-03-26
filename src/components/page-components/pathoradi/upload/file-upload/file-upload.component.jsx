import React, { useRef, useState } from "react";
import classes from "./file-upload.module.sass";

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUpload = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  return (
    <>
      <label>{label}</label>
      <section className={classes.wrapper}>
        <p>Drag and drop your files anywhere or</p>
        <button type="button">
          <i className="fas fa-file-upload" />
          <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
        </button>
        <input
          type="file"
          ref={fileInputField}
          title=""
          value=""
          {...otherProps}
        />
      </section>
    </>
  );
};

export default FileUpload;
