import React from "react";
import { useParams } from "react-router-dom";
import Template1 from "./Template/1/index";
// import Template2 from "./Template/2/index";
// import Template3 from "./Template/2/index";
import Template4 from "./Template/4";

const ViewResume = () => {
  const { template } = useParams();
  return (
    <>
      {template === "1" ? <Template1 /> : <></>}
      {/* {template === "2" ? <Template2 /> : <></>} */}
      {/* {template === "3" ? <Template3 /> : <></>} */}
      {template === "4" ? <Template4 /> : <></>}
    </>
  );
};

export default ViewResume;
