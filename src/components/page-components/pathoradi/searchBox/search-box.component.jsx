import React from "react";
import classes from "./search-box.module.sass";

const SearchBox = () => {
  return (
    <>
      <div className={classes.searchHead}>Starting to search at PathoRadi.</div>
      <div className={classes.inputGroup}>
        <input
          type="text"
          className={classes.input}
          placeholder="Enter name here..."
        />
        {/* <button class="btn btn--primary">Search</button> */}
      </div>
    </>
  );
};

export default SearchBox;
