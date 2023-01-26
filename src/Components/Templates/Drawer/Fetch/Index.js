import React from "react";
import FetchContactDetails from "./FetchContactDetails";
import FetchEducationDetails from "./FetchEducationDetails";
import FetchPersonalDetails from "./FetchPersonalDetails";

const FetchResume = () => {
  return (
    <div>
      <FetchPersonalDetails />
      <FetchContactDetails />
      <FetchEducationDetails />
    </div>
  );
};

export default FetchResume;
