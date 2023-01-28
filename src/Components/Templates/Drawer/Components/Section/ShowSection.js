import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCustomizedSectionsDetails } from "../../../../../feature/resumeSlice";
import AchievementTypeSection from "./AchievementTypeSection";
import ExperienceTypeSection from "./ExperienceTypeSection";
import SkillTypeSections from "./SkillTypeSections";

const ShowSection = ({ section_id }) => {
  const [section, setSection] = useState({});
  const sectionDetails = useSelector((state) =>
    getCustomizedSectionsDetails(state)
  );
  useEffect(() => {
    setSection(sectionDetails.find((section) => section._id === section_id));
  }, [sectionDetails, section_id]);

  if (!section) {
    return <div>Error</div>;
  }

  return (
    <div>
      {section.type === "Achievement Type" ? (
        <AchievementTypeSection _id={section._id} />
      ) : (
        <></>
      )}
      {section.type === "Experience Type" ? (
        <ExperienceTypeSection _id={section._id} />
      ) : (
        <></>
      )}
      {section.type === "Skill Type" ? (
        <SkillTypeSections _id={section._id} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ShowSection;
