import React from "react";

const Education = (props) => {
  return (
    <div class="rela-block page">
      <div class="side-bar">
        <p class="rela-block caps side-header">Education</p>
        {props.education.map((education) => (
          <p class="rela-block list-thing">{education.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Education;
