import React from "react";
import FetchContactDetails from "./FetchContactDetails";
import FetchPersonalDetails from "./FetchPersonalDetails";

const FetchResume = () => {
  return (
    <div>
      <FetchPersonalDetails />
      <FetchContactDetails />
    </div>
  );
};

export default FetchResume;
