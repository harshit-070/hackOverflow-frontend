import React from "react";
import FetchAchievementsDetails from "./FetchAchievementDetails";
import FetchContactDetails from "./FetchContactDetails";
import FetchCustomizedSectionsDetails from "./FetchCustomizedSectionDetails";
import FetchEducationDetails from "./FetchEducationDetails";
import FetchExperienceDetails from "./FetchExperienceDetails";
import FetchPersonalDetails from "./FetchPersonalDetails";
import FetchProjectDetails from "./FetchProjectDetails";
import FetchSkillsDetails from "./FetchSkillsDetails";

const FetchResume = () => {
  return (
    <div>
      <FetchPersonalDetails />
      <FetchContactDetails />
      <FetchEducationDetails />
      <FetchExperienceDetails />
      <FetchProjectDetails />
      <FetchSkillsDetails />
      <FetchAchievementsDetails />
      <FetchCustomizedSectionsDetails />
    </div>
  );
};

export default FetchResume;
