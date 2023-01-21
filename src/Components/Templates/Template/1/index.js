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
    console.log(data);
    if (isSuccess) {
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
            <div className="abs-center">Kyle J Shanks</div>
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
              <p className="logo-text">kj</p>
            </div>
          </div>
          <p>123 My Place Drive</p>
          <p>Astoria, New York 11105</p>
          <p>1-800-CALLPLZ</p>
          <p>emailsareforsquares@gmail.com</p>
          <br />
          <p className="rela-block social twitter">Twitter stuff</p>
          <p className="rela-block social pinterest">Pinterest things</p>
          <p className="rela-block social linked-in">Linked-in man</p>
          <p className="rela-block caps side-header">Expertise</p>
          <p className="rela-block list-thing">HTML</p>
          <p className="rela-block list-thing">CSS (Stylus)</p>
          <p className="rela-block list-thing">JavaScript & jQuery</p>
          <p className="rela-block list-thing">Killer Taste</p>
          <p className="rela-block caps side-header">Education</p>
          <p className="rela-block list-thing">Advanced potion making</p>
          <p className="rela-block list-thing">Degree in popping and locking</p>
          <p className="rela-block list-thing">Knitting game on point</p>
          <p className="rela-block list-thing">Culinary af</p>
        </div>
        <div className="rela-block content-container">
          <h2 className="rela-block caps title">Jr Front-End Developer</h2>
          <div className="rela-block separator"></div>
          <div className="rela-block caps greyed">Profile</div>
          <p className="long-margin">{data.summary}</p>
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
