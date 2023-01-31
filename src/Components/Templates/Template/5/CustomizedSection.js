import { Chip, Divider, Typography, Box, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getCustomizedSectionsDetails } from "../../../../feature/resumeSlice";

const CustmoizedSection = () => {
  const customizedSections = useSelector((state) =>
    getCustomizedSectionsDetails(state)
  );
  return (
    <>
      {customizedSections?.map((section, index) => {
        if (section.type === "Skill Type") {
          return (
            <Grid item xs={6}>
              <SkillTypeView section={section} key={index} />
            </Grid>
          );
        }
        if (section.type === "Achievement Type") {
          return (
            <Grid item xs={6}>
              <AchievementTypeView section={section} key={index} />;
            </Grid>
          );
        }
        if (section.type === "Experience Type") {
          return (
            <Grid item xs={6}>
              <ExperienceTypeView section={section} key={index} />;
            </Grid>
          );
        }
        return <></>;
      })}
    </>
  );
};

const SkillTypeView = ({ section }) => {
  if (!section || !section.data || section.data.length === 0) {
    return (
      <>
        <Typography variant="h5" fontWeight={600} sx={{ color: "navy" }}>
          {section?.title}
        </Typography>
      </>
    );
  }
  return (
    <>
      <Typography variant="h5" fontWeight={600} sx={{ color: "navy" }}>
        {section?.title}
      </Typography>
      <Divider variant="middle" sx={{ fontWeight: 600 }} />
      <Box sx={{ marginBottom: "1rem", padding: "0.3rem 0 0 1rem" }}>
        {section?.data[0]?.skills?.map((skill, index) => (
          <span key={index}>
            <Chip label={skill} />
            &nbsp;&nbsp;
          </span>
        ))}
      </Box>
    </>
  );
};

const AchievementTypeView = ({ section }) => {
  return (
    <>
      <Typography variant="h5" fontWeight={600} sx={{ color: "navy" }}>
        {section.title}
      </Typography>
      <Divider variant="middle" sx={{ fontWeight: 600 }} />
      <Box sx={{ marginBottom: "1rem", padding: "0.3rem 0 0 1rem" }}>
        <Typography variant="body1">{section?.data[0]?.description}</Typography>
      </Box>
    </>
  );
};

const ExperienceTypeView = ({ section }) => {
  return (
    <>
      <Typography variant="h5" fontWeight={600} sx={{ color: "navy" }}>
        {section.title}
      </Typography>
      <Divider variant="middle" sx={{ fontWeight: 600 }} />
      {section?.data?.map((exp, index) => (
        <Box
          sx={{ marginBottom: "1rem", padding: "0.3rem 0 0 1rem" }}
          key={index}
        >
          <Typography variant="body1" fontWeight={600}>
            {exp.name},{exp.location}
          </Typography>
          <Typography variant="body1">
            {exp.title} ({exp.start_month}, {exp.start_year}
            {exp.is_present ? (
              "-Present"
            ) : (
              <>
                -{exp.end_month}, {exp.end_year}
              </>
            )}
            )
          </Typography>
          <Typography variant="body1">{exp.description}</Typography>
        </Box>
      ))}
    </>
  );
};

export default CustmoizedSection;
