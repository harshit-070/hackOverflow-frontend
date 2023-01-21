import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetResumeQuery } from "../../../../service/resume.service";
import { toastError } from "../../../../utils/toastMessage";
import "./style.css";

const Tempate2 = () => {
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
    <div className="template_2">
      <div id="header">
        <p id="name">{data.name}</p>
        <a
          href={`mailto:${
            (data.contact && data.contact.email) || "2020ume0200@iitjammu.ac.in"
          }`}
          target="_blank"
        >
          <p id="email">{(data.contact && data.contact.email) || "Email"}</p>
        </a>
      </div>
      <div class="right">
        <h3>CV Highlights</h3>
        <p>
          <ul>
            <li>
              Currently going through CS253 – Web Application Engineering and
              CS61A – Structure & Interpretation of Computer Programs
            </li>
            <li>
              Learnt basic Python, JavaScript, HTML, CSS on Codecademy.com.
            </li>
            <li>
              An independent, dedicated, efficient person. These attributes are
              proved through the series of courses I have taken or I am taking
              as of now independently through online platforms.
            </li>
            <li>
              Good Communication Skills, Presentation Skills, attitude towards
              leadership, authorisation and delegation, conflict resolution and
              negotiation and a very good team worker.
            </li>
          </ul>
        </p>

        <h3>Independent Courses</h3>
        <p>
          <ul>
            <li>
              <span id="course-name">
                HTML & CSS for Beginners – Web Fundamentals
              </span>{" "}
              – Codecademy.com
            </li>
            <li>
              <span id="course-name">
                Python – Fundamentals and Dynamic Programming{" "}
              </span>{" "}
              - Codecademy.com
            </li>
            <li>
              <span id="course-name">
                JavaScript – Programming Basics, JS Apps and Build Games{" "}
              </span>{" "}
              - Codecademy.com
            </li>
            <li>
              <span id="course-name">
                CS101: Introduction to Computer Science - Building a Web Crawler
              </span>{" "}
              - Udacity.com
            </li>
            <li>
              <span id="course-name">
                CS50x – Introduction to Computer Science I
              </span>{" "}
              – edX.org & Harvard University
            </li>
            <li>
              <span id="course-name">Calculus One</span> - Ohio State University
              & Coursera.org
            </li>
            <li>
              <span id="course-name">Introduction to Finance</span> -
              Coursera.org & University of Michigan
            </li>
          </ul>
        </p>
        <h3>Certifications / Awards:</h3>
        <p>
          <ul>
            <li>
              Scored highest in ACCA P1 – Governance, Risk & Ethics exam – June
              2012 session amongst full time international students at Kaplan
              Financial, London.
            </li>
            <li>
              Interviewed by ACCA for “international ACCA student in UK”,
              interview published in January 2012 edition of ACCA Student
              Accountant Magazine.
            </li>
            <li>
              Interviewed by ACCA for “international ACCA student in UK”,
              interview published in January 2012 edition of ACCA Student
              Accountant Magazine.
            </li>
          </ul>
        </p>
        <h3>Personal Information:</h3>
        <p>
          <ul>
            <li>
              A young, determined hard and smart working person. I believe in
              task based roles and complete ownership of work.
            </li>
            <li>
              <span id="course-name">Languages Known:</span>English, Hindi,
              Gujarati and Sindhi
            </li>
            <li>
              <span id="course-name">Hobbies:</span>I love reading Finance and
              IT related books / magazines, playing Chess, swimming, listening
              music, surfing Internet, self-learning through e-courses.
            </li>
          </ul>
        </p>
        <h3>Other Information</h3>
        <p>
          <ul>
            <li>
              <span id="course-name">Expected Salary:</span>As per company
              standards
            </li>
            <li>
              <span id="course-name">Area of Interest:</span>Software
              Development, Programming, Start-ups, Coding, App Development,
              Technical Support, Support Engineer, Customer Happiness, Client
              service, Investment Banking, Corporate Finance, Hedge Funds,
              Mergers & Acquisitions, Analyst, Equity Research, Business
              Analysis
            </li>
            <li>
              <span id="course-name">Joining Date:</span>Immediate
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Tempate2;
