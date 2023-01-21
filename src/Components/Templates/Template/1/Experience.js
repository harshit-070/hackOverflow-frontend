import React from "react";

const Experience = (props) => {
  console.log("Hi");
  return (
    <div class="rela-block page">
      <div class="rela-block content-container">
        <div class="rela-block caps greyed">Experience</div>
        {props.experience.map((experience) => (
          <JobCard {...experience} />
        ))}
      </div>
    </div>
  );
};

export const JobCard = ({ title, name, description }) => {
  return (
    <>
      <h3>{name}</h3>
      <p class="light">{title}</p>
      <p class="justified">{description}</p>
    </>
  );
};

export default Experience;
