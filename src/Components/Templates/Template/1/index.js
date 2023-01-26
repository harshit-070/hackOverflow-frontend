import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetResumeQuery } from "../../../../service/resume.service";
import { toastError } from "../../../../utils/toastMessage";
import "./style.css";
import { Helmet } from "react-helmet";

const Teamplate_1 = () => {
  const [getResume, getResumeResult] = useLazyGetResumeQuery();
  const [data, setData] = useState({});
  const { resume_id } = useParams();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    getResume(resume_id);
  }, [getResume, resume_id]);

  useEffect(() => {
    const { isLoading, isError, isSuccess, error, data } = getResumeResult;
    setError(isError);
    setLoading(isLoading);
    if (isSuccess) {
      console.log(data);
      setData(data.data);
    }

    if (isError) {
      toastError("", error);
    }
  }, [getResumeResult]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error Please try again</div>;
  }

  if (!data) {
    return <div>Error</div>;
  }

  return (
    <div className="template_1">
      <div className="rela-block page">
        <div className="rela-block top-bar">
          <div className="caps name">
            <div className="abs-center">{data.name}</div>
          </div>
        </div>
        <div className="side-bar">
          <div className="mugshot">
            <div className="logo">
              <svg viewBox="0 0 80 80" className="rela-block logo-svg">
                <path
                  d="M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z"
                  strokeWidth="2.5"
                  fill="none"
                />
              </svg>
              <p className="logo-text">{data.name && data.name[0]}</p>
            </div>
          </div>
          <p>{(data.address && data.address.city) || "City"}</p>
          <p>{(data.address && data.address.country) || "Country"}</p>
          <p>{(data.contact && data.contact.number) || "Contact Number"}</p>
          <p>{(data.contact && data.contact.email) || "Email"}</p>
          <br />
          {data.socialMedia?.linkedin ? (
            <p className="rela-block social linked-in">
              {data.socialMedia?.linkedin}
            </p>
          ) : (
            <></>
          )}{" "}
          {data.socialMedia?.github ? (
            <p className="rela-block social github">
              {data.socialMedia?.github}
            </p>
          ) : (
            <></>
          )}
          <p className="rela-block caps side-header">Expertise</p>
          {data.skills &&
            data.skills.map((skill) => (
              <p className="rela-block list-thing">{skill}</p>
            ))}
          <p className="rela-block caps side-header">Education</p>
          {data.education &&
            data.education.map((inst) => (
              <p className="rela-block list-thing">{inst.specialization}</p>
            ))}
        </div>

        <div className="rela-block content-container">
          <h2 className="rela-block caps title">{data.headline}</h2>
          <div className="rela-block separator"></div>
          <div className="rela-block caps greyed">Profile</div>
          <p className="long-margin">{data.summary || "Summary"}</p>
          <div className="rela-block caps greyed">Experience</div>

          {data.experience &&
            data.experience.map((experience) => <JobCard {...experience} />)}
        </div>
      </div>
      <Helmet>
        <script
          src="https://code.jquery.com/jquery-2.2.4.min.js"
          type="text/javascript"
        />
      </Helmet>
    </div>
  );
};

export const JobCard = ({ title, name, description }) => {
  return (
    <>
      <h3>{name}</h3>
      <p className="light">{title}</p>
      <p className="justified">{description}</p>
    </>
  );
};
export default Teamplate_1;
