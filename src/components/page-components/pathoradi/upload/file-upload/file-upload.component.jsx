import React, { useRef, useState } from "react";
import classes from "./file-upload.module.sass";

import { FaCloudUploadAlt } from "react-icons/fa";

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
      <div className={classes.wrapper}>
        <section>
          <p>Drag and drop your files anywhere or</p>
          <button type="button">
            {/* <FaCloudUploadAlt size={25} />  */}
            <span>  Upload {otherProps.multiple ? "files" : "a file"}</span>
          </button>
          <input
            type="file"
            ref={fileInputField}
            title=""
            value=""
            {...otherProps}
          />
        </section>

        {/*second part starts here*/}
        <article>
          <span>To Upload</span>
          <section>
            {Object.keys(files).map((fileName, index) => {
              let file = files[fileName];
              let isImageFile = file.type.split("/")[0] === "image";
              return (
                <section key={fileName}>
                  <div>
                    {isImageFile && (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`file preview ${index}`}
                      />
                    )}
                    <div isImageFile={isImageFile}>
                      <span>{file.name}</span>
                      <aside>
                        <span>{convertBytesToKB(file.size)} kb</span>
                        <i className="fas fa-trash-alt" />
                      </aside>
                    </div>
                  </div>
                </section>
              );
            })}
          </section>
        </article>
      </div>
    </>
  );
};

export default FileUpload;
